import { combineReducers } from 'redux';
import { lockedColors } from './lockedColors';
import { userId } from './userId';
import { colors } from './colors';
import { username } from './username';
import { catalogs } from './catalogs';
import { palettes } from './palettes';
import { isMenuOpen } from './isMenuOpen';
import { isSaveMenuOpen } from './isSaveMenuOpen';

const rootReducer = combineReducers({
	lockedColors,
	userId,
	colors,
	username,
	catalogs,
	palettes,
	isMenuOpen,
	isSaveMenuOpen
});

export default rootReducer;
