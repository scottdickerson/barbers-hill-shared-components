import React, { FC } from 'react';
import teamsHeader from '../../images/12.3-2A-Teams-TopSection.png';
import { css } from '@emotion/css';

const barbersHillDetailsHeaderStyles = css`
  position: relative;
  height: 369px;
  font-family: AvenirBlack;
  img {
    max-width: 1080px;
  }
`;

const barbersHillDetailsHeaderTextStyles = css`
  position: absolute;
  top: 132px;
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const barbersHillDetailsHeaderTopTextStyles = css`
  color: #91c4ea;
  line-height: 45px;
  font-size: 37px;
`;

const barbersHillDetailsHeaderBottomTextStyles = css`
  padding-top: 25px;
  font-family: AcuminExtraCondensed;
  color: #a55a16;
  line-height: 30px;
  font-size: 30px;
`;

export interface BarbersHillDetailsHeaderProps {
  title?: string;
  subtitle?: string;
  details?: string;
}
export const BarbersHillDetailsHeader: FC<BarbersHillDetailsHeaderProps> = ({
  title,
  subtitle,
  details,
}) => {
  return (
    <header className={barbersHillDetailsHeaderStyles}>
      <div className={barbersHillDetailsHeaderTextStyles}>
        {title && details ? (
          <>
            <span className={barbersHillDetailsHeaderTopTextStyles}>
              {title.toLocaleUpperCase()}
            </span>
            {subtitle ? (
              <span className={barbersHillDetailsHeaderTopTextStyles}>
                {subtitle.toLocaleUpperCase()}
              </span>
            ) : null}
            <span className={barbersHillDetailsHeaderBottomTextStyles}>
              {details.toLocaleUpperCase()}
            </span>
          </>
        ) : (
          <span className={barbersHillDetailsHeaderTopTextStyles}>
            Cannot load details
          </span>
        )}
      </div>
      <img src={teamsHeader} alt="background" />
    </header>
  );
};
