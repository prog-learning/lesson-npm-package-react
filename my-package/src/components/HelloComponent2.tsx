import React from 'react';
import { VFC } from 'react';

type Props = {
  color?: string;
};

export const HelloComponent2: VFC<Props> = ({ color = 'red' }) => {
  return (
    <div
      style={{
        color: color,
      }}
    >
      Hello2
    </div>
  );
};
