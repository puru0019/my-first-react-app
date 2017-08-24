import React from 'react';
import ReactDOM from 'react-dom';

const TableHead = (props) => {
  console.log(props.headerContent);
  return (
    <thead>
      <tr>
        <th>{props.headerContent.monthLabel}</th>
        <th>{props.headerContent.expenseLabel}</th>
        <th>{props.headerContent.actionLabel}</th>
      </tr>
    </thead>
  )
}

export default TableHead;
