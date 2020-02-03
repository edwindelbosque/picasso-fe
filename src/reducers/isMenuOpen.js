export const isMenuOpen = (state = false, action) => {
	switch (action.type) {
		case 'TOGGLE_MENU':
			return action.boolean;
		default:
			return state;
	}
};
