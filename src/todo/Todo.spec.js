import expect from 'expect';
import expectJSX from 'expect-jsx';
import TestUtils from 'react-addons-test-utils';
import React from 'react';
import Todo from './Todo'
expect.extend(expectJSX);

describe(Todo, () => {
	it('should render', () => {
		const renderer = TestUtils.createRenderer();
		renderer.render(<Todo text="test"/>);
		
		const actual = renderer.getRenderOutput();
		const expected = <div>Welcome to the React-Hot-Dev-Starter-Kit test</div>;
		
		expect(actual).toIncludeJSX(expected);
	});
});