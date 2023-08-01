import React from 'react';
import { gql } from 'apollo-boost';
import { useLazyQuery } from '@apollo/react-hooks';

const mediaQuery = `
     id
      title { 
        english
        native
        userPreferred
      }
      coverImage {
        extraLarge
      }
      bannerImage
      episodes
      genres
      averageScore`;
const pageInfo = `
      pageInfo {
            total
            currentPage
            lastPage
            hasNextPage
            perPage
        }`;

const FETCH_ANIME_RECOMENDATION = gql`
  query fetchAnimeRecomendation($page: Int) {
    Page (page: $page, perPage: 20) {
        ${pageInfo}
        media(type: ANIME,  sort : FAVOURITES_DESC) {
        ${mediaQuery}
        }
    }
        
    
  }
`;
const FETCH_ANIME_POPULARITY = gql`
query fetchAnimeRecomendation($page: Int) {
        Page (page: $page, perPage: 20) {
            ${pageInfo}
            media(type: ANIME, seasonYear : 2023, sort : POPULARITY_DESC) {
                ${mediaQuery}
            }
        }
    }
`;

const FETCH_ANIME_BANNER = gql`
query fetchBanner($page: Int) {
Page (page: $page, perPage: 10) {
     ${pageInfo}
    recommendations(sort: RATING_DESC) {
     media {
       ${mediaQuery}
      
    }
  }
}
}
  `;
const FETCH_RECOMENDATION_BY_MEDIA = gql`
query fetchRecomendationBymedia($page: Int, $id: Int) {
Page (page: $page, perPage: 12) {
     ${pageInfo}
    recommendations(sort: RATING_DESC, mediaId : $id)  {
     media {
       ${mediaQuery}
      
    }
  }
}
}
  `;
const FETCH_ANIME_ONGOING = gql`
query fetchOnGoing($page: Int) {
Page (page: $page, perPage: 10) {
     ${pageInfo}
   media(status: RELEASING, episodes_lesser : 25, episodes_greater: 6, sort: TRENDING_DESC) {
      ${mediaQuery}
    }
  }
}`;

const FETCH_ANIME_SINGLE = gql`
  query fetchAnimeSerie($id: Int) {
    Media(id: $id) {
      genres
      bannerImage
      id
      title {
        english
        native
        userPreferred
      }

      type
      averageScore
      countryOfOrigin
      episodes
      description
      format
      trailer {
        site
        thumbnail
      }
      coverImage {
        extraLarge
      }
      volumes
      duration
      source
      tags {
        name
        description
      }
    }
  }
`;
export const queryList = {
  popular: FETCH_ANIME_POPULARITY,
  recomendation: FETCH_ANIME_RECOMENDATION,
  banner: FETCH_ANIME_BANNER,
  ongoing: FETCH_ANIME_ONGOING,
  single: FETCH_ANIME_SINGLE,
  recomendation_by_media: FETCH_RECOMENDATION_BY_MEDIA,
};

export type TypeQuery = keyof typeof queryList;

const useFetchQuery = ({ type }: { type: TypeQuery }) => {
  const [animeData, setAnimeData] = React.useState<any>(null);
  const fetchURL = () => {
    try {
      return queryList[type];
    } catch {
      throw new Error('Invalid Type');
    }
  };
  const [fetchAnimeSerie, { loading, error }] = useLazyQuery(fetchURL(), {
    onCompleted: (data) => {
      setAnimeData(data);
    },
  });

  const fetchData = (req: any) => {
    fetchAnimeSerie({ variables: { ...req } });
  };

  return { animeData, fetchData, loading, error };
};
export default useFetchQuery;
