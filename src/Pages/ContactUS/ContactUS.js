import React from "react";
import "./ContactUs.css";
import PhoneIcon from "../../images/phone_icon.png";
import MessageIcon from "../../images/Message_light.png";
import PersonIcon from "../../images/User_alt_light.png";

const Contact = () => {
  return (
    <div className="contactUsContainer ">
      <div className="contactUsContainerTop">
        <p
          style={{
            color: "#FA902D",
            fontSize: "28px",
            fontWeight: "600",
            marginBottom: "0",
            marginTop: "0",
            padding: "0",
            textAlign: "center",
          }}
        >
          CONTACT US
        </p>
        <p
          style={{
            color: "black",
            fontSize: "20px",
            fontWeight: "400",
            margin: "0",
            padding: "0",
            textAlign: "center",
          }}
        >
          We're here to help!
        </p>
      </div>
      <div className="contactUsContainerBottom lato">
        <div className="contactUsContainerBottomLeft">
          <p
            style={{
              fontSize: "24px",
              fontWeight: "600",
              color: "white",
              margin: "0",
              padding: "0",
              marginTop: "16px",
              marginBottom: "12px",
            }}
          >
            Customer Support Details
          </p>
          <p
            style={{
              fontSize: "20px",
              fontWeight: "600",
              color: "white",
              margin: "0",
              padding: "0",
            }}
          >
            Please reach out to us on the below mentioned details
          </p>
          <div className="contactUsContainerBottomLeftInfo">
            <img className="contactUsIcon" src={PhoneIcon} alt="" />
            <div className="contactUsContainerBottomLeftDescription">
              <p style={{ padding: "0", margin: "0px 0px 7px 0px" }}>
                Toll Free Number: 16600199000
              </p>
              <p style={{ margin: "0", padding: "0" }}>
                (10 am to 5 pm, Working Days){" "}
              </p>
            </div>
          </div>

          <div className="contactUsContainerBottomLeftInfo">
            <img className="contactUsIcon" src={PhoneIcon} alt="" />
            <div className="contactUsContainerBottomLeftDescription">
              <p style={{ padding: "0", margin: "0px 0px 7px 0px" }}>
                Phone Number: 9848742590, 01-4782208{" "}
              </p>
              <p style={{ margin: "0", padding: "0" }}>
                (10 am to 5 pm, Working Days){" "}
              </p>
            </div>
          </div>

          <div className="contactUsContainerBottomLeftInfo">
            <img className="contactUsIcon" src={MessageIcon} alt="" />
            <div className="contactUsContainerBottomLeftDescription">
              <p style={{ padding: "0", margin: "0px 0px 7px 0px" }}>
                Email: support@ecommerce.com
              </p>
            </div>
          </div>
        </div>
        <div className="contactUsContainerBottomRight">
          <div className="contactUsContainerBottomRightInterior lato">
            <p
              style={{
                fontSize: "24px",
                fontWeight: "600",
                padding: "0",
                margin: "0",
                marginBottom: "16px",
              }}
            >
              Contact Form
            </p>

            <div className="InteriorInfo">
              <img className="contactUsIcon" src={PersonIcon} alt="" />
              <p style={{ margin: "0", padding: "0" }}>Name</p>
            </div>
            <input className="aboutUsInput" type="text" />

            <div className="InteriorInfo">
              <img className="contactUsIcon" src={MessageIcon} alt="" />
              <p style={{ margin: "0", padding: "0" }}>Email</p>
            </div>
            <input className="aboutUsInput" type="text" />

            <div className="InteriorInfo">
              <img className="contactUsIcon" src={PhoneIcon} alt="" />
              <p style={{ margin: "0", padding: "0" }}>Phone Number</p>
            </div>
            <input className="aboutUsInput" type="text" />

            <div className="InteriorInfo">
              <img className="contactUsIcon" src={MessageIcon} alt="" />
              <p style={{ margin: "0", padding: "0" }}>Message</p>
            </div>
            <input
              className="aboutUsInput"
              type="text"
              style={{ height: "96px", marginBottom: "16px" }}
            />
            <button className="contactUsbutton lato">SEND</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
