import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Adams", age: 29 },
      { name: "Baker", age: 27 }
    ]
  });

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: "Max-Changed", age: 28 },
        { name: "Adams", age: 29 },
        { name: "Baker", age: 27 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>First react app.</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>
        Hobbies: Sailing
      </Person>
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      />
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default app;
