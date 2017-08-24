import React from 'react';
import ReactDOM from 'react-dom';
import TableButton from '../components/TableButton';
import TableComponent from '../components/Table';
import { Grid,Row,Col } from 'react-bootstrap';
import CustomModal from '../components/CustomModal';
import '../css/app.css';
import '../css/utility.css'

import tableData from './data';

class App extends React.Component {
  constructor(props) {
    super(props);
    //this.state = tableData;
    this.state = {isOpen:false};
    this.hideModal = this._hideModal.bind(this);
    this.openModal = this._openModal.bind(this);
    this.addRow = this._addRow.bind(this);
  }
  _addRow () {
    this._openModal ();
  }
  _hideModal () {
    this.setState({
      isOpen:false
    })
  }
  _openModal () {
    this.setState({
      isOpen:true
    })
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h1>Table Example</h1>
              <TableComponent content={tableData} />
              <div className="mtl">
                <TableButton buttonStyle='success' text='Add' handleClick={this.addRow}/>
              </div>
            </div>
          </div>
          <CustomModal isOpen={this.state.isOpen} onRequestHide={this.hideModal}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('mount')
);
