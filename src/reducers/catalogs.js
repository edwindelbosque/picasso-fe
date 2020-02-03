export const catalogs = (state = [], action) => {
	switch (action.type) {
		case 'UPDATE_CATALOGS':
			return action.catalogs;
		default:
			return state;
	}
};
