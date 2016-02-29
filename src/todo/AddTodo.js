import React, { Component } from 'react';
import { connect } from 'react-redux';

let nextToDoId = 0;
const addTodo = (text) => {
	return {
		type: 'ADD_TODO',
		id: nextToDoId++,
		text
	}
}

let AddTodo = ({ dispatch}) => {
	let todoName;

	return (
		<div>
			<input ref={node => {
				todoName = node;
			}} />
			
			<button onClick={() => {
				dispatch(addTodo(todoName.value));
				todoName.value='';
			}}>
				Add Todo
			</button>
		</div>
	);
};
AddTodo = connect()(AddTodo);

export default AddTodo;