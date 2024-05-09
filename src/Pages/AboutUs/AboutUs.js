import React from "react";
import "./AboutUs.css";
import Firstimg from "../../images/about_us_first_image.png";
import Secondimg from "../../images/about_us_second_img.png";
import Thirdimg from "../../images/about_us_third.png";
import Fourthimg from "../../images/our_efforts_img1.png";
import Fifthimg from "../../images/efforts_2.png";
import Sixthimg from "../../images/effort_3.png";
import Seventhimg from "../../images/effort_4.png";
import Eightimg from "../../images/about_us_eight_img.png";

const AboutUs = () => {
  return (
    <div className="aboutUsContainer ">
      <div className="aboutUsFirst">
        <img
          src={Firstimg}
          alt=""
          style={{ width: "1120px", height: "681px" }}
        />
      </div>
      <div className="aboutUsSecond">
        <div className="aboutUsSecondLeft">
          <img src={Secondimg} alt="" />
        </div>
        <div className="aboutUsSecondRight  inter">
          <p
            style={{
              fontSize: "24px",
              fontWeight: "600",
              marginBottom: "16px",
              padding: "0",
              lineHeight: "29.05px",

              color: "#000000",
            }}
          >
            The E-commerce Group
          </p>
          <p
            style={{
              fontWeight: "500",
              fontSize: "20px",
              lineHeight: "24.2px",
              color: "#46474B",
            }}
          >
            The E-Commerce Group is one of Nepal’s leading digital commerce
            entities started in 2007 which has enabled millions of sellers,
            merchants, and small businesses to participate in Nepal's digital
            commerce revolution.
          </p>
          <p
            style={{
              fontWeight: "500",
              fontSize: "20px",
              lineHeight: "24.2px",
              color: "#46474B",
            }}
          >
            With a registered customer base of more than 50 million,
            E-Commerce's marketplace offers over 100 million products and 4 lakh
            sellers on the platform. E-Commerce has created lakhs of jobs while
            powering generations of entrepreneurs.
          </p>
          <p
            style={{
              fontWeight: "500",
              fontSize: "20px",
              lineHeight: "24.2px",
              color: "#46474B",
            }}
          >
            E-Commerce is known for pioneering services such as Cash on
            Delivery, and easy returns, which are customer-centric innovations
            that have made online shopping more accessible and affordable for
            millions of Nepalese. In 2024, the digital payment offerings for all
            customers and further Nepal’s digital economy vision.
          </p>
        </div>
      </div>
      <div className="aboutUsThird">
        <div className="aboutUsThirdLeft">
          <p
            style={{
              fontSize: "24px",
              fontWeight: "600",
              marginBottom: "20px",
              padding: "0",
              lineHeight: "29.05px",
              color: "#000000",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Our Efforts
          </p>
          <div className="aboutUsThirdLeftChild">
            <div className="aboutUsThirdLeftChildLeft">
              <img className="effortsIcon" src={Fourthimg} alt="" />
            </div>
            <div className="aboutUsThirdLeftChildRight">
              <p className="effortsTitle">Embrace Change</p>
              <p className="effortsDescription">
                We embrace and anticipate change. Change is growth and growth is
                what drives us everyday.
              </p>
            </div>
          </div>

          <div className="aboutUsThirdLeftChild">
            <div className="aboutUsThirdLeftChildLeft">
              <img className="effortsIcon" src={Fifthimg} alt="" />
            </div>
            <div className="aboutUsThirdLeftChildRight">
              <p className="effortsTitle">Team Work</p>
              <p className="effortsDescription">
                We think as a team, work as a team and grow as a team. It allows
                people to achieve extra ordinary things.
              </p>
            </div>
          </div>

          <div className="aboutUsThirdLeftChild">
            <div className="aboutUsThirdLeftChildLeft">
              <img className="effortsIcon" src={Sixthimg} alt="" />
            </div>
            <div className="aboutUsThirdLeftChildRight">
              <p className="effortsTitle">Customer Commitment</p>
              <p className="effortsDescription">
                We believe in giving our best to our customer, sellers and
                society.
              </p>
            </div>
          </div>

          <div className="aboutUsThirdLeftChild">
            <div className="aboutUsThirdLeftChildLeft">
              <img className="effortsIcon" src={Seventhimg} alt="" />
            </div>
            <div className="aboutUsThirdLeftChildRight">
              <p className="effortsTitle">Integrity</p>
              <p className="effortsDescription">
                We treat our partners with mutual respect. We provide highest
                standard of honesty and deliver our commitment.
              </p>
            </div>
          </div>
        </div>
        <div className="aboutUsThirdRight">
          <img src={Thirdimg} alt="" />
        </div>
      </div>

      <div className="aboutUsFourth">
        <div className="aboutUsFourthLeft">
          <img src={Eightimg} alt="" style={{ marginTop: "20px" }} />
        </div>
        <div className="aboutUsFourthRight">
          <div className="aboutUsFourthRightDescription">
            <p
              style={{
                fontSize: "24px",
                fontWeight: "600",
                marginBottom: "20px",
                padding: "0",
                lineHeight: "29.05px",
                color: "#000000",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Our Efforts
            </p>
            <div className="aboutUsThirdLeftChild">
              <div className="aboutUsThirdLeftChildLeft">
                <img className="effortsIcon" src={Fourthimg} alt="" />
              </div>
              <div className="aboutUsThirdLeftChildRight">
                <p className="effortsTitle">Embrace Change</p>
                <p className="effortsDescription">
                  We embrace and anticipate change. Change is growth and growth
                  is what drives us everyday.
                </p>
              </div>
            </div>

            <div className="aboutUsThirdLeftChild">
              <div className="aboutUsThirdLeftChildLeft">
                <img className="effortsIcon" src={Fifthimg} alt="" />
              </div>
              <div className="aboutUsThirdLeftChildRight">
                <p className="effortsTitle">Team Work</p>
                <p className="effortsDescription">
                  We think as a team, work as a team and grow as a team. It
                  allows people to achieve extra ordinary things.
                </p>
              </div>
            </div>

            <div className="aboutUsThirdLeftChild">
              <div className="aboutUsThirdLeftChildLeft">
                <img className="effortsIcon" src={Sixthimg} alt="" />
              </div>
              <div className="aboutUsThirdLeftChildRight">
                <p className="effortsTitle">Customer Commitment</p>
                <p className="effortsDescription">
                  We believe in giving our best to our customer, sellers and
                  society.
                </p>
              </div>
            </div>

            <div className="aboutUsThirdLeftChild">
              <div className="aboutUsThirdLeftChildLeft">
                <img className="effortsIcon" src={Seventhimg} alt="" />
              </div>
              <div className="aboutUsThirdLeftChildRight">
                <p className="effortsTitle">Integrity</p>
                <p className="effortsDescription">
                  We treat our partners with mutual respect. We provide highest
                  standard of honesty and deliver our commitment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
