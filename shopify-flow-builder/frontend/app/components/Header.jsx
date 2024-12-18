import FeedbackButton from "./FeedbackButton";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="header flex justify-between items-center p-4 bg-blue-600 text-white">
      <div className="header-left">
        <FeedbackButton />
      </div>
      <div className="header-center">
        <SearchBar />
      </div>
    </header>
  );
}
