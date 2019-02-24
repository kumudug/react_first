import React from 'react';

import Person from './Person/Person';

const persons = (props) => {
    console.log('[Persons.js] rendering...');
    return props.persons.map((person, index) => {
        return (
            <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => props.clicked(index)}
                changed={event => this.changed(event, person.id)}>
                Hobbies: sailing
        </Person>
        );
    })
};

export default persons;