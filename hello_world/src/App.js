import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //     <h1>First react app.</h1>
    //   </div>
    // );
    let h1Element = React.createElement("h1", null, "First react app.");
    return React.createElement("div", {className: 'App'}, h1Element);
  }
}

export default App;
