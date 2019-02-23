import React, { Component } from "react";
import styles from "./App.module.css";
import Person from "../Components/Persons/Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "01", name: "Max", age: 28 },
      { id: "02", name: "Adams", age: 29 },
      { id: "03", name: "Baker", age: 27 }
    ]
  };

  deletePersonHandler = personIndex => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglPersonsHandler = event => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                changed={event => this.nameChangeHandler(event, person.id)}>
                Hobbies: sailing
                </Person>
            );
          })}
        </div>
      );

      btnClass = styles.Red;
    }

    //let classes = ['red', 'bold'].join(' '); //what we get 'red bold'
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push(styles.red);
    }
    if (this.state.persons.length <= 1) {
      classes.push(styles.bold);
    }

    return (
      <div className={styles.App}>
        <h1>First react app.</h1>
        <p className={classes.join(" ")}>Dymanic Styling</p>
        <button className={btnClass} onClick={this.togglPersonsHandler}>
          Toggle Persons
          </button>
        {persons}
      </div>
    );
    // let h1Element = React.createElement("h1", null, "First react app.");
    // return React.createElement("div", {className: 'App'}, h1Element);
  }
}

export default App;
