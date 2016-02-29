import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux'
import todos from './todo/TodosReducer';
import visibilityFilter from './todo/TodoVisibilityFilterReducer';
import TodoApp from './todo/TodoApp';

const todoApp = combineReducers({
	todos,
	visibilityFilter
});

ReactDOM.render(
	<Provider store={createStore(todoApp)}> 
		<TodoApp /> 
	</Provider>,
	document.getElementById('app')
);