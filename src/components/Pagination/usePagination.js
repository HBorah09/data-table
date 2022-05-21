import { useMemo } from 'react';

const range = (start, end) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
}

const DOTS = '...';

export const usePagination = ({
    totalCount,
    pageSize,
    currentPage
  }) => {
    const paginationRange = useMemo(() => {
        const totalPageCount = Math.ceil(totalCount / pageSize);
    
        const totalPageNumbers = 5;

        if (totalPageNumbers >= totalPageCount) {
          return range(1, totalPageCount);
        }

        const leftIndex = Math.max(currentPage, 1);
        const rightIndex = Math.min(currentPage, totalPageCount);

        const shouldShowLeftDots = leftIndex > 2;
        const shouldShowRightDots = rightIndex < totalPageCount - 2;
    
        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;
    
        if (!shouldShowLeftDots && shouldShowRightDots) {
          let leftItemCount = 3;
          let leftRange = range(1, leftItemCount);
    
          return [...leftRange, DOTS, totalPageCount];
        }
    
        if (shouldShowLeftDots && !shouldShowRightDots) {
          
          let rightItemCount = 3;
          let rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
          return [firstPageIndex, DOTS, ...rightRange];
        }
         
        if (shouldShowLeftDots && shouldShowRightDots) {
          let middleRange = range(leftIndex, rightIndex);
          return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
        }
      }, [totalCount, pageSize, currentPage]);
  
    return paginationRange || [];
  };