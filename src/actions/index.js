export const updateLocks = (i, color) => ({
	type: 'UPDATE_LOCKS',
	i,
	color
});

export const updateUserId = id => ({
	type: 'UPDATE_USER_ID',
	id
});

export const updateColors = colors => ({
	type: 'UPDATE_COLORS',
	colors
});

export const updateUsername = name => ({
	type: 'UPDATE_USERNAME',
	name
});

export const updateCatalogs = catalogs => ({
	type: 'UPDATE_CATALOGS',
	catalogs
});

export const updatePalettes = palettes => ({
	type: 'UPDATE_PALETTES',
	palettes
});

export const toggleMenu = boolean => ({
	type: 'TOGGLE_MENU',
	boolean
});

export const toggleSaveMenu = boolean => ({
	type: 'TOGGLE_SAVE_MENU',
	boolean
});
