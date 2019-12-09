export const createUser = async newUser => {
	const url = 'http://localhost:3000/api/v1/users';
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(newUser)
	};

	const response = await fetch(url, options);
	if (!response.ok) {
		throw new Error('User could not be created at this time.');
	}
	return response.json();
};

export const savePalette = async newPalette => {
	const { catalogId, id } = newPalette;
	const url = `http://localhost:3000/api/v1/users/0/catalogs/${catalogId}/palettes/${id}`;
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(newPalette)
	};

	const response = await fetch(url, options);
	if (!response.ok) {
		throw new Error('Palette could not be saved at this time.');
	}
	return response.json();
};

export const saveCatalog = async newCatalog => {
	const { userId, id } = newCatalog;
	const url = `http://localhost:3000/api/v1/users/${userId}/catalogs/${id}`;
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(newCatalog)
	};

	const response = await fetch(url, options);
	if (!response.ok) {
		throw new Error('Catalog could not be saved at this time.');
	}
	return response.json();
};
