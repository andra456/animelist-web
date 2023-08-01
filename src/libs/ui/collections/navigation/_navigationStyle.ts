import styled from '@emotion/styled';
import { color } from '@ui';

export const WrapperMenu = styled.div`
  .push-menu-wraper {
    font-family: Nunito;
    justify-content: space-between;
    background-color: ${color['b-200']};
    display: flex;
    color: ${color['w-100']};
    align-items: center;
    width: 100%;
    left: 0;
    height: 58px;
    position: fixed;
    top: 0px;
    transition: width 0.15s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1000;
    border: solid 1px rgba(0, 0, 0, 0.1);
    box-shadow: 2px 0 6px 0 rgba(0, 0, 0, 0.016);

    .logo {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 150px;
      margin-right: 50px;
      img {
        max-height: 32px;
      }
    }
    .pages,
    .left-side,
    .right-side,
    .right-side {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }
    .right-side {
      justify-content: flex-end;

      color: ${color['w-100']};
    }

    .pages a {
      margin-inline-end: 12px;
      display: flex;
      align-items: center;
      color: ${color['w-100']};
    }
    .menu {
      display: none;
    }
    @media only screen and (max-width: 800px) {
      .right-side {
        min-width: 200px;
      }
      .menu {
        display: block;
      }
      .pages {
        background: ${color['b-200']};
        width: 100%;
        left: 0;
        top: 78px;
        position: absolute;
        display: none;
        flex-direction: column;
        align-items: start;
        color: ${color['b-100']};
        > a {
          width: 100%;
          padding: 15px 10px;
        }
      }
      &.show .pages {
        display: flex;
      }
      .search > div {
        display: none;
      }
    }
  }
`;
