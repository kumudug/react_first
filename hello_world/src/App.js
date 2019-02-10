import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Adams", age: 29 },
      { name: "Baker", age: 27 }
    ]
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: "Max-Changed", age: 28 },
        { name: "Adams", age: 29 },
        { name: "Baker", age: 27 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>First react app.</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >
          Hobbies: Sailing
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    // let h1Element = React.createElement("h1", null, "First react app.");
    // return React.createElement("div", {className: 'App'}, h1Element);
  }
}

export default App;
