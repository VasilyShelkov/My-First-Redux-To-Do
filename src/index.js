import ReactDOM from 'react-dom';
import React from 'react';
import TodoApp from './todo/TodoApp.js';
import { combineReducers, createStore } from 'redux';
import TodosReducer from './todo/TodosReducer';
import VisibilityFilter from './todo/TodoVisibilityFilterReducer';

const todoApp = combineReducers({
	todos: TodosReducer,
	visibilityFilter: VisibilityFilter
})

export const store = createStore(todoApp);

const render = () => {
	ReactDOM.render(<TodoApp todos={store.getState().todos} />, 
		document.getElementById('app')
	);
}

store.subscribe(render);
render();