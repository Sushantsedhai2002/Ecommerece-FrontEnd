import "./App.css";
import Header from "./components/header/header";
import Slider from "./components/slider/slider";
import HeroFirst from "./components/Hero/HeroFirst/HeroFirst";
import HeroSecond from "./components/Hero/HeroSecond/HeroSecond";
import Footer from "./components/footer/Footer";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Home";
import Login from "../src/Pages/Login/Login";
import SellerSignUp from "./Pages/SellerSignUp";
import Cart from "./Pages/Cart";
import SignUp from "./Pages/SignUp/SignUp";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ContactUs from "./Pages/ContactUS/ContactUS";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import HowToBuy from "./Pages/HowToBuy/HowToBuy";
import HelpCenter from "./Pages/HelpCenter/HelpCenter";
import TermsandConditions from "./Pages/TermsandConditions/TermsandConditions";
import PostingRules from "./Pages/PostingRules/PostingRules";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      {/* <Header />
      <Slider />
      <HeroFirst />
      <HeroSecond />
      <Footer /> */}
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/becomeaseller" element={<SellerSignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/howtobuy" element={<HowToBuy />} />
          <Route path="/helpcenter" element={<HelpCenter />} />
          <Route path="/termsandconditions" element={<TermsandConditions />} />
          <Route path="/postingrules" element={<PostingRules />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
