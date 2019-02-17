import React, { Component } from "react";
import { connect } from "react-redux";
import { updateInput } from "../../redux/reducer";
import "./SearchInput.css";

class SearchInput extends Component {
  render() {
    const { updateInput, inputValue } = this.props;
    return (
      <div className="inputContainer">
        <input
          className="userInput"
          type="text"
          placeholder="Input Username Here"
          onChange={e => updateInput(e.target.value)}
        />
        <button
          className="searchButton"
          onClick={() => this.props.renderRepos(inputValue)}
        >
          Search
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { updateInput }
)(SearchInput);
