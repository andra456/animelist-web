import { css } from 'emotion';
import { color } from '@ui';
export const layout = css`
  overflow: hidden;
  .footer {
    position: relative;

    height: 80px;
    margin-top: 50px;
    background: ${color['b-100']};
  }
`;
export const header = css`
  position: relative;
  z-index: 22223434343434;
  .search,
  .navigation {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .navigation {
    a,
    > div {
      margin-inline-end: 12px;
      color: ${color['w-100']};
    }
    .search {
      svg {
        margin-inline-end: 12px;
      }
    }
  }
`;
