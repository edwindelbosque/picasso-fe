import React from 'react';
import NavBar from './NavBar';
import { shallow } from 'enzyme';
jest.mock('react-redux', () => ({
	useDispatch: () => {},
	useSelector: () => ({
		NavBar: { isMenuOpen: false }
	})
}));

describe('NavBar', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<NavBar />);
	});

	it('App should match snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
