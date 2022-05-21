import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { usePagination } from './usePagination';
import { PaginationContainer, PaginationNum, Paginationitem} from './style';
import { DATA_PER_PAGE } from '../../constants';
import { updatePagination } from '../../redux/actions';

const Pagination = () => {

  const currentPage = useSelector((state) => state.currentPage);
  const totalCount = useSelector((state) => state.totalCount);

  const dispatch = useDispatch();

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        pageSize: DATA_PER_PAGE
      });

      const lastPage = Math.ceil(totalCount / DATA_PER_PAGE);

      const handlePagination = page => {
        dispatch(updatePagination(page));
      }
      
      return(
        <PaginationContainer>
          {currentPage !== 1 && (
          <PaginationNum>
            <Paginationitem aria-label='Go to previous page' onClick={() => handlePagination(currentPage - 1)}>{`<<`}</Paginationitem>
          </PaginationNum>
          )}
          {paginationRange.map(num => (
          <PaginationNum key={Math.random()}>
            <Paginationitem active={currentPage === num} aria-label={`Go to page number ${num}`} disabled={isNaN(num)} onClick={() => handlePagination(num)}>{num}</Paginationitem>
            </PaginationNum>
          ))}
          {currentPage !== lastPage && totalCount !==0 && (
          <PaginationNum>
            <Paginationitem aria-label='Go to next page' onClick={() => handlePagination(currentPage + 1)}>{`>>`}</Paginationitem>
          </PaginationNum>
          )}
        </PaginationContainer>
    )
}

export default Pagination;