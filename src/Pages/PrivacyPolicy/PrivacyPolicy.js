import React from "react";
import "./PrivacyPolicy.css";
const PrivacyPolicy = () => {
  return (
    <div className="container privacyContainer">
      <div className="privacyDescription">
        <p
          className="inter"
          style={{
            fontSize: "28px",
            fontWeight: "600",
            padding: "0",
            margin: "0",
            marginBottom: "20px",
          }}
        >
          Privacy Policy
        </p>
        <p className="inter" style={{ fontSize: "16px", fontWeight: "400" }}>
          Welcome to the ecommerce.com.np website (the "Site") operated by
          E-Commerce Nepal Ltd., We respect your privacy and want to protect
          your personal information. To learn more, please read this Privacy
          Policy.
        </p>
        <ol>
          <li className="privacyList">
            This Privacy Policy explains how we collect, use and (under certain
            conditions) disclose your personal information. This Privacy Policy
            also explains the steps we have taken to secure your personal
            information. Finally, this Privacy Policy explains your options
            regarding the collection, use and disclosure of your personal
            information. By visiting the Site directly or through another site,
            you accept the practices described in this Policy.
          </li>
          <li className="privacyList">
            Data protection is a matter of trust and your privacy is important
            to us. We shall therefore only use your name and other information
            which relates to you in the manner set out in this Privacy Policy.
            We will only collect information where it is necessary for us to do
            so and we will only collect information if it is relevant to our
            dealings with you.
          </li>
          <li className="privacyList">
            We will only keep your information for as long as we are either
            required to by law or as is relevant for the purposes for which it
            was collected.
          </li>
          <li className="privacyList">
            We will cease to retain your personal data, or remove the means by
            which the data can be associated with you, as soon as it is
            reasonable to assume that such retention no longer serves the
            purposes for which the personal data was collected, and is no longer
            necessary for any legal or business purpose.
          </li>
          <li className="privacyList">
            You can visit the Site and browse without having to provide personal
            details. During your visit to the Site you remain anonymous and at
            no time can we identify you unless you have an account on the Site
            and log on with your user name and password.
          </li>
          <li className="privacyList">
            We collect, store and process your data for processing your purchase
            on the Site and any possible later claims, and to provide you with
            our services. We may collect personal information including, but not
            limited to, your title, name, gender, date of birth, email address,
            postal address, delivery address (if different), telephone number,
            mobile number, fax number, payment details, payment card details or
            bank account details.
          </li>
          <li className="privacyList">
            E-commerce collects data such as such as your name, gender, profile
            picture, and date of birth, billing address, delivery
            address/location, email address and phone numbers.
          </li>
          <li className="privacyList">
            E-Commerce collects billing account information: bank account
            details, credit card account and payment information (such account
            data may also be collected directly by our affiliates and/or third
            party payment service providers), transaction records/data, such as
            details about orders and payments, user clicks, and other details of
            products and Services related to you.
          </li>
        </ol>
        <p className="inter" style={{ fontSize: "16px", fontWeight: "400" }}>
          If you allow a minor to access the Site and buy products from the Site
          by using your account, you hereby consent to the processing of the
          minor’s personal data and accept and agree to be bound by this Privacy
          Policy and take responsibility for his or her actions.
        </p>

        <p className="inter" style={{ fontSize: "16px", fontWeight: "400" }}>
          We will not be responsible for any unauthorized use of your account on
          the Site by yourself, users who act on your behalf or any unauthorized
          users. It is your responsibility to make your own informed decisions
          about the use of the Site and take necessary steps to prevent any
          misuse of the Site.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
