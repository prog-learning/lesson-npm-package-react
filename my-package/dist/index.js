import React from 'react';
const HelloComponent = ({ color = 'red' }) => {
    return (React.createElement("div", { style: {
            color: color,
        } }, "Hello"));
};
export default HelloComponent;
