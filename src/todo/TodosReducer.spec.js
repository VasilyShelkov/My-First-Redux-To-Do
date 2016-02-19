import expect from 'expect';
import TodosReducer from './TodosReducer';
import deepFreeze from 'deep-freeze';

describe(TodosReducer, () => {
	it('should add todo correctly', () => {
		const stateBefore = [];
		const action = {
			type: 'ADD_TODO',
			id: 0,
			text: 'Learn Redux',
		};

		const stateAfter = [{
			id: 0,
			text: 'Learn Redux',
			completed: false,
		}];
		
		deepFreeze(stateBefore);
		deepFreeze(action);

		expect(TodosReducer(stateBefore, action)).toEqual(stateAfter);
	});

	it('should toggle todo complete', () => {
		const stateBefore = [{
			id: 0,
			text: 'Learn Redux',
			completed: false,
		},
		{
			id: 1,
			text: 'Go Shopping',
			completed: false,
		}];

		const action = {
			type: 'TOGGLE_TODO_COMPLETED',
			id: 1,
		};

		const stateAfter = [{
			id: 0,
			text: 'Learn Redux',
			completed: false,
		},
		{
			id: 1,
			text: 'Go Shopping',
			completed: true,
		}];

		deepFreeze(stateBefore);
		deepFreeze(action);

		expect(TodosReducer(stateBefore, action)).toEqual(stateAfter);
	});
}); 