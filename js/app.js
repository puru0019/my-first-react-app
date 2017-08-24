import React from 'react';
import ReactDOM from 'react-dom';
import TableButton from '../components/TableButton.js';
import Table from '../components/Table.js';
import { Grid,Row,Col } from 'react-bootstrap';
import '../css/app.css';
import '../css/utility.css'

var tableData =
{
  "buttonLabels":{"addButton":"Add","deleteButton":"Delete","editButton":"Edit"},
  "tableHeader":{"monthLabel":"Month","expenseLabel":"Expenses","actionLabel":"Action"},
  "data":[
      {
      "Month":"January",
      "Expenses":21
      },
      {
      "Month":"March",
      "Expenses":27
      },
      {
      "Month":"April",
      "Expenses":25
      },
  ]
};

const Hello = () => {
  return (
    <div>
      <Gridcontainer />
    </div>
  )
}

const SectionHeader = (props) => {
  return (
    <div className="section-header">
      <h4>{props.text}</h4>
    </div>
  )
}

const Gridcontainer = () => {
  const tableButtonLabel = tableData.buttonLabels;
  return (
    <Grid className="marginLarge">
      <Row>
        <Col xs={12}>
          <TableButton text={tableButtonLabel.addButton}/>
        </Col>
        <Col xs={12}>
          <Table content={tableData}/>
        </Col>
      </Row>
    </Grid>
  )
}

ReactDOM.render(
  <Hello />,
  document.getElementById('mount')
);
