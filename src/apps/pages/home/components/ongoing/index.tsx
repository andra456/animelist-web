import Listing from '@/libs/ui/collections/listingItems/listing';
import useFetchQuery from '@app/hooks/useFetch';
import React from 'react';

function OnGoing({ onHandleModals }: { onHandleModals: (e: any) => void }) {
  const {
    fetchData,
    loading,
    animeData = [],
  } = useFetchQuery({
    type: 'ongoing',
  });

  React.useEffect(() => {
    fetchData({ page: 1 });
  }, []);

  return (
    <Listing
      title="On Going"
      moreLink={() => onHandleModals({ type: 'ongoing', title: 'On Going' })}
      data={animeData?.Page?.media}
    />
  );
}

export default OnGoing;
