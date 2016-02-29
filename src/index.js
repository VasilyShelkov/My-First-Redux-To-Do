import ReactDOM from 'react-dom';
import React from 'react';
import TodoApp from './todo/TodoApp.js';
import { combineReducers, createStore } from 'redux';
import todos from './todo/TodosReducer';
import visibilityFilter from './todo/TodoVisibilityFilterReducer';

const todoApp = combineReducers({
	todos,
	visibilityFilter
});

export const store = createStore(todoApp);

const render = () => {
	ReactDOM.render(<TodoApp {...store.getState()} />, 
		document.getElementById('app')
	);
}

store.subscribe(render);
render();