import { useState, useCallback } from "react";
import debounce from "lodash.debounce";
import PageLayout from "~/components/PageLayout";
import { generateWorkflow } from "~/utils/api";

export default function IndexRoute() {
  const [generatedData, setGeneratedData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = useCallback(
    debounce(async (inputText) => {
      const userMessage = inputText?.trim(); // Clean and validate input
      if (!userMessage) {
        console.warn("==> Ignoring empty input");
        return; // Avoid empty API calls
      }

      console.log("==> User input received:", userMessage);
      setError(null);
      setIsLoading(true);
      setGeneratedData(null);

      try {
        const response = await generateWorkflow(userMessage); // Call the API
        console.log("==> Raw AI Response:", response);

        if (response && response.aiResponse) {
          // Extract the JSON block from the AI response using regex
          const jsonMatch = response.aiResponse.match(/```json\n([\s\S]*?)\n```/);

          if (jsonMatch && jsonMatch[1]) {
            // Parse the extracted JSON string
            const parsedData = JSON.parse(jsonMatch[1]);
            console.log("==> Parsed AI Response:", parsedData);

            // Update the state with the parsed data
            setGeneratedData({
              trigger: parsedData.trigger || null,
              conditions: parsedData.conditions || [],
              actions: parsedData.actions || [],
              explanation: parsedData.explanation || null,
            });
          } else {
            throw new Error("Unable to extract JSON from AI response.");
          }
        } else {
          throw new Error("Incomplete response received from backend.");
        }
      } catch (err) {
        console.error("Error processing workflow:", err.message);
        setError("Something went wrong. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }, 500), // 500ms debounce
    []
  );

  return (
    <PageLayout onSearch={handleSearch} generatedData={generatedData}>
      {/* Display error message */}
      {error && (
        <div className="error text-red-600 text-center mt-4">
          {error}
        </div>
      )}

      {/* Display loading message */}
      {isLoading && (
        <div className="loading text-gray-500 text-lg mt-8 text-center">
          Generating your workflow...
        </div>
      )}
    </PageLayout>
  );
}
