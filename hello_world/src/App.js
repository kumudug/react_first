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

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: `Max-Changed ${newName}`, age: 28 },
        { name: "Adams", age: 29 },
        { name: "Baker", age: 27 }
      ],
      showPersons: false
    });
  };

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: `Max-Changed`, age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Baker", age: 27 }
      ]
    });
  };

  togglPersonsHandler = event => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    return (
      <div className="App">
        <h1>First react app.</h1>
        <button
          style={style}
          onClick={this.switchNameHandler.bind(this, "Neme1")}
        >
          Switch Name
        </button>
        <button onClick={this.togglPersonsHandler}>Toggle Persons</button>
        {this.state.showPersons ? (
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              click={this.switchNameHandler.bind(this, "Neme2")}
            >
              Hobbies: Sailing
            </Person>
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={() => this.switchNameHandler("Name3")}
              changed={this.nameChangeHandler}
            />
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
            />
          </div>
        ) : null}
      </div>
    );
    // let h1Element = React.createElement("h1", null, "First react app.");
    // return React.createElement("div", {className: 'App'}, h1Element);
  }
}

export default App;
