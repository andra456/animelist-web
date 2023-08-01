import React, { useState } from 'react';
import Carousel from '@/libs/ui/collections/carousel';
import styled from '@emotion/styled';
import { css } from 'emotion';
import { carousel, DescriptionBanner } from './_styleBanner';
import { Img, color } from '@ui';
import useFetchQuery from '@app/hooks/useFetch';

const WraperItem = styled.div`
  height: 400px;
  background: ${color['b-400']};
`;
const ShadeBanner = styled.div``;
const FrameImages = styled.figure``;

const container = css`
  margin-bottom: 20px;
`;
const containerCarousel = css`
  display: flex;
  justify-content: end;
`;

const ItemsCarousel = (data: any) => {
  const { media } = data;
  const Images = styled.div`
    background-image: url(${media?.bannerImage});
    background-size: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    &:before {
      content: '';
      background: linear-gradient(
        180deg,
        transparent 0%,
        ${color['b-200']} 100%
      );
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }
  `;
  return (
    <WraperItem>
      <FrameImages>
        <Images className="image" />
      </FrameImages>
      <ShadeBanner />
    </WraperItem>
  );
};

export default function Banner() {
  const [banner, setBanner] = React.useState<any[]>([]);
  const [selected, setSelected] = useState<any>(null);
  const { fetchData, loading, animeData } = useFetchQuery({
    type: 'banner',
  });

  React.useEffect(() => {
    fetchData({ page: 1 });
  }, []);

  React.useEffect(() => {
    if (animeData !== null) {
      console.log(animeData);
      const arr = animeData?.Page?.recommendations.filter(
        (e: any) => e.bannerImage !== null
      );
      if (arr?.length) {
        setBanner(arr);
        setSelected(arr[0].media);
      }
    }
  }, [animeData]);
  return (
    <div className={container}>
      {selected ? (
        <div className="container-fluid">
          <DescriptionBanner>
            <div className="title english">{selected?.title.userPreferred}</div>
            <div className="title native">{selected?.title.native}</div>
            <div className="list-tags">
              {selected?.genres?.map((e: string, i: number) => (
                <div key={i} className="tags">
                  {e}
                </div>
              ))}
            </div>
          </DescriptionBanner>
        </div>
      ) : null}
      <Carousel
        data={banner}
        onChange={(e: any) => setSelected(e?.media)}
        componentItem={ItemsCarousel}
        classNameContainer={containerCarousel}
        classNameNav={carousel}
      />
    </div>
  );
}
