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

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: `Max-Changed ${newName}`, age: 28 },
        { name: "Adams", age: 29 },
        { name: "Baker", age: 27 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>First react app.</h1>
        <button onClick={this.switchNameHandler.bind(this, 'Neme1')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Neme2')}
        >
          Hobbies: Sailing
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={() => this.switchNameHandler('Name3')}
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
