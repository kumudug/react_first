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

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={this.switchNameHandler.bind(this, "newname")}
                changed={this.nameChangeHandler}
              >
                Hobbies: sailing
              </Person>
            );
          })}
        </div>
      );
    }

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
        {persons}
      </div>
    );
    // let h1Element = React.createElement("h1", null, "First react app.");
    // return React.createElement("div", {className: 'App'}, h1Element);
  }
}

export default App;
