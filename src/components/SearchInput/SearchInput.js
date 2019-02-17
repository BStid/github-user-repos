import React, { Component } from "react";
import { connect } from "react-redux";
import { updateInput } from "../../redux/reducer";
import "./SearchInput.css";

class SearchInput extends Component {
  pressEnter = event => {
    if (event.keyCode === 13) {
      this.props.renderRepos(this.props.inputValue);
    }
  };
  render() {
    const { updateInput, inputValue } = this.props;
    return (
      <div className="inputContainer">
        <input
          className="userInput"
          type="text"
          placeholder="Input Username Here"
          onChange={e => updateInput(e.target.value)}
          onKeyDown={e => this.pressEnter(e)}
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
