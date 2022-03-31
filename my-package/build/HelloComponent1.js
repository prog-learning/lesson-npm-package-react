import React from 'react';
const HelloComponent1 = ({ color = 'red' }) => {
    return (<div style={{
            color: color,
        }}>
      Hello1
    </div>);
};
export default HelloComponent1;
