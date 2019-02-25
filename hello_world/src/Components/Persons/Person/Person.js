import React, { Component } from "react";
import styles from "./Person.module.css";
import PropTypes from 'prop-types';


class Person extends Component {
  render() {
    console.log('[Person.js] rendering...');
    return (
      <div className={styles.Person} >
        <p onClick={this.props.click}>
          I'm a {this.props.name} and I am {Math.floor(Math.random() * 30)} years old.
        I look {this.props.age} years old. :D
      </p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
    );
  }
};

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default Person;
