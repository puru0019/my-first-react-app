import React from 'react';
import ReactDOM from 'react-dom';


const Hello = () => {
  return (
    <h1>This is react Application</h1>
  )
}

ReactDOM.render(
  <Hello />,
  document.getElementById('mount')
);
