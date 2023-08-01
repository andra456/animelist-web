import React from 'react';
import { cx } from 'emotion';
import {
  usePagination,
  DOTS,
  IPropsPagination,
} from '@/apps/hooks/usePagination';
import { container } from './_stylePagination';
import styled from '@emotion/styled';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage = 1,
  pageSize,
}: IPropsPagination) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });
  console.log(currentPage, totalCount, siblingCount, pageSize);
  const onNext = () => {
    onPageChange && onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange && onPageChange(currentPage - 1);
  };
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const lastPage = paginationRange[paginationRange.length - 1];
  const WrapperPagination = styled.div`
    display: flex;
    justify-content: end;
    position: absolute;
    bottom: 0;
    width: 100%;
  `;
  return (
    <WrapperPagination className="container-fluid">
      <ul className={container}>
        <li
          className={cx('pagination-item', {
            disabled: currentPage === 1,
          })}
          onClick={onPrevious}
        >
          <AiOutlineLeft />
        </li>
        {paginationRange.map((pageNumber) => {
          if (pageNumber === DOTS) {
            return (
              <li key={pageNumber} className="pagination-item dots">
                &#8230;
              </li>
            );
          }

          return (
            <li
              key={pageNumber}
              className={cx('pagination-item', {
                selected: pageNumber === currentPage,
              })}
              onClick={() => onPageChange && onPageChange(pageNumber)}
            >
              <span>{pageNumber}</span>
            </li>
          );
        })}
        <li
          className={cx('pagination-item', {
            disabled: currentPage === lastPage,
          })}
          onClick={onNext}
        >
          <AiOutlineRight />
        </li>
      </ul>
    </WrapperPagination>
  );
};

export default Pagination;
