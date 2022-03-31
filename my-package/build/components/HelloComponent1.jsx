import React from 'react';
export const HelloComponent1 = ({ color = 'red' }) => {
    return (<div style={{
            color: color,
        }}>
      Hello1
    </div>);
};
