import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { color } from '../../globals';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
export const PreloadStyle = styled.div`
  .loading-container {
    display: none;
    top: 0;
    left: 0;
    background: ${color['b-200']};
    width: 0%;
    height: 0%;
    z-index: 1000;
    overflow: hidden;
    opacity: 1;
    transition: all 0.4s cubic-bezier(0.08, 0.82, 0.17, 1) .1s;

    &.active {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      opacity: 1;
  
    .loading-loader {
      max-width: 200px;
      animation: ${spin} infinite;
      animation-duration: 500ms;
      font-size: 50px;
      color : ${color['b-200']};
      svg {
        display:flex;
      }
    }
  }
`;
