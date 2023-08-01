import { css, cx } from 'emotion';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { PreloadStyle } from './_LodingDefailtStyle';
export interface ILoading {
  isLoading: boolean;
  isFixed?: boolean;
}

export const Preloader = (props: ILoading): JSX.Element => {
  const { isLoading, isFixed = true } = props;
  const position = css`
    position: ${isFixed ? 'fixed' : 'absolute'};
  `;
  return (
    <PreloadStyle className={position}>
      <div className={cx('loading-container', isLoading && 'active')}>
        <div className="loading-loader">
          <AiOutlineLoading3Quarters />
        </div>
      </div>
    </PreloadStyle>
  );
};
