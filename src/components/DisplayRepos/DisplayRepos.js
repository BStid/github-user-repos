import React from "react";
import DisplayError from "./Errors/DisplayError";
import NoReposError from "./Errors/NoReposError";
import LanguageIcon from "./LanguageIcon/LanguageIcon";
import "./DisplayRepos.css";

export default function DisplayRepos(props) {
  console.log(props.repositories);
  if (!props.repositories) {
    var renderRepos = <DisplayError />;
  } else if (props.repositories.length < 1) {
    var renderRepos = <NoReposError />;
  } else {
    var renderRepos = props.repositories.map((repo, index) => {
      return index < 12 ? (
        <div
          className="repoContainer"
          key={index}
          onClick={() => window.open(repo.html_url, "_blank")}
        >
          <div className="repoName">{repo.name}</div>
          <div className="repoBody">
            {repo.description
              ? repo.description
              : "Oops! This repository does not have a description!"}
          </div>
          <div className="repoLanguage">
            Language:
            <br />
            {repo.language ? (
              <LanguageIcon language={repo.language} />
            ) : (
              <i>"No Language Detected!"</i>
            )}
          </div>
        </div>
      ) : null;
    });
  }

  return <div className="displayContainer">{renderRepos}</div>;
}
