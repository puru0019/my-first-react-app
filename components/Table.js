import React from 'react';
import ReactDOM from 'react-dom';
import TableHead from './TableHead.js';
import TableRow from './TableRow.js';

const Table = (props) => {
  //console.log(props.content.tableHeader);
  const tableHeaderContent = props.content.tableHeader;
  const tableRowContent = props.content.data;
  return (
    <table className="table expensesTable mtl">
      <TableHead headerContent={tableHeaderContent}/>
      <TableRow rowContent={tableRowContent}/>
    </table>
  )
}

export default Table;
