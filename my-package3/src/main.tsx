import React from 'react';
import { VFC } from 'react';
import 'index.css';

type Props = {
  text?: string;
};

const HelloComponent: VFC<Props> = ({ text = '' }) => {
  return (
    <div className='text-orang-600 font-bold'>
      <div>Hello</div>
      <div>{text}</div>
    </div>
  );
};

export default HelloComponent;
