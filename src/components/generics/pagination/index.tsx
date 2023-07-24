import { useCallback } from 'react';

import {
  Pagination,
  usePagination,
  PaginationPage,
  PaginationNext,
  PaginationPrevious,
  PaginationPageGroup,
  PaginationContainer,
  PaginationSeparator,
} from '@ajna/pagination';
import { UilAngleLeftB, UilAngleRightB } from '@iconscout/react-unicons';

export type PaginationType = {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageCharge: (page: number) => void;
};

export default function CustomPagination({
  itemsPerPage,
  onPageCharge,
  totalItems,
  currentPage: defaultCurrentPage,
}: PaginationType) {
  const { pages, pagesCount, currentPage, isDisabled, setCurrentPage } =
    usePagination({
      total: totalItems,
      limits: {
        outer: 2,
        inner: 2,
      },
      initialState: {
        pageSize: itemsPerPage,
        isDisabled: false,
        currentPage: defaultCurrentPage,
      },
    });

  const handleUpdateCurrentPage = useCallback(
    (page: number) => {
      onPageCharge(page);
      setCurrentPage(page);
    },
    [onPageCharge, setCurrentPage],
  );

  return (
    <Pagination
      pagesCount={pagesCount}
      currentPage={currentPage}
      isDisabled={isDisabled}
      onPageChange={handleUpdateCurrentPage}
    >
      <PaginationContainer
        align="center"
        justify="space-between"
        p={4}
        w="full"
      >
        <PaginationPrevious
          _hover={{
            bg: 'primary.600',
          }}
          bg="primary.500"
        >
          <UilAngleLeftB color="white" />
        </PaginationPrevious>
        <PaginationPageGroup
          isInline
          align="center"
          separator={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <PaginationSeparator
              bg="primary.500"
              fontSize="sm"
              w={7}
              jumpSize={11}
            />
          }
        >
          {pages.map((page: number) => (
            <PaginationPage
              bg="primary.500"
              opacity={0.65}
              key={`pagination_page_${page}`}
              page={page}
              fontSize="sm"
              w="9"
              _hover={{
                bg: 'primary.400',
                opacity: 0.9,
              }}
              _current={{
                bg: 'primary.500',
                fontSize: 'sm',
                opacity: 1,
              }}
            />
          ))}
        </PaginationPageGroup>
        <PaginationNext
          _hover={{
            bg: 'primary.400',
          }}
          bg="primary.500"
        >
          <UilAngleRightB color="white" />
        </PaginationNext>
      </PaginationContainer>
    </Pagination>
  );
}
