import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import Filters from './components/Filters';
import Pagination from './components/Pagination';
import Table from './components/Table';
import Loader from './components/Loader';
import Notification from './components/Notification';
import { API } from './constants';
import { Wrapper, OperationsContainer } from './App.style';

import { updateServerData } from './redux/actions';

const App = () => {

    const [serverData, setServerData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState("");

    const dispatch = useDispatch();

    const fetchServerData = async (filterBy, sortBy)=>{
        const response = await fetch(API);
        try {
            const data = await response.json();
            setServerData(data);
            setLoading(false);
            if(data.data) {
                dispatch(updateServerData({ data, filterBy, sortBy }));
            }
        } catch(error){
            setErrorMsg(error.message);
        }
    }

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const filterBy = params.get('filterBy');
        const sortBy = params.get('sortBy');
        fetchServerData(filterBy, sortBy);
    }, []);

  return (
    <Wrapper>
        { loading ? <Loader /> : 
            <BrowserRouter>
            { serverData.data ? 
                <>
                    <OperationsContainer>
                        <Filters />
                        <Pagination />
                    </OperationsContainer>
                    <Table /> 
                </>:
                <Notification>{serverData.message || errorMsg }</Notification>
            }
            </BrowserRouter>
        }
    </Wrapper>
  )
}

export default App