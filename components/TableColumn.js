import React from 'react';
import ReactDOM from 'react-dom';
import TableButton from './TableButton.js';
const TableColumn = (props) => {

  return (

          <tr>
            <td>{props.tableContent.Month}</td>
            <td>{props.tableContent.Expenses}</td>
            <TableButton text="Edit"/>
            <TableButton text="Delete"/>
          </tr>

  )
}

export default TableColumn;
