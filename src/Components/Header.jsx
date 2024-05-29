import { useState } from "react";
import "./Header.css";

const Header = ({ title, subtitle, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className="header">
      <h1 className="header-title">{title}</h1>
      {subtitle && <h2 className="header-subtitle">{subtitle}</h2>}
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Enter city name"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
    </header>
  );
};

export default Header;
