import React from 'react';
import ReactDOM from 'react-dom';
import TableHead from './TableHead.js';
import TableRow from './TableRow.js';

class Table extends React.Component {

	render() {
		const renderTableRows = this.props.content.data.map((row, index) => {
			return <TableRow rowData={row} key={index} />
		})
		return (
			<table className="table expensesTable mtl">
				<TableHead headerProps={this.props.content.tableHeader} />
				<tbody>
					{renderTableRows}
				</tbody>
			</table>
		)
	}
}

export default Table;
