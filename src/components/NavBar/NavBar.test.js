import React from 'react';
import NavBar from './NavBar';
import { shallow } from 'enzyme';

describe('NavBar', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<NavBar />);
	});

	it('App should match snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
