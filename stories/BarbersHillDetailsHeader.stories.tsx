import React, { FC } from 'react';
import {
  BarbersHillDetailsHeader,
  BarbersHillDetailsHeaderProps,
} from '../src/components/BarbersHillDetailsHeader/BarbersHillDetailsHeader';
import { BarbersHillStyles } from '../src/components/BarbersHillStyles/BarbersHillStyles';

export const BasicStory: FC<BarbersHillDetailsHeaderProps> = (props) => {
  return (
    <>
      <BarbersHillStyles></BarbersHillStyles>
      <BarbersHillDetailsHeader {...props} />
    </>
  );
};

export default {
  component: BarbersHillDetailsHeader,
  args: {
    title: 'Title',
    subtitle: 'Subtitle',
    details: 'Details',
  },
};
