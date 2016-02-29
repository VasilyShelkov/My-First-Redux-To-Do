import React, { Component } from 'react';
import { store } from '../index';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

let nextToDoId = 0;

class TodoApp extends Component {
	constructor(props) {
		super(props);
	}
	
	getVisibleTodos(todos, filter) {
		switch (filter) {
			case 'SHOW_ALL':
				return todos;
			case 'SHOW_COMPLETED':
				return todos.filter(t => t.completed);
			case 'SHOW_ACTIVE':
				return todos.filter(t => !t.completed);
		}
	}

	render() {
		return(
			<div>
				<AddTodo onAddClick={text => {
									store.dispatch({
										type: 'ADD_TODO',
										id: nextToDoId++,
										text
									})}} />

				<TodoList todos={this.getVisibleTodos(
						this.props.todos,
						this.props.visibilityFilter
					)}
					onTodoClick={id =>
							store.dispatch({
								type: 'TOGGLE_TODO_COMPLETED',
								id
							})
					} />

				<Footer visibilityFilter={this.props.visibilityFilter} 
					onFilterClick={filter => 
						store.dispatch({
 						type: 'SET_VISIBILITY_FILTER',
 						filter
 					})
				}/>
			</div>
		);
	}

};


export default TodoApp;