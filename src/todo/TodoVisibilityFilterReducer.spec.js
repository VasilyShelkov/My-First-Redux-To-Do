import expect from 'expect';
import deepFreeze from 'deep-freeze';
import TodoVisibilityFilterReducer from './TodoVisibilityFilterReducer'

describe(TodoVisibilityFilterReducer, () => {
	it('should Change Visibility Filter', () => {
		const stateBefore = 'SHOW_ALL';
		const action = {
			type: 'SET_VISIBILITY_FILTER',
			filter: 'SHOW_COMPLETED'
		};

		const stateAfter = 'SHOW_COMPLETED';
		
		deepFreeze(stateBefore);
		deepFreeze(action);

		expect(TodoVisibilityFilterReducer(stateBefore, action)).toEqual(stateAfter);
	});
});