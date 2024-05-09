// import React from "react";
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const ScrollToTop = () => {
//   const location = useLocation();

//   useEffect(() => {
//     if (location.pathname === "/aboutus") {
//       window.scrollTo(0, 0);
//     }
//   }, [location.pathname]);

//   return <div></div>;
// };

// export default ScrollToTop;

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

export default ScrollToTop;
