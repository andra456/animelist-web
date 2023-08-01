import styled from '@emotion/styled';
import { color } from '@ui';
import { css } from 'emotion';

export const carousel = css`
  padding-bottom: 50px;
  .swiper-slide {
    opacity: 0.4;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
  .swiper-slide-active {
    opacity: 1;
  }

  .swiper-pagination {
    bottom: 80px !important;
    position: absolute;
    text-align: right;
    padding: 0 20px;
    transition: 0.3s opacity;
    transform: translate3d(0, 0, 0);
    z-index: 20;
    .swiper-pagination-bullet {
      background: rgba(255, 255, 255, 0.5);
      &.swiper-pagination-bullet-active {
        width: 40px;
        border-radius: 8px;
        background: #e74c3c;
      }
    }
  }
`;

export const DescriptionBanner = styled.div`
  text-shadow: 0px 1px 2px #000000;
  line-height: 1.3;
  position: absolute;
  top: 100px;
  z-index: 525;
  .title {
    font-weight: 800;
    margin-bottom: 0.8vw;
  }
  .native {
    font-size: 2.3vw;
  }
  .english {
    font-size: 2vw;
  }
  .list-tags {
    display: flex;
    position: relative;
    .tags {
      font-size: 14px;
      background: ${color['r-100']};
      padding: 6px 15px;
      border-radius: 5px;
      margin-right: 10px;
      text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
    }
  }
`;
