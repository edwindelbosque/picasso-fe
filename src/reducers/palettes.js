export const palettes = (state = [], action) => {
	switch (action.type) {
		case 'UPDATE_PALETTES':
			return action.palettes;
		default:
			return state;
	}
};
