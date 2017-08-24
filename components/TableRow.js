import React from 'react';
import ReactDOM from 'react-dom';
import TableColumn from './TableColumn.js'
import TableHead from './TableHead.js';

const TableRow = (props) => {
  console.log(props.rowContent);
  return (
    <tbody>
      {props.rowContent.map((data) => {
          <TableColumn tableContent={data}/>
      })}
    </tbody>
  )
}

export default TableRow;
