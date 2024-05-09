import React from "react";
import Header from "../components/header/header";
import Slider from "../components/slider/slider";
import HeroFirst from "../components/Hero/HeroFirst/HeroFirst";
import HeroSecond from "../components/Hero/HeroSecond/HeroSecond";
import Footer from "../components/footer/Footer";
import SearchBar from "../components/SearchBar/SearchBar";
// import "../index.css";
const Home = () => {
  return (
    <div>
      <Slider />
      <HeroFirst />
      <HeroSecond />
      {/* <SearchBar /> */}
    </div>
  );
};

export default Home;
