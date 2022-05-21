import styled from "styled-components";

export const PaginationContainer = styled.ul`
    display:flex;
    justify-content:flex-end;
    list-style:none;
    margin: 0;
`;

export const PaginationNum = styled.li`
    margin: 0 2px;
`;
export const Paginationitem = styled.button`
    background: none;
    border: 1px solid;
    border-radius: 2px;
    padding: 5px;
    cursor: pointer;
    background: ${(props) => props.active ?  '#A9A9A9' : ''};
`;