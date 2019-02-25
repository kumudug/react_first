import React, { useEffect, useRef } from 'react';
import styles from "./Cockpit.module.css";

const cockpit = (props) => {
    const toggleBtnRef = useRef(null);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect. Only runs first time');
        return () => {
            console.log('[Cockpit.js] cleanup work');
        }
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        setTimeout(() => {
            alert('Saved data to cloud');
            toggleBtnRef.current.click();
        }, 1000);
    }, [props.persons]);

    let btnClass = '';
    if (props.showPersons) {
        btnClass = styles.Red;
    }
    //let classes = ['red', 'bold'].join(' '); //what we get 'red bold'
    const classes = [];
    if (props.personsLength <= 2) {
        classes.push(styles.red);
    }
    if (props.personsLength <= 1) {
        classes.push(styles.bold);
    }


    return (
        <div className={styles.Cockpit}>
            <h1>{props.title}</h1>
            <p className={classes.join(" ")}>Dymanic Styling</p>
            <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
                Toggle Persons
          </button>
        </div>
    );
};

//export default React.memo(cockpit);
export default React.memo(cockpit);