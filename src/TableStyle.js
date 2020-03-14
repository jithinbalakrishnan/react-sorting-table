import styled from "styled-components";

const TableData = styled.td`
    font-weight: 400;
    font-size: 15px;
    vertical-align: middle;
    text-align: center;
    color: #67757e;
    padding: 10px 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const TableRow = styled.tr`
    box-shadow: inset 0px -1px 0px #cad3e3;
    vertical-align: baseline;
`;
const TableHead = styled.th`
    padding: 0px 24px 0px 24px;
    box-shadow: inset 0px -1px 0px #cad3e3;
    color: #67757e;
    font-weight: 500;
    font-size: 14px;
    position: relative;
    text-align: center;
`;
const ArrowContainer = styled.span`
    display: inline-flex;
    align-items: center;
    flex-direction: column;
    position: absolute;
    top: 10%;
    margin-left: 8px;

    & svg:hover {
        cursor: pointer;
    }
    & .up-arrow {
        margin-bottom: 2px;
        transform: rotate(180deg);
    }
`;
const TableHeadContainer = styled.thead`
    & tr {
        height: 40px;
    }
`;
const TableBody = styled.tbody`
    & tr {
        height: 48px;
    }
`;
const TableContainer = styled.div`
    padding: 16px;
    background: #ffffff;
    border-radius: 10px;
`;

const ArrowWrapper = styled.span`
    display: flex;
    height: 10px;
`;
const Table = styled.table`
    width: 100%;
    table-layout: fixed;
`;

export {
    TableData,
    TableRow,
    TableHead,
    ArrowWrapper,
    TableHeadContainer,
    TableBody,
    TableContainer,
    ArrowContainer,
    Table,
};
