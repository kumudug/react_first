import React, { Component } from "react";
import styles from "./Person.module.css";
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    //this.inputElement.focus();
    this.inputElementRef.current.focus();
  }

  render() {
    console.log('[Person.js] rendering...');
    return (
      <div className={styles.Person} >
        <AuthContext.Consumer>
          {(context) =>
            context.authenticated ? <p>Authenticated!</p> : <p>Please log in!!!</p>
          }
        </AuthContext.Consumer>
        <p onClick={this.props.click}>
          I'm a {this.props.name} and I am {Math.floor(Math.random() * 30)} years old.
        I look {this.props.age} years old. :D
        </p>
        <p>{this.props.children}</p>
        <input
          //ref={(inputEl) => {this.inputElement = inputEl}}
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name} />
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
