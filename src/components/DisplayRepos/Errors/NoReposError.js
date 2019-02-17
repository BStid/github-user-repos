import React from "react";
import OctoCat from "../images/Octocat.png";
import "../DisplayRepos.css";

export default function NoReposError() {
  return (
    <div className="errorContainer">
      <img src={OctoCat} alt="Error" className="errorIcon" />
      <br />
      Looks like there's nothing here...
    </div>
  );
}
