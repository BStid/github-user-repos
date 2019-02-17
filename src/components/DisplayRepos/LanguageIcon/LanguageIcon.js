import React from "react";
import "./LanguageIcon.css";

export default function LanguageIcon(props) {
  let styles = {
    height: "30px",
    width: "70px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: hashLanguageToColor(props.language),
    color: "white",
    fontSize: "10px",
    fontWeight: "800",
    marginTop: "10px",
    borderRadius: "0.3rem",
    boxShadow: "1px 1px 7px 0px white inset"
  };
  return (
    <div style={styles} className="languageIcon">
      {props.language}
    </div>
  );
}

const hashLanguageToColor = name => {
  let total = 0;
  //for each letter in the string, take the Character Code Number and add it to the total
  for (let i = 0; i < name.length; i++) {
    total += name.charCodeAt(i);
  }
  //take the remainder for the length of the name divided by the total
  const hashedNum = total % name.length;

  switch (hashedNum) {
    case 1:
      return "#EB5E55";
    case 2:
      return "#5DB7DE";
    case 3:
      return "#3A3335";
    case 4:
      return "#D81E5B";
    case 5:
      return "purple";
    case 6:
      return "#EB5E55";
    case 7:
      return "#A6CFD5";
    case 8:
      return "gold";
    case 9:
      return "pink";
    case 10:
      return "black";
    default:
      return "white";
  }
};
