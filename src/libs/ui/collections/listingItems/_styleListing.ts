import { color } from '@ui';
import { css } from 'emotion';

export const listingStyle = css`
  display: block;

  min-height: 15vw;
  position: relative;
  &:hover {
    .head-listing .more {
      margin-left: 1vw;
      opacity: 1;
    }
  }
  .head-listing {
    display: flex;
    align-items: center;
    font-family: 'Nunito';
    width: 100%;
    margin-bottom: 20px;

    h3 {
      display: table-cell;
      font-size: 1.4vw;
      line-height: 1.25vw;
      vertical-align: bottom;
    }
    .more {
      cursor: pointer;
      opacity: 0;
      flex-wrap: nowrap;
      text-wrap: nowrap;
      overflow: hidden;
      color: ${color['y-100']};
      display: flex;
      align-items: center;
      font-size: 1.2vw;
      vertical-align: bottom;
      line-height: 1.1vw;
      margin-left: -6vw;
      transition-timing-function: all cubic-bezier(0.5, 0, 0.1, 1);
      transition-duration: 300ms;
      transition-delay: 100ms;
      svg {
        margin-left: 0.8vw;
      }
    }
  }
  .containeer-poster {
    width: 100%;
    flex-wrap: nowrap;
  }
`;
