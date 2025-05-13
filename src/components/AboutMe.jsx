// src/components/AboutMe.jsx
import React from "react";
import profilePic from "../assets/profile.jpg"; // Place your professional photo here

export default function AboutMe() {
  return (
    <div className="about-me">
      <img
        src={profilePic}
        alt="Professional portrait"
        className="profile-pic"
      />
      <p>
        Hi, I'm a Full-Stack specialization student currently
        in my fifth trimester at Atlas School. I enjoy working with JavaScript,
        React, Node.js, and PostgreSQL. After school, I hope to contribute to
        impactful tech projects—especially those that serve non-profits,
        missionaries and exploring spiritual tech ideas.
      </p>
    </div>
  );
}
