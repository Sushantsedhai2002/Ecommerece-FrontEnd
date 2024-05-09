import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import Searchicon from "../../images/search-icon.png";
// import PlayStore from "../../images/footer-gp.png";
// import AppStore from "../../images/footer-as.png";
import FindPhoto from "../../images/PA.png";
import Facebookicon from "../../images/facebook-round-color-icon.png";
import Instagramicon from "../../images/ig-instagram-icon.png";
import Twittericon from "../../images/twitter-square-color-icon.png";

const Footer = () => {
  return (
    <div className="footerContainer container">
      {/* <div className="footerSearch">
          <input className="footerSearchBar" type="text" placeholder="Search" />
          <img className="searchIcon" src={Searchicon} />
          <button className="searchButton">Search</button>
        </div> */}

      <div className="footerInfo">
        <div className="footerInfofirst">
          <div className="footerInfoTitle">Customer Care</div>
          <ul className="Footer-list">
            <Link
              to="/helpcenter"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              {" "}
              <li className="FooterListChild">Help Center</li>
            </Link>

            <Link
              to="/postingrules"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <li className="FooterListChild">Posting Rules</li>
            </Link>
            <Link
              to="/howtobuy"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <li className="FooterListChild">How to Buy</li>
            </Link>
            <li className="FooterListChild">FAQs</li>
          </ul>
        </div>

        <div className="footerInfoSecond">
          <div className="footerInfoTitle">Company</div>
          <ul className="Footer-list">
            <li className="FooterListChild">
              <Link
                to="/aboutus"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                About Us
              </Link>
            </li>
            <Link
              to="/contactus"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <li className="FooterListChild">Contact Us</li>
            </Link>
            <Link
              to="/privacypolicy"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <li className="FooterListChild">Privacy Policy</li>
            </Link>
            <Link
              to="/termsandconditions"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <li className="FooterListChild">Terms & Conditions</li>
            </Link>
          </ul>
        </div>
        <div className="footerInfoThird">
          <div className="footerInfoTitle">&nbsp;Find Us</div>
          <ul className="Footer-list">
            <li>
              <img src={FindPhoto} width="130px" height="130px" />
            </li>
            {/* <li>
                <img src={AppStore} alt="" />
              </li> */}
          </ul>
        </div>

        <div className="footerInfomap">
          <iframe
            className="FooterMap"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31397712412!2d85.3261328!3d27.708960349999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1713768059571!5m2!1sen!2snp"
          ></iframe>
        </div>
      </div>

      <div className="FooterLast">
        <div className="FooterLastRight">
          &copy;Copyright 2024 E-Commerce. All rights reserved
        </div>
        <div className="FooterLastLeft">
          <img className="FooterSocialIcons" src={Facebookicon} alt="" />
          <img className="FooterSocialIcons" src={Instagramicon} alt="" />
          <img className="FooterSocialIcons" src={Twittericon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
