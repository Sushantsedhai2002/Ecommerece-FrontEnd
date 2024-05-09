import React, { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import "./HeroSecond.css";
import trending1 from "../../../images/t1.png";
import trending2 from "../../../images/t2.png";
import trending3 from "../../../images/t3.png";
import trending4 from "../../../images/t4.png";
import trending5 from "../../../images/t5.png";
import trending6 from "../../../images/t6.png";
import trending7 from "../../../images/t7.png";
import trending8 from "../../../images/t8.png";
import ArrowLeft from "../../../images/Expand_left_light.png";
import ArrowRight from "../../../images/Expand_right_light.png";

const HeroSecond = () => {
  const pictureUrls = [
  

    {
      imageUrl: trending1,
      title: "Apple Airpod Pro",
    },
    {
      imageUrl: trending2,
      title: "Rounded neck T-shirt",
    },
    {
      imageUrl: trending3,
      title: "Leather Laptop Bag",
    },
    {
      imageUrl: trending4,
      title: "Unisex Fleece Jacket",
    },
    {
      imageUrl: trending5,
      title: "SmartWatches",
    },
    {
      imageUrl: trending6,
      title: "Sneakers",
    },
    {
      imageUrl: trending7,
      title: "Cook Ware Set",
    },
    {
      imageUrl: trending8,
      title: "JBL Speaker",
    },
  ];

  const picturesPerPage = 8;
  const totalPictures = pictureUrls.length;

  const [startIndex, setStartIndex] = useState(0);

  const carouselRef = useRef(null);
  // const singlePictureWidth = 170;

  // const scrollOffset = (startIndex % picturesPerPage) * singlePictureWidth;

  const scrollCarousel = () => {
    if (carouselRef.current) {
      const scrollOffset = carouselRef.current.clientWidth / picturesPerPage;
      carouselRef.current.scrollTo({
        left: startIndex * scrollOffset,
        behavior: "smooth",
      });
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -300, // Adjust scroll distance based on item width
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 300, // Adjust scroll distance based on item width
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    const newStartIndex = (startIndex + 1) % pictureUrls.length;
    setStartIndex(newStartIndex);
    scrollCarousel();
  };

  const handlePrevious = () => {
    const newStartIndex =
      startIndex === 0 ? pictureUrls.length - picturesPerPage : startIndex - 1;
    setStartIndex(newStartIndex);
    scrollCarousel();
  };

  const visiblePictures = [];
  for (let i = 0; i < picturesPerPage; i++) {
    const index = (startIndex + i) % totalPictures;
    visiblePictures.push(pictureUrls[index]);
  }

  // const visiblePictures = pictureUrls.slice(
  //   startIndex,
  //   startIndex + picturesPerPage
  // );

  return (
    <div className="container heroSecondContainer">
      <div className="heroSecondContainerNorth inter bold">
        <p style={{ width: "294px" }}>Top Trending Post</p>
        <div
          style={{
            width: "230px",
            display: "flex",
            alignItems: "center",
            gap: "40px",
          }}
        >
          <button className="heroSecondConatinerNorthButton">
            <img
              className="arrowIcon"
              onClick={handlePrevious}
              src={ArrowLeft}
              alt=""
            />
          </button>

          <button className="heroSecondConatinerNorthButton">
            <img
              className="arrowIcon"
              onClick={handleNext}
              src={ArrowRight}
              alt=""
            />
          </button>
        </div>
      </div>

      <div className="heroSecondContainerSouth">
        <div className="heroSecondContainerSouthOne" ref={carouselRef}>
          {visiblePictures.map((picture, index) => (
            <div key={startIndex + index} className="pictureContainer">
              <img
                className="heroSecondContainerSouthImage"
                src={picture.imageUrl}
                alt={picture.title}
              />
              <p className="pictureTitle inter">{picture.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSecond;
