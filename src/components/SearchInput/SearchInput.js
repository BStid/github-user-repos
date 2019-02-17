import React, { Component } from "react";
import { connect } from "react-redux";
import { updateInput } from "../../redux/reducer";
import "./SearchInput.css";

class SearchInput extends Component {
  render() {
    return (
      <div className="inputContainer">
        <input
          className="userInput"
          type="text"
          placeholder="Input Username Here"
          onChange={e => this.props.updateInput(e.target.value)}
        />
        <button className="searchButton">Search</button>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { updateInput }
)(SearchInput);
