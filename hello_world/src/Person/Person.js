import React from "react";
import styles from "./Person.module.css";

const person = props => {
  const rnd = Math.random();

  if (rnd > 0.9) {
    throw new Error('Something went wrong!!!');
  }

  return (
    <div className={styles.Person}>
      <p onClick={props.click}>
        I'm a {props.name} and I am {Math.floor(Math.random() * 30)} years old.
        I look {props.age} years old. :D
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
