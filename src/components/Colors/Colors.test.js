import React from 'react';
import Colors from './Colors';
import { shallow } from 'enzyme';
jest.mock('react-redux', () => ({
	useDispatch: () => {},
	useSelector: () => ({ catalogs: [{}, {}] })
}));

describe('Colors', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Colors />);
	});

	it('App should match snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
