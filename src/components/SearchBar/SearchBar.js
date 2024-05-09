import React from "react";
import "./SearchBar.css";
import Searchicon from "../../images/search-icon.png";
const SearchBar = () => {
  return (
    <div className="footerContainer container">
      <div className="footerSearch">
        <input className="footerSearchBar" type="text" placeholder="Search" />
        <img className="searchIcon" src={Searchicon} />
        <button className="searchButton">Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
