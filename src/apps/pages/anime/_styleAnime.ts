import { css } from 'emotion';
import styled from '@emotion/styled';
import { color } from '@ui';

export const styleBg = (src: string) => css`
  background-size: cover !important;
  background-repeat: no-repeat;
  background-position: center;
  background: url(${src});
  opacity: 0.5;
`;
export const Container = styled.div`
  display: flex;
`;
export const WraperDetail = styled.div`
  display: flex;
  height: 10vw;
  text-shadow: 0px 1px 2px ${color['b-100']};
`;
export const BannerDetail = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
export const BoxMovies = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 220px;
`;

export const PosterFrame = styled.div`
  postion: relative;
  z-index: 10;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.5);
`;

export const Description = styled.div`
  line-height: 1.3;
  .title {
    font-size: 1.6vw;
    font-weight: 800;
    margin-bottom: 0.8vw;
    &.native {
      font-size: 2vw;
    }
  }
  .years {
    font-size: 1.2vw;
    font-weight: 800;
  }
  div {
    position: relative;
  }
`;
export const Casting = styled.div`
  width: 100%;
  position: relative;
  bottom: 0;
  .bg-grey {
    background: ${color['b-300']};
  }
  .list-detail {
    padding: 20px 0;
    display: flex;
    .studio,
    .year,
    .genre,
    .episode,
    .producer {
      color: ${color['w-300']};
      line-height: 1.5;
    }
    b {
      color: ${color['w-100']};
      font-weight: 600;
    }
    > div {
      margin-right: 10px;
      padding-right: 10px;
      border-right: solid 1px ${color['w-200']};
    }
  }
`;
export const Overviews = styled.div`
  margin-top: 5px;
  h2 {
    position: relative;
    font-size: 1.3vw;
    font-weight: 800;
    line-height: 1.5;
  }
  p {
    position: relative;
    color: ${color['w-300']};
    line-height: 1.5;
  }
`;
export const Metadata = styled.div`
  width: 100%;
`;
export const SideList = styled.div`
  background: linear-gradient(180deg, transparent 0%, ${color['b-200']} 100%);
  position: absolute;
  height: 150px;
  width: 100%;
  bottom: 0;
`;

export const FrameGrid = styled.div`
  width: 100%;
`;
export const Header = styled.header`
  height: 350px;
  position: relative;
  margin-bottom: 180px;
`;

export const relative = css`
  position: relative;
`;
export const Poster = styled.img`
  border-radius: 4px;
  overflow: hidden;
`;

export const Button = styled.button`
  margin-top: 10px;
  background: ${color['r-100']};
  border: 0;
  width: 100%;
  padding: 5px 10px;
  color: ${color['w-100']};
  display: flex;
  align-item: center;
  justify-content: center;
  position: relative;
  z-index: 10;
  border-radius: 4px;

  svg {
    margin-right: 10px;
  }
`;

export const MainContent = styled.div`
  min-height: 20vw;
`;
