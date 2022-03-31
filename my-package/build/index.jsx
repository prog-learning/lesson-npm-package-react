export { HelloComponent1 } from './HelloComponent1.js';
import React from 'react';
export const HelloComponent = ({ color = 'red' }) => {
    return (<div style={{
            color: color,
        }}>
      Hello
    </div>);
};
export const test = 'test';
// export default HelloComponent;
