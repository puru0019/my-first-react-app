import React from 'react';
import ReactDOM from 'react-dom';
import TableButton from '../components/TableButton.js';
import TableComponent from '../components/Table.js';
import { Grid,Row,Col } from 'react-bootstrap';
// import '../css/app.css';
// import '../css/utility.css'

import tableData from './data';

const App = () => (
  <div>
    <h1>Table Example</h1>
    <TableComponent content={tableData} />
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('mount')
);
