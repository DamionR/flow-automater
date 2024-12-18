import FeedbackButton from "./FeedbackButton";
import OutputSection from "./OutputSection";
import DescriptionSection from "./DescriptionSection";

export default function PageLayout({ children, onSearch, generatedData }) {
  return (
    <div className="page-layout flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="header flex justify-between items-center px-8 py-6 bg-blue-600 text-white">
        <div className="text-2xl font-bold">Shopify Flow Builder</div>
        <FeedbackButton />
      </header>

      {/* Main Content */}
      <main className="content flex-1 p-8 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          {/* Search Bar */}
          <div className="mb-8 flex justify-center">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const inputText = e.target.elements.searchInput.value;
                onSearch(inputText);
              }}
              className="w-full"
            >
              <div className="relative max-w-4xl mx-auto">
                <input
                  name="searchInput"
                  type="text"
                  placeholder="Describe your workflow..."
                  className="w-full px-6 py-4 border border-gray-300 rounded-full text-2xl shadow focus:outline-none focus:ring-4 focus:ring-blue-500"
                  style={{ maxWidth: "800px" }}
                />
                <button
                  type="submit"
                  className="absolute inset-y-0 right-0 flex items-center pr-6"
                >
                  <span className="text-gray-500 text-3xl">🔍</span>
                </button>
              </div>
            </form>
          </div>

          {/* Render children */}
          {children}

          {/* Render OutputSection and DescriptionSection */}
          {generatedData && (
            <>
              <OutputSection data={generatedData} />
              <DescriptionSection explanation={generatedData.explanation} />
            </>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer p-6 bg-gray-800 text-white text-center">
        <p>&copy; 2024 Shopify Flow Builder</p>
      </footer>
    </div>
  );
}
