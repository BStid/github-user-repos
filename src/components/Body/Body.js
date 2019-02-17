import React, { Component } from "react";
import { connect } from "react-redux";
import getUserRepos from "../../api/getUserRepos";
import SearchInput from "../SearchInput/SearchInput";
import DisplayRepos from "../DisplayRepos/DisplayRepos";
import Loading from "../Loading/Loading";
import "./Body.css";

class Body extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      repositories: []
    };
  }
  componentDidMount() {
    console.log(this.state.repositories);
    getUserRepos(
      `https://api.github.com/search/repositories?q=user:${
        this.props.inputValue
      }+stars:<=500&sort=stars`
    ).then(data => {
      this.setState({ repositories: data.items, isLoading: false });
    });
  }
  render() {
    const { isLoading, repositories } = this.state;
    return (
      <div className="bodyContainer">
        <SearchInput />
        {isLoading ? <Loading /> : <DisplayRepos repositories={repositories} />}
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Body);
