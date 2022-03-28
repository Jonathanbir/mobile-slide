import React, { useEffect, useState } from "react";
import MobileInBottom from "./components/MobileInBottom";
// eslint-disable-next-line
import "swiper/css/bundle";
import "./App.css";

const App = () => {
  const [rotate, useRotate] = useState(false);
  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > 100 && window.scrollY < 180) {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          useRotate(true);
        } else {
        }
      },
      []
    );
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className="container">
      <div className="news-content"></div>
      <MobileInBottom rotate={rotate} useRotate={useRotate} />
    </div>
  );
};

export default App;
