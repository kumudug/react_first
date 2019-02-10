import React from "react";

const person = props => {
  return (
    <div>
      <p onClick={props.click}>
        I'm a {props.name} and I am {Math.floor(Math.random() * 30)} years old.
        I look {props.age} years old. :D
      </p>
      <p>{props.children}</p>
      <input type='text' onChange={props.changed} value={props.name}></input>
    </div>
  );
};

export default person;
