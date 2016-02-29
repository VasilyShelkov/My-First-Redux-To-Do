import expect from 'expect';
import expectJSX from 'expect-jsx';
import TestUtils from 'react-addons-test-utils';
import React from 'react';
import TodoApp from './TodoApp'
// expect.extend(expectJSX);

// describe(TodoApp, () => {
// 	it('should render', () => {
// 		const renderer = TestUtils.createRenderer();
// 		renderer.render(<TodoApp text="test"/>);
		
// 		const actual = renderer.getRenderOutput();
// 		const expected = <div>Welcome to the React-Hot-Dev-Starter-Kit test</div>;
		
// 		expect(actual).toIncludeJSX(expected);
// 	});
// });