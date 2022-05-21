import styled from "styled-components";

export const TableContainer = styled.table`
    width: 100%;
	margin: 0 0 2em;
    border: 2px solid #dcdcdc;
`;

export const TableCaption = styled.caption`
	padding: 30px 0;
	font-size: 1.2rem;
	font-weight: 600;
`;

export const TableHead = styled.thead`
	border-bottom: 3px solid #ddd;
	background: #ededed;
`;
export const TableBody = styled.tbody`
	border-bottom: 3px solid #ddd;
`;
export const TableRow = styled.tr`
	text-align: center;
    &:nth-child(even) {
        background-color: #ededed;
    }
`;

export const TableColumn = styled.td`
    padding: 10px 0;
    text-transform: capitalize;
`;

export const TableHeadColumn = styled.th`
    padding: 10px 0;
`;

export const SortButton = styled.button`
    border: 1px solid white;
    border-radius: 2px;
    margin-left: 5px;
    padding: 1px 8px;
    background: ${(props) => props.sorted ?  '#A9A9A9' : ''};
`;

export const Notification = styled.p`
    text-align: center;
    margin: 30px;
    font-size: 20px;
`;

export const Utilization = styled.p`
    margin: 4px 0;
`;