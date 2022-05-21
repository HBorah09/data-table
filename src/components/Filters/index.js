import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterData } from '../../redux/actions';
import { useHistory } from "react-router-dom";
import { Input } from './style';

const Filters = () => {
  const filterBy = useSelector((state) => state.filterBy);
  const sortedBy = useSelector((state) => state.sortedBy);

  const [searchStr, setSearchStr] = useState(filterBy);

  const dispatch = useDispatch();
  let history = useHistory();

  const handleSearch = str => {
    history.push(`/?sortBy=${sortedBy}&filterBy=${str}`);
    setSearchStr(str);
    dispatch(filterData(str));
  }
  return (
    <div>
      <label htmlFor="search">Search table for Server Name, Status, CPU Utilization: </label>
      <Input id="search" type="text" placeholder="Enter value here" value={searchStr} onChange={e => handleSearch(e.target.value)} />
    </div>
  )
}

export default Filters