import React, { useState } from 'react';
import './SaveMenu.scss';
import { saveCatalog } from '../../util/apiCalls';
import { useSelector } from 'react-redux';

const SaveMenu = ({
	toggleSaveMenu,
	showSaveMenu,
	postPalette,
	fetchPalettes,
	fetchCatalogs
}) => {
	const userId = useSelector(state => state.userId);
	const catalogs = useSelector(state => state.catalogs);

	const showCatalogs = () => {
		return catalogs.map((catalog, i) => {
			return (
				<li key={i} onClick={() => savePalette(catalog.id)}>
					{catalog.catalogName}
				</li>
			);
		});
	};

	const [catalogName, updateInput] = useState('');

	const savePalette = async id => {
		await postPalette(id);
		await fetchPalettes();
		toggleSaveMenu(false);
	};

	const handleClick = async () => {
		const newCatalog = { user_id: userId, catalogName: catalogName };
		const response = await saveCatalog(newCatalog);
		const data = await response.json();
		await fetchCatalogs({ id: userId });
		await postPalette(data.id);
		await fetchPalettes();
		toggleSaveMenu(false);
	};

	return (
		<div className={`SaveMenu ${showSaveMenu ? 'showSaveMenu' : ''}`}>
			<h3>Catalogs</h3>
			<ul>{catalogs && catalogs.length && showCatalogs()}</ul>
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
