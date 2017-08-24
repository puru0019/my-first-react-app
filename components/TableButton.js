import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'react-bootstrap';

const TableButton = (props) => {
  console.log(props)
  return (
    <Button bsStyle="info">{props.text}</Button>
  )
}

export default TableButton;
