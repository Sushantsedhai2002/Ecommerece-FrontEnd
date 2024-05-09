import React, { useState, useEffect } from "react";
import "./Timer.css";

function Timer() {
  const totalSeconds = 12 * 24 * 60 * 60;
  const [seconds, setSeconds] = useState(totalSeconds);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let intervalId;

    if (isActive && seconds > 0) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isActive, seconds]);

  const days = Math.floor(seconds / (24 * 60 * 60));
  const hours = Math.floor((seconds % (24 * 60 * 60)) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  return (
    <div className=" timeTitle inter">
      Offer Remaining: <span className="timeText">{days}</span> days |{" "}
      <span className="timeText">{hours}</span> hours |{" "}
      <span className="timeText">{minutes}</span> min
    </div>
  );
}

export default Timer;
