import React, { Component } from "react";
import { Provider } from "react-redux";
import Nav from "./components/Nav/Nav";
import Body from "./components/Body/Body";
import store from "./redux/store";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="outerContainer">
          <Nav />
          <Body />
        </div>
      </Provider>
    );
  }
}

export default App;
