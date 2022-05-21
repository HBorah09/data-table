export const API = "https://ionos-frontend.netlify.app/.netlify/functions/servers";

export const TABLE_HEADERS = [{
    label: 'Server Name',
    id: 'serverName'
    }, {
    label: 'Location',
    id: 'location'
    },{
    label: 'IPv4',
    id: 'ipv4'
    },{
    label: 'Uptime (Days)',
    id: 'uptime',
    sort: true,
    },{
    label: 'Status',
    id: 'status',
    sort: true,
    }, {
    label: 'Stats',
    id: 'stats'
    },{
    label: 'Created',
    id: 'created',
    sort: true,
  }];
export const TABLE_HEADING = 'Servers Overview';

export const DATA_PER_PAGE = 40;

export const UPDATE_SERVER_DATA = 'UPDATE_SERVER_DATA';
export const UPDATE_PAGINATION = 'UPDATE_PAGINATION';
export const SORT_DATA = 'SORT_DATA';
export const FILTER_DATA = 'FILTER_DATA';

export const FILTERS = [{
  label: 'Server Name',
  id: 'serverName'
  }, {
  label: 'Status',
  id: 'status'
  },{
  label: 'CPU Utilization',
  id: 'utilization'
  }];