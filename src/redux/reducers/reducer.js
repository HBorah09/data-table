import { UPDATE_SERVER_DATA, UPDATE_PAGINATION, DATA_PER_PAGE, SORT_DATA, FILTER_DATA } from '../../constants';

let filteredAndSortedData = [];

const calculateDisplayData = (serverData, currentPage) => {
    const firstPageIndex = (currentPage - 1) * DATA_PER_PAGE;
    const lastPageIndex = firstPageIndex + DATA_PER_PAGE;
    filteredAndSortedData = serverData;
    return serverData.slice(firstPageIndex, lastPageIndex);
}

const getIntialData = (data, filterBy, sortBy) => {
    filteredAndSortedData = data;
    let finalData = [];
    let dir='';

    if(!filterBy && !sortBy) {
        finalData = data;
        return { result: finalData };
    }

    if (filterBy) {
        finalData = filterData(data, filterBy);
    } 
    if (sortBy) {
        const dataToBeSorted = filterBy ? finalData : data;
        const { result, direction } = sortData(dataToBeSorted, sortBy);
        finalData = result;
        dir = direction;
    }
    return { result: finalData, direction: dir };
}

const sortData = (data, sortBy, currentSortDir = '') => {
    const direction = currentSortDir === 'asc' ? 'desc' : 'asc';
    const sortByValue = sortBy.toLowerCase();
    let result = [];
    if(sortByValue === 'status') {
        result = data.sort(function(a, b) {
            if(a.status === "" || a.status === null) return 1;
            if(b.status === "" || b.status === null) return -1;
            if(a.status === b.status) return 0;
            return direction === 'asc' ? (a.status < b.status ? -1 : 1) : (a.status < b.status ? 1 : -1);
        });
    } else  {
        result = data.sort((a,b) => {
            let firstValue, secondValue;
            if(sortByValue === 'created') {
                firstValue = new Date(a.created);
                secondValue = new Date(b.created);
            }
            if(sortByValue === 'uptime') {
                firstValue = a.uptime;
                secondValue = b.uptime;
            }
            return direction === 'asc' ? firstValue - secondValue : secondValue - firstValue;
        });
    }
    filteredAndSortedData = result;
    return {
        direction,
        result
    }
}

const filterData = (data, str) => {
    const searchValue = str.toLowerCase();
    const result = data.filter(server=> {
        const cpuString = server.stats?.cpu + "%";
        if (server.serverName.toLowerCase().includes(searchValue) ||
            server.status?.toLowerCase().includes(searchValue)||
            cpuString.includes(searchValue) ) {
            return true
        }
    })
    filteredAndSortedData = result;
    return result;
}

const appReducer = (state = { data: [], page: 1, sortedDir: '', sortedBy: '', filterBy: '' }, action={}) => {
    switch(action.type){
        case UPDATE_SERVER_DATA: {
            const { data: { data }, filterBy, sortBy } = action.payload;
            const { result, direction } = getIntialData(data, filterBy, sortBy);
            const displayData = calculateDisplayData(result, 1);
            return { ...state, data, displayData, currentPage: 1, totalCount: result.length, sortedDir: direction, sortedBy: sortBy || '', filterBy: filterBy || '' }
        }
        case UPDATE_PAGINATION: {
            return { ...state, currentPage: action.page, displayData: calculateDisplayData(filteredAndSortedData, action.page) }
        }
        case SORT_DATA: {
            const { result, direction } = sortData(filteredAndSortedData, action.value, state.sortedDir);
            const displayData = calculateDisplayData(result, 1);
            return { ...state, currentPage: 1, displayData, sortedDir: direction, sortedBy: action.value, totalCount: result.length }
        }
        case FILTER_DATA: {
            let finalData = [];
            finalData = filterData(state.data, action.value);
            if(state.sortedBy) {
                const { result } = sortData(finalData, state.sortedBy, state.sortedDir);
                finalData = result;
            }
            const displayData = calculateDisplayData(finalData, 1);
            return {...state, displayData, currentPage: 1, totalCount: finalData.length, filterBy: action.value }
        }
        default:
            return state;
    }
};

export default appReducer;