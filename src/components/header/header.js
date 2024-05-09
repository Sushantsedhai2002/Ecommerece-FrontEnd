import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import cartIcon from "../../images/cart-black-icon.png";
import searchIcon from "../../images/search-icon.png";
import personIcon from "../../images/personLogo.jpg";
import shopIcon from "../../images/shop-icon.png";
import "./header.css";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const categories = [
    "Women's Clothing",
    "Men's Clothing",
    "Sports",
    "Groceries",
  ];

  return (
    <div className="container">
      <div className="headerContainer">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="headerEast kaushanScript bold">Ecommerce</div>
        </Link>
        <div className="dropDown" style={{ marginLeft: "0", marginRight: "0" }}>
          <button
            onClick={toggleDropdown}
            style={{
              width: "132px",
              height: "22px",
              border: "none",
              fontFamily: "inter",
              fontSize: "20px",
              fontWeight: "400",
              margin: "0",
              padding: "0",
            }}
          >
            Categories
          </button>
          {isDropdownOpen && (
            <ul
              style={{
                position: "absolute",
                zIndex: "100",
                background: "#FFFFFF",
              }}
            >
              {categories.map((category, index) => (
                <li
                  style={{
                    textDecoration: "none",
                    listStyleType: "none",
                    color: "inherit",
                  }}
                  key={index}
                >
                  <Link to={`/category/${category.toLowerCase()}`}>
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="headerCenter">
          <div className="SearchInput">
            <img className="headerIcon headerSearchIcon" src={searchIcon} />
            <input
              type="text"
              className="headerCenterSearch"
              placeholder="Search for products, brand and more"
            />
          </div>
        </div>
        <div className="headerWest">
          <ul className="headerWestChildren">
            <li className="headerWestChild">
              <Link className="headerLink" to="/login">
                <button className="headerWestButton">
                  <img
                    src={personIcon}
                    className="headerIcon"
                    style={{ marginRight: "8px" }}
                  />
                  Login
                </button>
              </Link>
            </li>

            <span>|</span>
            <li className="headerWestChild">
              <Link className="headerLink" to="/becomeaseller">
                <button className="headerWestButton">
                  <img
                    src={shopIcon}
                    alt=""
                    className="headerIcon"
                    style={{ marginRight: "8px" }}
                  />
                  Become a Seller
                </button>
              </Link>
            </li>
            <span>|</span>
            <li className="headerWestChild">
              <Link className="headerLink" to="/cart">
                <button className="headerWestButton">
                  <img src={cartIcon} className="headerIcon" />
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
