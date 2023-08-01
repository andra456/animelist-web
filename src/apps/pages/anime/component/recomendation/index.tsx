import Listing from '@/libs/ui/collections/listingItems/listing';
import useFetchQuery from '@app/hooks/useFetch';
import React from 'react';

function RecomendationMedia({ mediaId }: { mediaId: number }) {
  const {
    fetchData,
    loading,
    animeData = [],
  } = useFetchQuery({
    type: 'ongoing',
  });

  React.useEffect(() => {
    console.log(mediaId);
    mediaId && fetchData({ page: 1, id: mediaId });
  }, [mediaId]);
  console.log(animeData?.Page?.recommendations);
  return <Listing title="Recomendation" data={animeData?.Page?.media} />;
}

export default RecomendationMedia;
