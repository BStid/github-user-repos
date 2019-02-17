import React from "react";
import { connect } from "react-redux";
import "./Nav.css";

function Nav(props) {
  return (
    <div className="navContainer">
      <h3>Github Browser</h3>
      <h3>Username: {props.inputValue}</h3>
    </div>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Nav);
