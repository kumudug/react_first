import React, { Component } from 'react';

import Person from './Person/Person';

class Persons extends Component {

    static getDerivedStateFromProps(props, state) {
        console.log('[Persons.js] getDerivedStateFromProps');
        return state;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        return (nextProps.persons !== this.props.persons || nextProps.isAuthenticated !== this.props.isAuthenticated);
        //if you are checking all props you can use PureComponent instead of Component
    }

    getSnapshotBeforeUpdate(pervProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
    }

    componentDidUpdate() {
        console.log('[Persons.js] componentDidUpdate');
    }

    componentWillUnmount() {
        //do cleanup
        console.log('[Persons.js] componentWillUnmount');
    }

    render() {
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((person, index) => {
            return (
                <Person
                    key={person.id}
                    name={person.name}
                    age={person.age}
                    click={() => this.props.clicked(index)}
                    changed={event => this.props.changed(event, person.id)}
                    isAuth={this.props.isAuthenticated}>
                    Hobbies: sailing
            </Person>
            );
        })
    }
};

export default Persons;