import React from 'react';
import { Poster } from '@ui';
import { listingStyle } from './_styleListing';
import { cx } from 'emotion';
import { AiOutlineCaretRight } from 'react-icons/ai';
import styled from '@emotion/styled';

interface IPropsList {
  title: string;
  moreLink?: () => void;
  data: any[];
  isHeadling?: boolean;
  isPagination?: boolean;
  customClass?: string;
}

function Listing({
  title,
  moreLink,
  data,
  isHeadling = true,
  isPagination = false,
  customClass = 'col-xs-6 col-sm-4 col-md-3 col-lg-2',
}: IPropsList): JSX.Element {
  const ContainerPoster = styled.div`
    width: 100%;
    flex-wrap: ${isPagination ? 'wrap' : 'nowrap'};
  `;
  return (
    <div className={cx(listingStyle, 'container-fluid')}>
      {isHeadling && (
        <div className="head-listing">
          <h3> {title}</h3>
          {moreLink && (
            <div onClick={() => moreLink()} className="more">
              More Explore <AiOutlineCaretRight />
            </div>
          )}
        </div>
      )}
      <ContainerPoster className="row">
        {data?.length ? (
          data?.map((e, i) => (
            <div key={i} className={cx('box-row', customClass)}>
              <Poster
                bg={e?.coverImage?.extraLarge}
                className="bg-poster"
                data={{
                  id: e?.id,
                  title: e?.title?.userPreferred,
                  details: e?.genres?.join(' / '),
                }}
              />
            </div>
          ))
        ) : (
          <div className="preloader"></div>
        )}
      </ContainerPoster>
    </div>
  );
}

export default Listing;
