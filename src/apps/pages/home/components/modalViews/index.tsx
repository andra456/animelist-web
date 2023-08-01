import React, { useEffect, useState } from 'react';

import { injectGlobal } from 'emotion';
import Listing from '@/libs/ui/collections/listingItems/listing';
import Pagination from '@/libs/ui/collections/pagination';
import {
  WraperModal,
  BodyModals,
  HeadligModals,
  BoxContent,
  CloseBTN,
  FrameContent,
} from './_styleModals';
import { AiOutlineClose } from 'react-icons/ai';
import useFetchQuery, { TypeQuery } from '@app/hooks/useFetch';
import { Preloader } from '@ui';

interface IPropsModals {
  show: boolean;
  title: string;
  idList: TypeQuery;
  handleClose: () => void;
}

const ModalsList = ({ show, title, idList, handleClose }: IPropsModals) => {
  const [page, setPage] = useState<number>(1);

  const {
    fetchData,
    loading,
    animeData = [],
  } = useFetchQuery({
    type: idList,
  });

  useEffect(() => {
    if (show) {
      injectGlobal` html  { overflow: hidden; }`;
    }
  }, [show]);

  useEffect(() => {
    fetchData({ page });
  }, [page]);

  const onClose = () => {
    handleClose();
    setPage(1);
  };
  const data = (): any[] => {
    switch (idList) {
      case 'ongoing':
        return animeData?.Page?.media;
      case 'popular':
        return animeData?.Page?.media;
      case 'recomendation':
        return animeData?.Page?.media;
      default:
        return [];
    }
  };

  if (!show) return null;

  return (
    <WraperModal>
      <BodyModals>
        <BoxContent>
          <HeadligModals>
            {title}
            <CloseBTN onClick={onClose}>
              <AiOutlineClose />
            </CloseBTN>
          </HeadligModals>
          <FrameContent>
            {loading ? (
              <Preloader isLoading={true} isFixed={false} />
            ) : (
              <Listing
                title=""
                isHeadling={false}
                customClass="col-xs-6 col-sm-4 col-md-3 col-lg-3"
                isPagination
                data={data()}
              />
            )}
          </FrameContent>
          <Pagination
            currentPage={page}
            totalCount={animeData?.Page?.pageInfo.total}
            pageSize={animeData?.Page?.pageInfo.perPage}
            onPageChange={(page) => setPage(page)}
          />
        </BoxContent>
      </BodyModals>
    </WraperModal>
  );
};

export default ModalsList;
