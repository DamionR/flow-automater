import express, { json } from "express";
import axios from "axios";
import { config } from "dotenv";
import cors from "cors";
import { encoding_for_model } from "tiktoken"; // Import tiktoken for token counting

// Import JSON files
import emptyWorkflow from "./data/empty_workflow.json" assert { type: "json" };
import shopifyFlowActions from "./data/shopify_flow_actions.json" assert { type: "json" };
import shopifyFlowTriggers from "./data/shopify_flow_triggers.json" assert { type: "json" };
import shopifyFlowPrompts from "./data/shopify_flow_prompt.json" assert { type: "json" };

config();

const app = express();
const PORT = 5001;

const MAX_TOKENS = 8192; // Token limit for GPT-4

app.use(json());
app.use(cors({ origin: "http://localhost:5173", methods: ["POST"] }));

// Function to calculate token count
const calculateTokenCount = (messages) => {
  const enc = encoding_for_model("gpt-4");
  const tokenCount = messages.reduce((total, message) => total + enc.encode(message.content).length, 0);
  enc.free();
  return tokenCount;
};

// Function to truncate messages while preserving user input
const truncateMessages = (messages) => {
  let tokenCount = calculateTokenCount(messages);
  console.log(`[INFO] Initial Token Count: ${tokenCount}`);

  // Truncate system messages starting from index 2
  while (tokenCount > MAX_TOKENS) {
    if (messages.length <= 2) {
      console.warn("[WARN] Cannot truncate further without removing essential messages.");
      break;
    }
    console.log("[ACTION] Truncating a system message to reduce token count...");
    messages.splice(2, 1);
    tokenCount = calculateTokenCount(messages);
    console.log(`[INFO] New Token Count: ${tokenCount}`);
  }

  console.log(`[INFO] Final Token Count After Truncation: ${tokenCount}`);
  return messages;
};

// Endpoint: /direct-ai
app.post("/direct-ai", async (req, res) => {
  const userMessage = req.body.message;

  console.log("\n==> [START] Received request to /direct-ai <==");
  console.log("[INFO] Request Payload:", JSON.stringify(req.body, null, 2));

  if (!userMessage) {
    console.error("\n[ERROR] Validation Error: 'message' field is missing.");
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    // Construct messages array
    let messages = [
      { role: "system", content: "You are a helpful assistant for building Shopify flows. Ensure strict adherence to the specified JSON structure." },
      { role: "system", content: `Empty Workflow: ${JSON.stringify(emptyWorkflow)}` },
      { role: "system", content: `Flow Actions: ${JSON.stringify(shopifyFlowActions)}` },
      { role: "system", content: `Flow Triggers: ${JSON.stringify(shopifyFlowTriggers)}` },
      { role: "system", content: `Flow Prompt: ${JSON.stringify(shopifyFlowPrompts)}` },
      { role: "user", content: userMessage },
    ];

    console.log("\n[INFO] Validating Token Count...");
    messages = truncateMessages(messages);

    console.log("\n[INFO] Requesting OpenAI API...");

    // Call OpenAI API
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4",
        messages,
        response_format: { type: "json_object" }, // Enforce strict JSON response
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const aiResponse = response.data.choices[0]?.message?.content;
    console.log("\n[DEBUG] Raw AI Response:", aiResponse);

    // Validate and parse the AI response
    const parsedResponse = JSON.parse(aiResponse);

    const { trigger, conditions, actions, explanation } = parsedResponse;

    // Ensure all keys exist
    if (!trigger || !conditions || !actions || !explanation) {
      console.error("\n[ERROR] AI Response is missing required fields.");
      return res.status(400).json({ error: "AI response does not include all required components." });
    }

    // Respond with validated structure
    return res.json({
      trigger,
      conditions,
      actions,
      explanation,
    });
  } catch (error) {
    console.error("\n[ERROR] Exception occurred during OpenAI API call:");
    console.error(error.message);
    return res.status(500).json({
      error: "Failed to process AI response",
      details: error.response?.data || error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`\n==> Server is running on http://localhost:${PORT} <==`);
});
