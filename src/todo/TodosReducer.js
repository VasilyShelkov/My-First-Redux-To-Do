const TodosReducer = (state = [], action) => {
	switch(action.type) {
		case 'ADD_TODO':
			return [
				...state,
				TodoReducer(undefined, action),
			];
		case 'TOGGLE_TODO_COMPLETED':
			return state.map(t => TodoReducer(t, action));
		default:
			return state;
	};
}

const TodoReducer = (state, action) => {
	switch(action.type) {
		case 'ADD_TODO':
			return {
				id: action.id,
				text: action.text,
				completed: false
			};
		case 'TOGGLE_TODO_COMPLETED':
			if (state.id !== action.id){
				return state;
			}

			return {
				...state,
				completed: !state.completed
			};
		default:
			return state;
	}
}

export default TodosReducer;