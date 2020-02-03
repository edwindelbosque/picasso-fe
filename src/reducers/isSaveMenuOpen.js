export const isSaveMenuOpen = (state = false, action) => {
	switch (action.type) {
		case 'TOGGLE_SAVE_MENU':
			return action.boolean;
		default:
			return state;
	}
};
