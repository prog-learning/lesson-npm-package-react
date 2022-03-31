import React from 'react';
import { VFC } from 'react';

type Props = {
  color?: string;
};

const HelloComponent: VFC<Props> = ({ color = 'red' }) => {
  // const HelloComponent = ({ color = 'red' }) => {
  return (
    <div
      style={{
        color: color,
      }}
    >
      Hello
    </div>
  );
};

export default HelloComponent;
