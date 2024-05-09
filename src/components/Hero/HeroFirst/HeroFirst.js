import React from "react";
import Timer from "../../../components/Timer/Timer";
import "./HeroFirst.css";
import Firstimg from "../../../images/image 1.png";
import Secondimg from "../../../images/image 2.png";
import Thirdimg from "../../../images/image 3.png";
import Fourthtimg from "../../../images/image 4.png";
import Fifthimg from "../../../images/image 5.png";

const HeroFirst = () => {
  return (
    <div className="container heroFirstContainer">
      <div className="heroFirstContainerNorth">
        <div className="heroFirstContainerNorthLeft inter ">
          Exclusive Offer
        </div>
        <div className="heroFirstContainerNorthRight inter">
          <Timer />
        </div>
        {/* <div className="heroSlider">
          <button>Next</button>
          <button>Previous</button>
        </div> */}
      </div>
      <div className="heroFirstContainerSouth">
        <div className="heroFirstContainerSouthProductsFirst">
          <div className="heroFirstContainerSouthProductsImage">
            <img src={Firstimg} />
          </div>
          <div className="heroFirstContainerSouthProductsDescription inter">
            <p
              style={{
                marginTop: "0px",
                fontSize: "20px",
                fontWeight: "400",
                marginLeft: "20px",
                marginBottom: "8px",
                padding: "0",
              }}
            >
              Air Force 1 Shoe for Men
            </p>
            <p
              style={{
                marginTop: "0",
                marginLeft: "20px",
                fontSize: "20px",
                fontWeight: "400",
                marginBottom: "8px",
                padding: "0",
                color: "#FA902D",
              }}
            >
              Rs 999
            </p>
            <p
              style={{
                marginTop: "0",
                marginLeft: "20px",
                padding: "0",
                color: "#8F8787",
                fontSize: "12px",
                fontWeight: "400",
              }}
            >
              <del>Rs. 1999</del> -50%
            </p>
          </div>
        </div>

        <div className="heroFirstContainerSouthProductsSecond">
          <div className="heroFirstContainerSouthProductsImage">
            <img src={Secondimg} />
          </div>
          <div className="heroFirstContainerSouthProductsDescription">
            <p className="heroFirstContainerSouthProductsFirstChild">
              1 Litre Water Bottle
            </p>
            <p className="heroFirstContainerSouthProductsSecondChild">Rs 199</p>
            <p className="heroFirstContainerSouthProductsThirdChild">
              <del>Rs 350</del> -39%
            </p>
          </div>
        </div>

        <div className="heroFirstContainerSouthProductsThird">
          <div className="heroFirstContainerSouthProductsImage">
            <img src={Thirdimg} />
          </div>
          <div className="heroFirstContainerSouthProductsDescription">
            <p className="heroFirstContainerSouthProductsFirstChild">
              School Bag for Girls
            </p>
            <p className="heroFirstContainerSouthProductsSecondChild">
              Rs 4999
            </p>
            <p className="heroFirstContainerSouthProductsThirdChild">
              <del>Rs 6800</del> -39%
            </p>
          </div>
        </div>

        <div className="heroFirstContainerSouthProductsFourth">
          <div className="heroFirstContainerSouthProductsImage">
            <img src={Fourthtimg} />
          </div>
          <div className="heroFirstContainerSouthProductsDescription">
            <p className="heroFirstContainerSouthProductsFirstChild">
              Winter Poly Fiber Jacket
            </p>
            <p className="heroFirstContainerSouthProductsSecondChild">
              Rs 4000
            </p>
            <p className="heroFirstContainerSouthProductsThirdChild">
              <del>Rs 8000</del> -50%
            </p>
          </div>
        </div>

        <div
          className="heroFirstContainerSouthProductsFifth"
          style={{ marginBottom: "16px" }}
        >
          <div className="heroFirstContainerSouthProductsImage">
            <img src={Fifthimg} />
          </div>
          <div className="heroFirstContainerSouthProductsDescription">
            <p className="heroFirstContainerSouthProductsFirstChild">
              CG 16 inch stand bullet fan
            </p>
            <p className="heroFirstContainerSouthProductsSecondChild">
              Rs 2000
            </p>
            <p className="heroFirstContainerSouthProductsThirdChild">
              <del>Rs 2500</del> -25%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroFirst;
