import React, { Component } from "react";
import { connect } from "react-redux";
import SearchInput from "../SearchInput/SearchInput";
import "./Body.css";

class Body extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    console.log(this.props.inputValue);
  }
  render() {
    return (
      <div className="bodyContainer">
        <SearchInput />
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Body);
