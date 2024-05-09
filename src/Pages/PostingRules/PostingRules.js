import React from "react";
import "./PostingRules.css";

const PostingRules = () => {
  return (
    <div className=" container postingrulesContainer inter">
      <p
        style={{
          fontSize: "24px",
          fontWeight: "600",
          margin: "0",
          padding: "0px",
          paddingLeft:"20px",
          paddingTop:"20px"
        }}
      >
        Posting Rules For Sellers Only
      </p>
      <p
        style={{
          fontSize: "16px",
          fontWeight: "400",
          marginTop: "8px",
          marginBottom: "39px",
        }}
      >
        E-Commerce does not allow posting of ads that are considered illegal as
        per Nepalese law and/or are not permitted as per below posting rules.
        Any user found violating these rules will be subjected to action/s
        mentioned below.
      </p>
      <ol>
        <li style={{ fontSize: "20px", fontWeight: "500" }}>
          Multiple or Repeated product posting
        </li>
        <p
          style={{
            fontSize: "16px",
            fontWeight: "400",
            marginTop: "8px",
            marginBottom: "12px",
          }}
        >
          Sellers are not allowed to post more than one similar product. The
          Site reserves the right to change, modify, add, or remove portions of
          these Terms & Conditions at any time without any prior notification.
          Changes will be effective when posted on the Site with no other notice
          provided. Please check these Terms & Conditions regularly for updates.
          Your continued use of the Site following the posting of changes to
          Terms and Conditions of use constitutes your acceptance of those
          changes.
        </p>
        <li style={{ fontSize: "20px", fontWeight: "500" }}>
          Posting illegal products
        </li>
        <p
          style={{
            fontSize: "16px",
            fontWeight: "400",
            marginTop: "8px",
            marginBottom: "0px",
          }}
        >
          E-Commerce does not allow ads which are illegal as per Nepal law or
          are considered morally obscene in context to Nepalese society. Some of
          the ads (but not limited to) which fall under are:
        </p>
        <ul>
          <li>
            Products of any form of adult entertainment ads like sexual items,
            etc.
          </li>
          <li>
            Products which hurt the sentiments of any person, group or religion.
          </li>
          <li>
            Products such as weapons, drugs, human organs, endangered animals,
            prohibited antiques, etc.
          </li>
          <li>
            Products which infringes other third parties intellectual property,
            moral right and privacy.
          </li>
        </ul>
      </ol>
    </div>
  );
};

export default PostingRules;
