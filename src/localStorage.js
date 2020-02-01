export const loadState = () => {
	try {
		const stringifiedState = localStorage.getItem('state');
		if (stringifiedState === null) {
			return undefined;
		}
		return JSON.parse(stringifiedState);
	} catch (error) {
		return undefined;
	}
};

export const saveState = state => {
	try {
		const stringifiedState = JSON.stringify(state);
		localStorage.setItem('state', stringifiedState);
	} catch (error) {
		console.log(error);
	}
};
