export const username = (state = '', action) => {
	switch (action.type) {
		case 'UPDATE_USERNAME':
			return action.name;
		default:
			return state;
	}
};
