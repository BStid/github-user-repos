import React from "react";
import OctoCat from "../images/Octocat.png";
import "../DisplayRepos.css";

export default function DisplayError() {
  return (
    <div className="errorContainer">
      <img src={OctoCat} alt="Error" className="errorIcon" />
      <br />
      Oops! We couldn't find a user with that name. Please try a different one.
    </div>
  );
}
