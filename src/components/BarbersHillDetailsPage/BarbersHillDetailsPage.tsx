import { css } from '@emotion/css';
import React from 'react';
const detailsPageStyles = css`
  display: flex;
  flex-flow: column;
  max-height: 1920px;
  align-items: center;
  > * {
    max-width: 1080px;
    width: 1080px;
  }
`;

export const BarbersHillDetailsPage = ({
  children,
}: React.PropsWithChildren<{}>) => {
  <div className={detailsPageStyles}>{children}</div>;
};
