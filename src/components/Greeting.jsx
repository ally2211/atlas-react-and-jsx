// src/components/Greeting.jsx
import React from "react";
import dayImage from "../assets/day.svg";
import eveningImage from "../assets/evening.svg";
import nightImage from "../assets/night.svg";

export default function Greeting() {
  const hour = new Date().getHours();
  let message = "";
  let imageSrc = "";

  if (hour >= 6 && hour < 12) {
    message = "Good Morning!";
    imageSrc = dayImage;
  } else if (hour >= 12 && hour < 17) {
    message = "Good Afternoon!";
    imageSrc = dayImage;
  } else if (hour >= 17 && hour < 21) {
    message = "Good Evening!";
    imageSrc = eveningImage;
  } else {
    message = "Good Night!";
    imageSrc = nightImage;
  }

  return (
    <h1 className="greeting">
      <img src={imageSrc} alt={message} style={{ width: "24px", marginRight: "8px" }} />
      {message}
    </h1>
  );
}
