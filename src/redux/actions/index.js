import { UPDATE_SERVER_DATA, UPDATE_PAGINATION, SORT_DATA, FILTER_DATA } from '../../constants';

export const updateServerData = payload => {
    return {
        type: UPDATE_SERVER_DATA,
        payload 
    }
}

export const updatePagination = currentPage => {
    return {
        type: UPDATE_PAGINATION,
        page: currentPage 
    }
}

export const sortData = value => {
    return {
        type: SORT_DATA,
        value 
    }
}

export const filterData = value => {
    return {
        type: FILTER_DATA,
        value
    }
}