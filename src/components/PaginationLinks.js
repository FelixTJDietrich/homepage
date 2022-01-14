import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

function PaginationLinks({ currentPage, numberOfPages }) {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numberOfPages;
  const previousPage = (currentPage - 1) === 1 ? '/' : `/page/${(currentPage - 1).toString()}`;
  const nextPage = `/page/${(currentPage + 1).toString()}`;

  return (
    <Pagination aria-label="Page navigation example">
      <PaginationItem disabled={isFirst}>
        <PaginationLink previous href={previousPage} />
      </PaginationItem>
      {Array.from({ length: numberOfPages }, (_, index) => (
        <PaginationItem active={currentPage === (index + 1)} key={`page-number${index + 1}`}>
          <PaginationLink href={`/${index === 0 ? '' : `page/${(index + 1).toString()}`}`}>
            {index + 1}
          </PaginationLink>
        </PaginationItem>
      ))}
      <PaginationItem disabled={isLast}>
        <PaginationLink next href={nextPage} />
      </PaginationItem>
    </Pagination>
  );
}

export default PaginationLinks;
