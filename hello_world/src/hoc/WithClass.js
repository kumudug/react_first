import React from 'react';

const withClass = props => (
    <div className={props.classes}>
        {props.children}
    </div>
);
//Another way of doing the above
// const withClass = (WrappedComponent, className) => {
//     return props => (
//         <div className={className}>
//             <WrappedComponent />
//         </div>
//     );
// };
//use it like this in App.js withClass(App, classes.App);

export default withClass;