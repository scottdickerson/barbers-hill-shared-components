import React, { FC } from 'react';
import {
  PageWithClickTargets,
  PageWithClickTargetsProps,
} from '../src/components/PageWithClickTargets/PageWithClickTargets';

const mockClickTargets = [
  {
    top: 100,
    left: 20,
    width: 200,
    height: 200,
    onClick: () => console.log('target 1 clicked'),
  },
];

export const BasicStory: FC<PageWithClickTargetsProps> = (props) => {
  return (
    <>
      <PageWithClickTargets {...props} clickTargets={mockClickTargets} />
    </>
  );
};

export default {
  component: PageWithClickTargets,
};
