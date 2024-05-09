import React from "react";
import "./HowToBuy.css";
import Firstimg from "../../images/howtobuy_img_1.png";
import Secondimg from "../../images/howtobuy_img_2.png";
import Thirdimg from "../../images/howtobuy_img_3.png";
import Fourthimg from "../../images/howtobuy_img_4.png";

const HowToBuy = () => {
  return (
    <div className=" container howtobuyContainer">
      <div className="howtobuyContainerFirst inter">
        <p
          style={{
            fontSize: "24px",
            fontWeight: "600",
            paddingTop: "20px",
            paddingLeft: "20px",
            paddingBottom: "20px",
            margin: "0",
          }}
        >
          How to Place Order in E-Commerce?
        </p>
        <div className="howtobuyContainerFirstDescription">
          <p>
            We are here to help you, please be notified that you must have
            registered your E-Commerce account in order to purchase from
            E-Commerce.
          </p>
          <ol>
            <li className="howtobuyList">
              Search for the Product by browsing through the product categories
              on E-Commerce.
            </li>
            <li className="howtobuyList">
              To add an item to your cart, click Add to Cart
            </li>
            <li className="howtobuyList">
              Once all the items have been added to the cart, Your bill details
              will be displayed on the right side of your screen.
            </li>
            <li className="howtobuyList">
              Select your preferred Payment Method.
            </li>
          </ol>
          <p>
            Once you've verified your details, click Place Order to complete
            your order.
          </p>
        </div>
      </div>
      <div className="howtobuyContainerSecond inter">
        <div>
          <img
            src={Firstimg}
            alt=""
            style={{ width: "360px", height: "735px" }}
          />
          <p
            style={{
              padding: "12px 73px 0 73px",
              textAlign: "center",
              fontSize: "16px",
              fontWeight: "400",
            }}
          >
            Step 1: Click on the product you want to buy
          </p>
        </div>
        <div>
          <img
            src={Secondimg}
            alt=""
            style={{ width: "360px", height: "735px" }}
          />
          <p
            style={{
              padding: "12px 73px 0 73px",
              textAlign: "center",
              fontSize: "16px",
              fontWeight: "400",
            }}
          >
            Step 2: Click Add to cart and add an item to your cart
          </p>
        </div>
        <div>
          <img
            src={Thirdimg}
            alt=""
            style={{ width: "360px", height: "735px" }}
          />
          <p
            style={{
              padding: "12px 73px 0 73px",
              textAlign: "center",
              fontSize: "16px",
              fontWeight: "400",
            }}
          >
            Step 3: Click on the payment method
          </p>
        </div>
      </div>
      <div className="howtobuyContainerThird">
        <img src={Fourthimg} alt="" />{" "}
        <p
          style={{
            padding: "12px 73px 0 73px",
            textAlign: "center",
            fontSize: "16px",
            fontWeight: "400",
          }}
        >
          Step 4: Select the desirable payment method
        </p>
      </div>
    </div>
  );
};

export default HowToBuy;
