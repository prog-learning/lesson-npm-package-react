import React from 'react';
export const HelloComponent2 = ({ color = 'red' }) => {
    return (React.createElement("div", { style: {
            color: color,
        } }, "Hello2"));
};
