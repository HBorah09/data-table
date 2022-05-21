import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { TABLE_HEADING, TABLE_HEADERS } from '../../constants';
import { TableContainer, TableCaption, TableHead, TableRow, TableBody, TableColumn, TableHeadColumn, SortButton, Notification, Utilization } from './style';
import { sortData } from '../../redux/actions';

const Table = () => {
  const serverData = useSelector((state) => state.displayData);
  const sortedBy = useSelector((state) => state.sortedBy);
  const sortedDir = useSelector((state) => state.sortedDir);
  const filterBy = useSelector((state) => state.filterBy);

  const dispatch = useDispatch();
  let history = useHistory();

  const handleSort = value => {
    history.push(`/?sortBy=${value}&filterBy=${filterBy}`);
    dispatch(sortData(value));
  }

  return (
      <>
      {serverData?.length ? 
      <TableContainer>
          <TableCaption>{TABLE_HEADING}</TableCaption>
          <TableHead>
              <TableRow>
                 {TABLE_HEADERS.map(header => (
                     <TableHeadColumn key={Math.random()}>
                         {header.label}
                         {header.sort && <> 
                            <SortButton sorted={sortedBy?.toLowerCase() === header.id} onClick={() => handleSort(header.id)}>
                                {sortedDir === 'asc' && sortedBy?.toLowerCase() === header.id ? <span>&#8593;</span>: <span>&#8595;</span>}
                            </SortButton>
                            </>}
                         </TableHeadColumn>
                 ))}
              </TableRow>
          </TableHead>
          <TableBody>
            {serverData.map((item, index)=>(
                <TableRow key={"row_"+index}>
                    <TableColumn>{item.serverName}</TableColumn>
                    <TableColumn>{item.location}</TableColumn>
                    <TableColumn>{item.ipv4}</TableColumn>
                    <TableColumn>{Math.floor(item.uptime / (3600*24))}</TableColumn>
                    <TableColumn>{item.status}</TableColumn>
                    <TableColumn>
                        <Utilization>{`CPU: ${item.stats.cpu}%`}</Utilization>
                        <Utilization>{`RAM: ${item.stats.ram}%`}</Utilization>
                        <Utilization>{`Disk: ${item.stats.disk}%`}</Utilization>
                    </TableColumn>
                    <TableColumn>{item.created}</TableColumn>
                </TableRow>
            ))}
          </TableBody>
      </TableContainer> : <Notification>No data!</Notification>}
      </>
  );
};

export default Table;
