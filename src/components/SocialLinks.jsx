// src/components/SocialLinks.jsx
import React from "react";
import linkedinIcon from "../assets/linkedin.svg";
import githubIcon from "../assets/github.svg";

export default function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href="https://www.linkedin.com/in/your-linkedin-username"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedinIcon} alt="LinkedIn" />
      </a>
      <a
        href="https://github.com/your-github-username/your-repo-name"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={githubIcon} alt="GitHub" />
      </a>
    </div>
  );
}
