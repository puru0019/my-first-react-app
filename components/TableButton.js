import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'react-bootstrap';

class TableButton extends React.Component {
  constructor(props) {
      super(props)
      //this.addRow = this.addRow.bind(this);
  }

  render() {
    return (
      <Button bsStyle={this.props.buttonStyle} className={this.props.rowClass} onClick={this.props.handleClick}>{this.props.text}</Button>
    )
  }
}

export default TableButton;
