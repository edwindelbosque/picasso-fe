import React from 'react';
import PaletteCreator from './PaletteCreator';
import { shallow } from 'enzyme';
jest.mock('react-redux', () => ({
	useDispatch: () => {},
	useSelector: () => ({ catalogs: [{}, {}] })
}));

describe('PaletteCreator', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<PaletteCreator />);
	});

	it('App should match snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
