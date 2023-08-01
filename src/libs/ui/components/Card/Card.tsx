import React, { ReactNode } from 'react';

import { cx, css } from 'emotion';
import styled from '@emotion/styled';
import { LanscapePoster, WrapperPoster } from './_cardStyle';
import { Button } from '@component/Button';
import { BsCollectionFill, BsEyeFill } from 'react-icons/bs';

interface IPoster {
  attributCover?: JSX.Element | null;
  bg: string;
  data: any;
  className?: string | null;
}

type Props = {
  bg?: string;
  className: string;
  src?: string;
};

export const Img: React.FC<Props> = ({ src, className }) => {
  const Images = styled.div`
    background-image: url(${src});
    background-size: cover;
    background-position: center;
  `;
  return <Images className={cx(`bg-cover`, className)} />;
};
const gridBottom = css`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 5px;
  padding-bottom: 10px;
`;
const widthFull = css`
  width: 100%;
`;
export const Poster = ({
  attributCover = null,
  bg,
  data = null,
  className = null,
}: IPoster) => {
  return (
    <WrapperPoster>
      <div className={cx(LanscapePoster, className)}>
        {data && <div className="label-rate">{data.rating}</div>}
        <div className="image-cover">
          {attributCover}
          <Img src={bg} className="cover" />
        </div>
        <div className="explore">
          {data && (
            <div className="metadata">
              <h3 className="title">{data.title}</h3>
              <span className="detai">{data.details}</span>

              <div className={gridBottom}>
                <Button>
                  <BsCollectionFill />
                  Add Collection
                </Button>
                <a href={`/anime/${data?.id}`}>
                  <Button className={widthFull}>
                    <BsEyeFill />
                    View
                  </Button>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </WrapperPoster>
  );
};
