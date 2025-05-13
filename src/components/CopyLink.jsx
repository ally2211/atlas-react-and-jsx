// src/components/CopyLink.jsx
import React from "react";
import copyIcon from "../assets/copy.svg";

export default function CopyLink({ link }) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(link);
      alert("Link copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy link: ", err);
    }
  };

  return (
    <img
      className="copy"
      src={copyIcon}
      alt="Copy link"
      onClick={handleCopy}
      style={{ cursor: "pointer" }}
    />
  );
}
