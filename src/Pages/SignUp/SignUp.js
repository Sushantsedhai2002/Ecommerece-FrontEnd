import React from "react";
import "./Signup.css";
import Signupimg from "../../images/signup_photo.png";
import PersonIcon from "../../images/User_alt_light.png";
import MessageIcon from "../../images/Message_light.png";
import CallIcon from "../../images/phone_icon.png";
import LockIcon from "../../images/Lock_alt_light.png";

const Signup = () => {
  return (
    <div className="SignupContainer">
      <div className="SignupContainerLeft">
        <img src={Signupimg} alt="" />
      </div>
      <div className="SignupContainerRight">
        <div className="SignupContainerRightFirst">
          <p
            className="inter bold"
            style={{
              fontSize: "24px",
              fontWeight: "600",
              margin: "0px",
              padding: "0px",
              textAlign: "center",
            }}
          >
            Register
          </p>
          <p
            className="inter"
            style={{
              fontSize: "16px",
              marginTop: "16px",
              padding: "0px",
              textAlign: "center",
            }}
          >
            Create a new account
          </p>
        </div>
        <div className="SignupContainerRightSecond">
          <img className="SignupIcon" src={PersonIcon} alt="" />
          <span className="SignupInfo">Name</span>
          <input type="text" className="SignupInput" />

          <img className="SignupIcon" src={MessageIcon} alt="" />
          <span>Email</span>
          <input type="text" className="SignupInput" />

          <img className="SignupIcon" src={CallIcon} alt="" />
          <span>Phone number</span>
          <input type="text" className="SignupInput" />

          <img className="SignupIcon" src={LockIcon} alt="" />
          <span>Password</span>
          <input type="text" className="SignupInput" />

          <img className="SignupIcon" src={PersonIcon} alt="" />
          <span>Confirm Password</span>
          <input type="text" className="SignupInput" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
