export const generateWorkflow = async (message) => {
  console.log("==> Sending request to /direct-ai endpoint");
  console.log("Request Payload:", { message });

  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/direct-ai`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      }
    );

    console.log("Response Status:", response.status);

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error Response from Backend:", errorData);
      throw new Error(errorData.error || "Failed to process AI response");
    }

    const data = await response.json();
    console.log("Response Data from Backend:", data);

    return data; // Return the AI response
  } catch (error) {
    console.error("Error generating workflow:", error.message);
    throw new Error(error.message || "Failed to generate workflow");
  }
};
