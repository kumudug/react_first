import React from 'react';
import styles from "./Cockpit.module.css";

const cockpit = (props) => {
    let btnClass = '';
    if (props.showPersons) {
        btnClass = styles.Red;
    }
    //let classes = ['red', 'bold'].join(' '); //what we get 'red bold'
    const classes = [];
    if (props.persons.length <= 2) {
        classes.push(styles.red);
    }
    if (props.persons.length <= 1) {
        classes.push(styles.bold);
    }


    return (
        <div className={styles.Cockpit}>
            <h1>First react app.</h1>
            <p className={classes.join(" ")}>Dymanic Styling</p>
            <button className={btnClass} onClick={props.clicked}>
                Toggle Persons
          </button>
        </div>
    );
};

export default cockpit;