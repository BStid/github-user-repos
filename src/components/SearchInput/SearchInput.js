import React, { Component } from "react";
import { connect } from "react-redux";
import { updateInput } from "../../redux/reducer";
import "./SearchInput.css";

class SearchInput extends Component {
  checkRepo = () => {
    console.log(this.props.repos);
  };
  render() {
    const { updateInput, getRepos, inputValue } = this.props;
    return (
      <div className="inputContainer">
        <input
          className="userInput"
          type="text"
          placeholder="Input Username Here"
          onChange={e => updateInput(e.target.value)}
        />
        <button className="searchButton" onClick={() => getRepos(inputValue)}>
          Search
        </button>

        <button onClick={() => this.checkRepo()}>Test Test Test</button>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { updateInput }
)(SearchInput);
