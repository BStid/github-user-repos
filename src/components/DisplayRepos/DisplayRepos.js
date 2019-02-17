import React from "react";
import "./DisplayRepos.css";

export default function DisplayRepos(props) {
  let renderRepos = props.repositories.map((repo, index) => {
    return index < 12 ? (
      <div className="repoContainer" key={index}>
        <div className="repoName">{repo.name}</div>
        <div className="repoBody">
          {repo.description
            ? repo.description
            : "Oops! This repository does not have a description!"}
        </div>
      </div>
    ) : null;
  });
  return <div className="displayContainer">{renderRepos}</div>;
}
