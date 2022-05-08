import React from 'react';
import { Global, css } from '@emotion/core';
import AvenirMedium from '../../fonts/Avenir-Medium-09.ttf';
import AvenirBlack from '../../fonts/Avenir-Black-03.ttf';
import Acumin from '../../fonts/Acumin-Pro.ttf';
import AcuminExtraCondensed from '../../fonts/Acumin-Pro-ExtraCond-Medium.otf';

export const BarbersHillStyles = () => {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: Avenir;
          src: url(${AvenirMedium});
        }

        @font-face {
          font-family: AvenirBlack;
          src: url(${AvenirBlack});
        }

        @font-face {
          font-family: Acumin;
          src: url(${Acumin});
        }
        @font-face {
          font-family: AcuminExtraCondensed;
          src: url('${AcuminExtraCondensed}');
        }
      `}
    ></Global>
  );
};
