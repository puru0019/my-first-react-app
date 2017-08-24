import React from 'react';
import ReactDOM from 'react-dom';

const TableHead = ({ headerProps }) => {
  return (
    <thead>
      <tr>
        <th>{headerProps.monthLabel}</th>
        <th>{headerProps.expenseLabel}</th>
        <th>{headerProps.actionLabel}</th>
      </tr>
    </thead>
  )
}

export default TableHead;
