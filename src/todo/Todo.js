import React, { Component } from 'react';
import { combineReducers } from 'redux';
import TodosReducer from './TodosReducer';
import VisibilityFilter from './TodoVisibilityFilterReducer';

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
};

const TodoApp = combineReducers({
	todos: TodosReducer,
	visibilityfilter: VisibilityFilter
})

export default Todo;