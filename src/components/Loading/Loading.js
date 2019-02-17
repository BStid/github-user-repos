import React from "react";
import GitHubLogo from "./images/GitHub-Logo.png";
import "./Loading.css";

export default function Loading() {
  return (
    <div className="loadingContainer">
      <img src={GitHubLogo} alt="Loading Icon" className="loadingIcon" />
      Loading...
    </div>
  );
}
