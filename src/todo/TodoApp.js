import React, { Component } from 'react';
import { store } from '../index';

let nextToDoId = 0;

class TodoApp extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
				<input ref={node => {
					this.todoName = node;
				}} />
				
				<button onClick={() => {
					store.dispatch({
						type: 'ADD_TODO',
						text: this.todoName.value,
						id: nextToDoId++
					})
					this.todoName.value = '';
				}}>
					Add Todo
				</button>

				<ul>
					{this.props.todos.map(todo => 
						<li key={todo.id} onClick={() => {
							console.log(todo.id);
							store.dispatch({
								type: 'TOGGLE_TODO_COMPLETED',
								id: todo.id
							})
						}}>
							{todo.completed ? todo.text:<strike>{todo.text}</strike>}
						</li>
					)}
				</ul>
			</div>
		);
	}
};


export default TodoApp;