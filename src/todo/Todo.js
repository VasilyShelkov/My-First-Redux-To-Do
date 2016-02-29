import React, { Component } from 'react';

class Todo extends Component {
	render() {
		return (
			<li onClick={this.props.onClick}>
				{this.props.completed ? <strike>{this.props.text}</strike>:this.props.text}
			</li>
		);
	}
}

export default Todo;