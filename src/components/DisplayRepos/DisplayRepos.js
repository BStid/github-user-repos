import React from "react";
import "./DisplayRepos.css";

export default function DisplayRepos(props) {
  let renderRepos = props.repositories.map((repo, index) => {
    console.log(repo);
    return (
      <div className="repoContainer" key={index}>
        {repo.name}
      </div>
    );
  });
  return <div className="displayContainer">Repo {renderRepos}</div>;
}
