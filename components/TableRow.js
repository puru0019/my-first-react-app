import React from 'react';
import ReactDOM from 'react-dom';
import TableColumn from './TableColumn'
import TableHead from './TableHead';
import TableButton from './TableButton';

const TableRow = ({ rowData }) => {
  return (
  	<tr>
  		{
  			Object.keys(rowData).map(function(key, index) {
  				return <TableColumn cellData={rowData[key]} key={index} />
			})
		}
		<td>
			<TableButton text='Edit' buttonStyle='info'/>
			<TableButton text='Delete' buttonStyle='danger' rowClass='mlm'/>
		</td>
  	</tr>
  );
}

export default TableRow;
