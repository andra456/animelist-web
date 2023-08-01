import { css } from 'emotion';
import { color } from '../../globals';
import styled from '@emotion/styled';

export const WrapperPoster = styled.div`
  position: relative;
`;
export const LanscapePoster = css`
  position: relative;
  transition-timing-function: all cubic-bezier(0.5, 0, 0.1, 1);
  transition-duration: 500ms;
  transition-delay: 100ms;
  margin-bottom: 3vw;
  .explore {
    height: 0;
    opacity: 0;
    bottom: 5%;
    width: 100%;
    position: absolute;
    transition-timing-function: all cubic-bezier(0.5, 0, 0.1, 1);
    transition-duration: 600ms;
  }
  .metadata {
    transition-timing-function: all cubic-bezier(0.5, 0, 0.1, 1);
    transition-duration: 200ms;
    opacity: 0;
    display: none;
    overflow: hidden;
    .frame {
      padding: 5px 10px;
    }
    h3 {
      font-size: 1vw;
      line-height: 1.3;
      font-family: 'Nunito';
      color: ${color['w-100']};
    }
    span {
      font-size: 0.7vw;
      color: ${color['w-200']};
    }
  }

  &:hover {
    width: 100%;
    position: absolute;
    transform: scale(1.2);
    z-index: 10;
    background: ${color['b-200']};

    border-radius: 2px;
    box-shadow: 0px 0px 26px 1px rgba(0, 0, 0, 0.5);
    .metadata {
      background: ${color['b-300']};
      box-shadow: 0px 0px 26px 1px rgba(0, 0, 0, 0.5);
      height: auto;
      opacity: 1;
      display: block;
      line-height: 1;
      padding: 0.5vw 0.4vw;
    }
    .explore {
      opacity: 1;
      bottom: 0;
    }
  }

  .image-cover {
    position: relative;
    background: ${color['w-200']};
    border-radius: 2px;
    background-size: 200% 100%;
    z-index: 2;
    aspect-ratio: 16 / 9;
    .bg-cover {
      border-radius: 2px;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      position: absolute;
    }
  }
`;

export const boxCard = css`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .cards {
    display: flex;
  }

  .card {
    padding: 20px;
    background: ${color['w-100']};
    color: ${color['w-200']};
    border-radius: 2px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);

    .image {
      border-radius: 5px 5px 0 0;
      font-size: 70px;
      svg {
        max-width: 100%;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
      }
    }

    .content {
      padding: 20px 30px;
    }
  }

  .card.is-loading {
    .image,
    h2,
    h3,
    h4,
    p {
      background: #eee;
      background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
      border-radius: 5px;
      background-size: 200% 100%;
      animation: 1.5s shine linear infinite;
    }

    .image {
      height: 200px;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    h2,
    h3,
    h4 {
      height: 30px;
      margin-bottom: 10px;
    }

    p {
      height: 70px;
    }
  }

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
`;
