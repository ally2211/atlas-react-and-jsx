// src/components/Header.jsx
import React from "react";
import Greeting from "./Greeting";
import SocialLinks from "./SocialLinks";

export default function Header() {
  return (
    <nav className="header">
      <Greeting />
      <SocialLinks />
    </nav>
  );
}
