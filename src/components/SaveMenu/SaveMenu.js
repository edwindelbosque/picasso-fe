import React, { useState } from 'react';
import './SaveMenu.scss';
import { saveCatalog } from '../../util/apiCalls';

const SaveMenu = ({
	catalogs,
	closeSaveMenu,
	showSaveMenu,
	postPalette,
	userID,
	fetchPalettes
}) => {
	const showCatalogs = () => {
		if (catalogs) {
			return catalogs.map(catalog => {
				return (
					<li
						onClick={() => {
							savePalette(catalog.id);
							fetchPalettes();
						}}>
						{catalog.catalogName}
					</li>
				);
			});
		}
	};

	const [catalogName, updateInput] = useState('');

	const savePalette = id => {
		postPalette(id);
		closeSaveMenu();
	};

	const handleClick = async () => {
		const newCatalog = { user_id: userID, catalogName: catalogName };
		await saveCatalog(newCatalog);
		// await savePalette(newPalette);
	};

	return (
		<div className={`SaveMenu ${showSaveMenu ? 'showSaveMenu' : ''}`}>
			<h3>Catalogs</h3>
			<ul>{showCatalogs()}</ul>
			<h4>Or create a new catalog</h4>
			<input
				value={catalogName}
				onChange={e => updateInput(e.target.value)}
				type='text'
				placeholder='New Catalog'
			/>
			<button onClick={handleClick}>Create & Save</button>
		</div>
	);
};

export default SaveMenu;
