import React, { Component } from 'react';

class AddTodo extends Component {
	render() {
		var todoName;
		return (
			<div>
				<input ref={node => {
					todoName = node;
				}} />
				
				<button onClick={() => {
					this.props.onAddClick(todoName.value)
					todoName.value='';
				}}>
					Add Todo
				</button>
			</div>
		);
	}
}

export default AddTodo;