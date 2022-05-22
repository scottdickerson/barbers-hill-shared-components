import React, { FC } from 'react';
import teamsHeader from '../../images/12.3-2A-Teams-TopSection.png';
import specialRecognition from '../../images/11.3-3D-SpecialHonoree-Bug.png';
import closeButton from '../../images/11.3-Close-Button.png';
import { css } from '@emotion/css';

const barbersHillDetailsHeaderStyles = css`
  position: relative;
  height: 369px;
  font-family: AvenirBlack;
  img {
    max-width: 1080px;
  }
`;
const barbersHillSpecialRecognitionStyles = css`
  position: absolute;
  top: 0;
  margin: auto;
`;

const barbersHillCloseButtonStyles = css`
  position: absolute;
  top: 30px;
  right: 30px;
  margin: auto;
  background-color: unset;
  img {
    height: 100px;
  }
`;

const barbersHillDetailsHeaderTextStyles = ({
  showSubtitle,
}: {
  showSubtitle: boolean;
}) => css`
  position: absolute;
  top: ${showSubtitle ? 132 : 178}px;
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
  isSpecialRecognition?: boolean;
  onClose?: () => void;
}
export const BarbersHillDetailsHeader: FC<BarbersHillDetailsHeaderProps> = ({
  title,
  subtitle,
  details,
  isSpecialRecognition,
  onClose,
}) => {
  return (
    <header className={barbersHillDetailsHeaderStyles}>
      {isSpecialRecognition ? (
        <img
          src={specialRecognition}
          alt="Special Recognition"
          className={barbersHillSpecialRecognitionStyles}
        ></img>
      ) : null}
      {onClose ? (
        <button className={barbersHillCloseButtonStyles} onClick={onClose}>
          <img src={closeButton} alt="Close"></img>
        </button>
      ) : null}

      <div
        className={barbersHillDetailsHeaderTextStyles({
          showSubtitle: !!subtitle,
        })}
      >
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
