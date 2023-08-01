import { css } from 'emotion';
import { color } from '../../globals';

export const container = css`
  display: flex;
  list-style-type: none;
  margin: 2vw 0 2vw;

  .pagination-item {
    position: relative;
    height: 25px;
    aspect-ratio: 1/1;
    justify-content: center;
    text-align: center;
    font-weight: 700;
    margin: auto 4px;
    display: flex;
    border-radius: 50%;
    align-items: center;
    border: solid 1px ${color['w-200']};
    line-height: 1.43;
    font-size: 0.7vw;
    min-width: 25px;
    text-align: center;
    transition-timing-function: all cubic-bezier(0.5, 0, 0.1, 1);
    transition-duration: 800ms;

    > span {
      transition-timing-function: all cubic-bezier(0.5, 0, 0.1, 1);
      transition-duration: 300ms;
      color: ${color['b-100']};
      position: absolute;

      text-align: center;
      background: rgba(255, 255, 255, 0.9);
      border-radius: 100%;
      width: 32px;
      font-size: 12px;
      aspect-ratio: 1/1;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
    }

    &.dots {
      color: ${color['w-200']};
      &:hover {
        background-color: transparent;
        cursor: default;
      }
    }
    &:hover {
      background-color: ${color['w-200']};
      border: solid 1px ${color['w-200']};
      cursor: pointer;
      span {
        opacity: 1;
      }
    }

    &.selected {
      background-color: ${color['r-100']};
      border: solid 1px ${color['r-100']};
    }

    .arrow {
    }

    &.disabled {
      pointer-events: none;

      .arrow::before {
        border-right: 0.12em solid rgba(0, 0, 0, 0.43);
        border-top: 0.12em solid rgba(0, 0, 0, 0.43);
      }

      &:hover {
        background-color: transparent;
        cursor: default;
      }
    }
  }
`;
