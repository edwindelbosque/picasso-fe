import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
jest.mock('react-redux', () => ({
	useDispatch: () => {}
}));

describe('App', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<App />);
	});

	it('App should match snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
