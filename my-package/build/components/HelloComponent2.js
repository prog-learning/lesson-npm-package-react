import React from 'react';
export const HelloComponent2 = ({ color = 'red' }) => {
    return (<div style={{
            color: color,
        }}>
      Hello2
    </div>);
};
