import React from 'react';
import Catalogs from './Catalogs';
import { shallow } from 'enzyme';

describe('Catalogs', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Catalogs />);
	});

	it('App should match snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
