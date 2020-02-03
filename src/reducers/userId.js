export const userId = (state = 0, action) => {
	switch (action.type) {
		case 'UPDATE_USER_ID':
			return action.id;
		default:
			return state;
	}
};
