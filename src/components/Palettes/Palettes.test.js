import React from 'react';
import Palettes from './Palettes';
import { shallow } from 'enzyme';

describe('Palettes', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Palettes />);
	});

	it('App should match snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
