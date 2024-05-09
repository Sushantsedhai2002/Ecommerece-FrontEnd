import React from "react";
import "../header/header.css";
import searchimage from "../../images/search-icon.png";
import Logo1 from "../../images/personLogo.jpg";
import Logo2 from "../../images/shop-icon.png";
import Logo3 from "../../images/cart-black-icon.png";

const HeaderBackup = () => {
  return (
    <>
      <header>
        <div className="brandName">E Commerce</div>
        <div className="inputContainer">
          <input
            className="searchBar"
            type="text"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="loginSignup">
          <img className="personLogo" src={Logo1} />
          <div className="LS">Login</div>
          <div className="vertcalLine"></div>
          <img className="personLogo" src={Logo1} />
          <div className="LS">SignUp</div>
          <div className="vertcalLine"></div>
          <img className="personLogo" src={Logo2} />
          <div className="LS">Become a Seller</div>
          <div className="vertcalLine"></div>
          <img className="personLogo" src={Logo3} />
        </div>
      </header>
    </>
  );
};

export default HeaderBackup;
