import React from 'react';
export const HelloComponent1 = ({ color = 'red' }) => {
    return (React.createElement("div", { style: {
            color: color,
        } }, "Hello1"));
};
