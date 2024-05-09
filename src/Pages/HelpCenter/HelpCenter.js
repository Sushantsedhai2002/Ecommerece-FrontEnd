import React from "react";
import "./HelpCenter.css";

const HelpCenter = () => {
  return (
    <div className=" container helpcenterContainer">
      <div className="helpcenterContainerFirst inter">
        <input className="helpInput" type="text" placeholder="Ask Questions" />
        <button className="helpButton">Search</button>
      </div>
      <div className="helpcenterContainerSecond inter">
        <div className="helpcenterContainerSecondDescription">
          <p className="DescriptionTitle">
            Can I reactivate my inactive E-Commerce account?
          </p>
          <p className="DescriptionInfo">
            Yes. To reactivate your E-Commerce account, simply log in with your
            registered email ID or mobile number password combination used
            before deactivation. Your account data will be fully restored,
            default subscription settings applied.
          </p>
        </div>

        <div
          className="helpcenterContainerSecondDescription "
          style={{ height: "104px" }}
        >
          <p className="DescriptionTitle">
            Do I need to verify my mobile number or email address every time I
            log in?
          </p>
          <p className="DescriptionInfo">
            As the verification step is a one time process, you won't have to do
            it again once your account is verified.
          </p>
        </div>

        <div className="helpcenterContainerSecondDescription">
          <p className="DescriptionTitle">
            What is an OTP or verification code?
          </p>
          <p className="DescriptionInfo">
            An OTP (One Time Password) or verification code is a password/code
            used to verify your mobile number or email ID when you log into your
            E-Commerce account for the first time. OTP verification will be also
            be done in other cases like creating an account, password recovery,
            and updating email/mobile details.
          </p>
        </div>

        <div
          className="helpcenterContainerSecondDescription"
          style={{ height: "128px" }}
        >
          <p className="DescriptionTitle">
            Why do I need to verify my mobile number or email address to log
            into my Flipkart account?
          </p>
          <p className="DescriptionInfo">
            To make sure that your account details are always secure,
            verification by OTP (One Time Password) is important. This is a
            one-time process and you can log into your E-Commerce account
            without any hassles once this is done.
          </p>
        </div>

        <div
          className="helpcenterContainerSecondDescription"
          style={{ height: "104px" }}
        >
          <p className="DescriptionTitle">
            Can I use an international number to sign up?{" "}
          </p>
          <p className="DescriptionInfo">
            No, you can’t use International number to sign up.
          </p>
        </div>

        <div
          className="helpcenterContainerSecondDescription"
          style={{ height: "128px" }}
        >
          <p className="DescriptionTitle">
            What should I do if I don't get the OTP or verification code while
            logging in to my Flipkart account?{" "}
          </p>
          <p className="DescriptionInfo">
            Network issues sometimes delay OTP-based SMS. You can regenerate the
            code by clicking 'Resend Code'. In case that doesn't work, you can
            try switching your phone off and back on.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
