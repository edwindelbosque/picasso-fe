import React from 'react';
import SaveMenu from './SaveMenu';
import { shallow } from 'enzyme';
jest.mock('react-redux', () => ({
	useDispatch: () => {},
	useSelector: () => ({ catalogs: [{}, {}] })
}));

describe('SaveMenu', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<SaveMenu />);
	});

	it('App should match snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
