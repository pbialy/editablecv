import React from 'react';

import ValueField from '~/js/components/commons/ValueField.jsx';

class ExpDataRow extends React.Component {

    render() {
		const { dateFrom, dateTo, position, tasks } = this.props.exp;
        return (
			<div>
				<div className={'datesForExp'}>
					<ValueField classes={'valCol date'} val={dateFrom} />
					<div className={'dateDash'}>-</div>
					<ValueField classes={'valCol date'} val={dateTo} />
				</div>
				<ValueField classes={'valCol position'} val={position} />
				<ul className={'tasks'}>
				<br />
			{tasks.map((task, j) => (
				<li key={j}>
					<ValueField classes={'valCol task'} val={task} />
					<br />
				</li>
			))}
				</ul>
			</div>
        )
    }
}

export default ExpDataRow
