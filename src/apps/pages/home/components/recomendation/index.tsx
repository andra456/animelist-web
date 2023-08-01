import Listing from '@/libs/ui/collections/listingItems/listing';
import useFetchQuery from '@app/hooks/useFetch';
import React from 'react';

function Recomendation({
  onHandleModals,
}: {
  onHandleModals: (e: any) => void;
}) {
  const {
    fetchData,
    loading,
    animeData = [],
  } = useFetchQuery({
    type: 'recomendation',
  });

  React.useEffect(() => {
    fetchData({ page: 1 });
  }, []);

  return (
    <Listing
      title="Trending Now"
      moreLink={() =>
        onHandleModals({ type: 'recomendation', title: 'Trending Now' })
      }
      data={animeData?.Page?.media}
    />
  );
}

export default Recomendation;
