import React from 'react';

import Person from './Person/Person';

const persons = (props) => props.persons.map((person, index) => {
    return (
        <Person
            name={person.name}
            age={person.age}
            click={() => props.clicked(index)}
            changed={event => this.changed(event, person.id)}>
            Hobbies: sailing
        </Person>
    );
});

export default persons;