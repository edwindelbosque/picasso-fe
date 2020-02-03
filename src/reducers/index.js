import { combineReducers } from 'redux';
import { lockedColors } from './lockedColors';
import { userId } from './userId';
import { colors } from './colors';

const rootReducer = combineReducers({
	lockedColors,
	userId,
	colors
});

export default rootReducer;
