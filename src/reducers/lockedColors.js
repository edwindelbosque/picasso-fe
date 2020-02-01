export const lockedColors = (state = ['N', 'N', 'N', 'N', 'N'], action) => {
	switch (action.type) {
		case 'UPDATE_LOCKS':
			state[action.i] = action.color;
			return state;
		default:
			return state;
	}
};
