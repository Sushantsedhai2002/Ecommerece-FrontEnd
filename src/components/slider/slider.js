import React from "react";
import Sliderimg from "../../images/slider-img.jpg";
import BannerFirst from "../../images/Banner1.png";
import BannerSecond from "../../images/Banner2.png";
import BannerThird from "../../images/Banner3.png";
import ArrowLeft from "../../images/Expand_left_light.png";
import ArrowRight from "../../images/Expand_right_light.png";

import { useState } from "react";
import "./Slider.css";

const images = [BannerFirst, BannerSecond, BannerThird];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  const goToPrevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="sliderContainer">
      <button className="sliderButtonLeft" onClick={goToPrevSlide}>
         <img src={ArrowLeft} alt="" />
      </button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      <button className="sliderButtonRight" onClick={goToNextSlide}>
        <img src={ArrowRight} alt="" />
      </button>
    </div>
  );
};

export default Slider;
