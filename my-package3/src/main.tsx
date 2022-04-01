import React from 'react';
import { VFC } from 'react';

type Props = {
  color?: string;
};

const HelloComponent: VFC<Props> = ({ color = 'red' }) => {
  return (
    <div
      style={{
        color: color,
      }}
    >
      Hello123
    </div>
  );
};

export default HelloComponent;
