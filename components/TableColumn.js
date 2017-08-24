import React from 'react';
import ReactDOM from 'react-dom';
import TableButton from './TableButton.js';
const TableColumn = ({ cellData }) => {
  return (
  	<td>{cellData}</td>
  )
}

export default TableColumn;
