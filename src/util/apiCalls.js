import { cleanColorName } from './cleanerFunctions.js';

export const createUser = async newUser => {
	const url = 'https://picasso-database.herokuapp.com/api/v1/users';
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(newUser)
	};

	const response = await fetch(url, options);
	if (!response.ok) {
		return response;
	}
	return response.json();
};

export const createPalette = async newPalette => {
	const { catalog_id, user_id, paletteName, colorsToString } = newPalette;
	let colors = JSON.stringify(colorsToString);
	const newPaletteForDB = { catalog_id, paletteName, colors };
	const url = `https://picasso-database.herokuapp.com/api/v1/users/${user_id}/catalogs/${catalog_id}/palettes`;
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(newPaletteForDB)
	};
	const response = await fetch(url, options);
	if (!response.ok) {
		return response;
	}
	return response.json();
};

export const savePalette = async newPalette => {
	const { catalogId, id } = newPalette;
	const url = `https://picasso-database.herokuapp.com/api/v1/users/0/catalogs/${catalogId}/palettes/${id}`;
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
	const { user_id } = newCatalog;
	const url = `https://picasso-database.herokuapp.com/api/v1/users/${user_id}/catalogs`;
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
	return response;
};

export const getCatalogs = async userInfo => {
	const { id } = userInfo;
	const url = `https://picasso-database.herokuapp.com/api/v1/users/${id}/catalogs`;
	const response = await fetch(url);
	const catalogs = response.json();
	if (!response.ok) {
		return response;
	}
	return catalogs;
};

export const getCatalog = async catalogInfo => {
	const { userId, id, catalogName } = catalogInfo;
	const url = `https://picasso-database.herokuapp.com/api/v1/users/${userId}/catalogs/${id}`;
	const response = await fetch(url);
	const catalog = response.json();
	if (!response.ok) {
		throw new Error(
			`Your catalog "${catalogName}" could not be retrieved at this time. :(`
		);
	}
	return catalog;
};

export const getPalettes = async catalogInfo => {
	const { user_id, id } = catalogInfo;
	const url = `https://picasso-database.herokuapp.com/api/v1/users/${user_id}/catalogs/${id}/palettes`;
	const response = await fetch(url);
	const palettes = response.json();
	if (!response.ok) {
		return palettes;
	}
	return palettes;
};

export const getPalette = async paletteInfo => {
	const { catalogId, id, paletteName } = paletteInfo;
	const url = `https://picasso-database.herokuapp.com/api/v1/users/0/catalogs/${catalogId}/palettes/${id}`;
	const response = await fetch(url);
	const palette = response.json();
	if (!response.ok) {
		throw new Error(
			`Your palette "${paletteName}" could not be retrieved at this time. :(`
		);
	}
	return palette;
};

export const delettePalette = async paletteInfo => {
	const { catalog_id, id } = paletteInfo;
	const url = `https://picasso-database.herokuapp.com/api/v1/users/0/catalogs/${catalog_id}/palettes/${id}`;
	const options = {
		method: 'DELETE'
	};

	const response = await fetch(url, options);
	if (!response.ok) {
		throw new Error('Catalog could not be saved at this time.');
	}
	return response.json();
};

export const deleteCatalog = async catalogInfo => {
	const { user_id, id } = catalogInfo;
	const url = `https://picasso-database.herokuapp.com/api/v1/users/${user_id}/catalogs/${id}`;
	const options = {
		method: 'DELETE'
	};

	const response = await fetch(url, options);
	if (!response.ok) {
		throw new Error('Catalog could not be removed at this time.');
	}
	return response.json();
};

export const userLogin = async userLogin => {
	const url = 'https://picasso-database.herokuapp.com/api/v1/login';
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(userLogin)
	};
	const response = await fetch(url, options);

	if (!response.ok) {
		return response;
	}
	return response.json();
};

export const colorFormats = async rgbColors => {
	const response = await fetch(
		`https://www.thecolorapi.com/id?format=string&rgb=${rgbColors[0]},${rgbColors[1]},${rgbColors[2]}`
	);
	const colorInfo = response.json();
	return colorInfo;
};

export const getFiveColors = (dispatch, colorsRequest, model = 'default') => {
	const url = 'http://colormind.io/api/';
	const data = {
		model: model
	};
	if (colorsRequest) {
		data.input = colorsRequest;
	}
	var http = new XMLHttpRequest();
	http.onreadystatechange = async () => {
		if (http.readyState === 4 && http.status === 200) {
			var palettes = await JSON.parse(http.responseText).result;
			cleanColorName(dispatch, palettes);
		}
	};
	http.open('POST', url, true);
	http.send(JSON.stringify(data));
};
