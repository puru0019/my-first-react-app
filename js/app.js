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
    console.log(this.props);
    //this.state = tableData;
    this.state = {isOpen:false, tableRowdata: { Month:'', Expenses:'' },tableData:tableData};
    console.log(this.state);
    this.hideModal = this._hideModal.bind(this);
    this.openModal = this._openModal.bind(this);
    this.addRow = this._addRow.bind(this);
    this.updateRow = this._updateRow.bind(this);
    this.onRowAdd = this._onRowAdd.bind(this);
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
  _onRowAdd(e) {
    const currentState = this.state;
    const field = e.target.name;
    const formRow = this.state.tableRowdata;
	  formRow[field] = e.target.value;
    this.setState({ tableRowdata:formRow });
  }
  _updateRow () {
    const finalValue = this.state.tableData;
    const tablerowStatus = finalValue.data.push(this.state.tableRowdata);
    const finaltableRowData = {Month:'',Expenses:''};
    this.setState({
      isOpen:false,
      tableRowdata:finaltableRowData,
      tableData:finalValue
    });
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h1>Table Example</h1>
              <TableComponent content={this.state.tableData} />
              <div className="mtl">
                <TableButton buttonStyle='success' text='Add' handleClick={this.addRow}/>
              </div>
            </div>
          </div>
          <CustomModal isOpen={this.state.isOpen} onRequestHide={this.hideModal} onUpdate={this.updateRow} handleChange={this.onRowAdd} handleData={this.state.tableRowdata}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('mount')
);
