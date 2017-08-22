import React from 'react';
import ReactDOM from 'react-dom';
import { Grid,Row,Col } from 'react-bootstrap';
import '../css/app.css';
import '../css/utility.css'


const Hello = () => {
  return (
    <div>
      <Gridcontainer />
    </div>
  )
}

const Gridcontainer = () => {
  return (
    <Grid className="marginLarge">
      <Row>
        <Col xs={12}>Display Content Here</Col>
      </Row>
    </Grid>
  )
}

ReactDOM.render(
  <Hello />,
  document.getElementById('mount')
);
