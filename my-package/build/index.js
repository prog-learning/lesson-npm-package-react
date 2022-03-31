import React from 'react';
export const HelloComponent = ({ color = 'red' }) => {
    return (<div style={{
            color: color,
        }}>
      Hello
    </div>);
};
// export default HelloComponent;
