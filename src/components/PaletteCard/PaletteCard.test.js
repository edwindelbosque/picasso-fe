import React from 'react';
import PaletteCard from './PaletteCard';
import { shallow } from 'enzyme';

describe('PaletteCard', () => {
	let wrapper;

	let palette = {
		id: 1,
		catalogName: 'Personal',
		user_id: 1,
		colors: [{ hex: 'green' }]
	};

	beforeEach(() => {
		wrapper = shallow(<PaletteCard palette={palette} />);
	});

	it('App should match snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
