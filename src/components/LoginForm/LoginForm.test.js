import React from 'react';
import LoginForm from './LoginForm';
import { shallow } from 'enzyme';
jest.mock('react-redux', () => ({
	useDispatch: () => {}
}));

describe('LoginForm', () => {
	let wrapper;
	const updateCurrentUser = jest.fn();
	const toggleMenu = jest.fn();

	beforeEach(() => {
		wrapper = shallow(
			<LoginForm
				updateCurrentUser={updateCurrentUser}
				toggleMenu={toggleMenu}
			/>
		);
	});

	it('App should match snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
