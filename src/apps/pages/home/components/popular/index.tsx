import Listing from '@/libs/ui/collections/listingItems/listing';
import useFetchQuery from '@app/hooks/useFetch';
import React from 'react';

function Popular({ onHandleModals }: { onHandleModals: (e: any) => void }) {
  const {
    fetchData,
    loading,
    animeData = [],
  } = useFetchQuery({
    type: 'popular',
  });

  React.useEffect(() => {
    fetchData({ page: 1 });
  }, []);

  return (
    <Listing
      title="Popular"
      moreLink={() => onHandleModals({ type: 'popular', title: 'Popular' })}
      data={animeData?.Page?.media}
    />
  );
}

export default Popular;
