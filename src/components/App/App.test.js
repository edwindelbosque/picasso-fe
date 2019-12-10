import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<App />);
	});

	it.skip('App should match snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
