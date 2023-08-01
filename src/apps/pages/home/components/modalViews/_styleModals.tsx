import styled from '@emotion/styled';
import { color } from '@ui';

export const WraperModal = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  z-index: 10000;
  overflow-y: scroll;
  overflow-x: hidden;
  &:before {
    content: '';
    display: block;
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: ${color['b-100']};
    opacity: 0.9;
  }
`;
export const BodyModals = styled.div`
  width: 100%;
  display: block;
`;
export const FrameContent = styled.figure``;
export const HeadligModals = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8rem;
  font-size: 2rem;
  font-weight: 700;
  padding: 0px 6%;
`;
export const BoxContent = styled.div`
  display: block;
  position: relative;
  border-radius: 0.8rem;
  font-size: 1.6rem;
  margin: 5vw auto;
  z-index: 2;
  padding: 0px 0 100px;
  width: 80vw;
  min-height: 100vh;
  max-width: 80vw;
  background-color: ${color['b-200']};
  border: solid 1px ${color['b-400']};
  box-shadow: 0 0 5vw 0 rgba(0, 0, 0, 0.3);
`;
export const CloseBTN = styled.a`
  position: absolute;
  right: 0.5vw;
  top: 0.5vw;
  cursor: pointer;
`;
