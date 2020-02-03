import { combineReducers } from 'redux';
import { lockedColors } from './lockedColors';
import { userId } from './userId';
import { colors } from './colors';
import { username } from './username';

const rootReducer = combineReducers({
	lockedColors,
	userId,
	colors,
	username
});

export default rootReducer;
