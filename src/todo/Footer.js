import React, { Component } from 'react';
import FilterLink from './FilterLink';

class Footer extends Component {
	render() {
		return (
			<p>
				Show:
				{' '}
				<FilterLink filter="SHOW_ALL"
					currentFilter={this.props.visibilityFilter}
					onClick={this.props.onFilterClick}>
					All
				</FilterLink>
				{' '}
				<FilterLink filter="SHOW_ACTIVE"
					currentFilter={this.props.visibilityFilter}
					onClick={this.props.onFilterClick}>
					Active
				</FilterLink>
				{' '}
				<FilterLink filter="SHOW_COMPLETED"
					currentFilter={this.props.visibilityFilter}
					onClick={this.props.onFilterClick}>
					Completed
				</FilterLink>
			</p>
		);
	}
}

export default Footer;