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
