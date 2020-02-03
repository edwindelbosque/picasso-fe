import React from 'react';
import SignUpForm from './SignUpForm';
import { shallow } from 'enzyme';
jest.mock('react-redux', () => ({
	useDispatch: () => {},
	useSelector: () => ({ catalogs: [{}, {}] })
}));

describe('SignUpForm', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<SignUpForm />);
	});

	it('App should match snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
