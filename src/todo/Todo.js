import React, { Component } from 'react';

class Todo extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
				Welcome to the React-Hot-Dev-Starter-Kit {this.props.text}
			</div>
		);
	}
}

export default Todo;