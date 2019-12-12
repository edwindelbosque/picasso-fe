import React from 'react';
import './SaveMenu.scss';

const SaveMenu = ({ catalogs, closeSaveMenu, showSaveMenu, postPalette }) => {
	const catalogList = catalogs.map(catalog => {
		return (
			<li onClick={() => savePalette(catalog.id)}>{catalog.catalogName}</li>
		);
	});

	const savePalette = id => {
		postPalette(id);
		closeSaveMenu();
	};

	return (
		<div className={`SaveMenu ${showSaveMenu ? 'showSaveMenu' : ''}`}>
			<h3>Catalogs</h3>
			<ul>{catalogList}</ul>
			<h4>Or create a new catalog</h4>
			<input type='text' placeholder='New Catalog' />
			<button>Create & Save</button>
		</div>
	);
};

export default SaveMenu;
