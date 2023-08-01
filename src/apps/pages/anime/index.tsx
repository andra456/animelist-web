import React from 'react';
import * as S from './_styleAnime';
import { cx } from 'emotion';
import { BsCollectionFill } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import useFetchQuery from '@app/hooks/useFetch';
import RecomendationMedia from './component/recomendation';

const AnimeDetails = () => {
  const params: { id?: number | string | null } = useParams();
  const animeId = Number(params.id);
  const {
    fetchData,
    loading,
    animeData = [],
  } = useFetchQuery({
    type: 'single',
  });

  React.useEffect(() => {
    fetchData({ id: animeId });
  }, [animeId]);

  return (
    <>
      <S.Header className="container-fluid">
        <S.WraperDetail>
          <S.BannerDetail
            className={cx(
              'bg-header',
              S.styleBg(animeData?.Media?.bannerImage)
            )}
          ></S.BannerDetail>
          <S.BoxMovies>
            <S.SideList />

            <S.FrameGrid className="row container-fluid">
              <div className="col-xs-12 col-md-6 col-lg-2">
                <S.Container className="flex">
                  <S.PosterFrame>
                    <S.Poster src={animeData?.Media?.coverImage.extraLarge} />
                  </S.PosterFrame>
                </S.Container>
                <S.Button>
                  <BsCollectionFill /> Add Collection
                </S.Button>
              </div>
              <div className="col-xs-12 col-md-6 col-lg-10">
                <S.Metadata>
                  <S.Container className="flex">
                    <S.Description>
                      <div className="years"></div>
                      <div className="title">
                        {animeData?.Media?.title.userPreferred}
                      </div>
                      <div className="title native">
                        {animeData?.Media?.title.native}
                      </div>
                    </S.Description>
                  </S.Container>

                  <S.Container>
                    <S.Overviews className="overviews">
                      <S.Casting className="casting ">
                        <div className="list-detail">
                          <div className="genre">
                            <b>Genre :</b>{' '}
                            {animeData?.Media.genres?.join(' / ') || 'N/A'}
                          </div>
                          <div className="studio">
                            <b>Score : </b>
                            {animeData?.Media.averageScore}
                          </div>
                          <div className="episode">
                            <b>Episode : </b>
                            {animeData?.Media.episodes || 'N/A'} Episode
                          </div>
                          <div className="producer">
                            <b>Source</b> {animeData?.Media.source}
                          </div>
                        </div>
                      </S.Casting>
                      <h2>Overview</h2>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: animeData?.Media.description,
                        }}
                      />
                    </S.Overviews>
                  </S.Container>
                </S.Metadata>
              </div>
            </S.FrameGrid>
          </S.BoxMovies>
        </S.WraperDetail>
      </S.Header>
      <S.MainContent className="row">
        <div className="col-xs-12">
          <RecomendationMedia mediaId={animeId} />
        </div>
      </S.MainContent>
    </>
  );
};

export default AnimeDetails;
