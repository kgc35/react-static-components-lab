import React, { Component } from "react";
import CatComponent from "./CatComponent";
import GraceHopperQuoteComponent from "./GraceHopperQuoteComponent";
import Mouse from "./MouseComponent";

class App extends Component {
  render() {
    // your code in the return statement below!
    return (
      <div className="App">
        <CatComponent />
        <GraceHopperQuoteComponent />
        <Mouse />
      </div>
    );
  }
}

export default App;
