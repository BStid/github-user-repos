import React from "react";
import "./DisplayRepos.css";

export default function DisplayRepos(props) {
  console.log(props.repositories);
  let renderRepos = props.repositories.map((repo, index) => {
    console.log(repo);
    return <div key={index}>{repo.name}</div>;
  });
  return <>Repo {renderRepos}</>;
}
