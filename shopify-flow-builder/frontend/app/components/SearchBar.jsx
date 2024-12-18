import { useState } from "react";
import { Search, Loader2 } from "lucide-react";

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSearch = async () => {
    const userInput = input.trim();
    if (isProcessing || !userInput) return;

    setIsProcessing(true);
    console.log("==> Sending user input:", userInput);

    try {
      await onSearch(userInput);
    } catch (error) {
      console.error("Error processing search:", error.message);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <form
      className="search-bar relative w-full max-w-7xl mx-auto mt-12 px-4"
      onSubmit={handleButtonClick}
      aria-label="Workflow Search Form"
    >
      <div className="relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Describe your workflow in detail..."
          disabled={isProcessing}
          className={`w-full px-10 py-5 pr-16 text-2xl border rounded-full shadow-lg focus:outline-none focus:ring-4 transition duration-200 ${
            isProcessing
              ? "border-gray-300 bg-gray-100 cursor-not-allowed"
              : "border-gray-300 focus:ring-blue-500"
          }`}
          aria-label="Workflow Description Input"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-6">
          {isProcessing ? (
            <Loader2 className="animate-spin h-8 w-8 text-gray-600" aria-label="Loading" />
          ) : (
            <Search
              className="h-8 w-8 text-gray-600 cursor-pointer"
              onClick={handleButtonClick}
              role="button"
              aria-label="Search"
            />
          )}
        </div>
      </div>
    </form>
  );
}
