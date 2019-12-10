import React from 'react';
import PaletteCard from './PaletteCard';
import { shallow } from 'enzyme';

describe('PaletteCard', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<PaletteCard />);
	});

	it('App should match snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
