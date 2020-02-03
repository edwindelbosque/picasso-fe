import React, { useState } from 'react';
import './SaveMenu.scss';
import { saveCatalog } from '../../util/apiCalls';
import { useSelector, useDispatch } from 'react-redux';
import { getPalettes, getCatalogs } from '../../util/apiCalls';

const SaveMenu = ({ postPalette }) => {
	const dispatch = useDispatch();
	const userId = useSelector(state => state.userId);
	const catalogs = useSelector(state => state.catalogs);
	const isSaveMenuOpen = useSelector(state => state.isSaveMenuOpen);

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
		dispatch({ type: 'TOGGLE_SAVE_MENU', boolean: false });
	};

	const handleClick = async () => {
		const newCatalog = { user_id: userId, catalogName: catalogName };
		const response = await saveCatalog(newCatalog);
		const data = await response.json();
		await fetchCatalogs({ id: userId });
		await postPalette(data.id);
		await fetchPalettes();
		dispatch({ type: 'TOGGLE_SAVE_MENU', boolean: false });
	};

	const fetchPalettes = async (cats = catalogs) => {
		if (cats.length) {
			const allPalettes = catalogs.map(async catalog => {
				return await getPalettes(catalog);
			});
			const allResolvedPalettes = await Promise.all(allPalettes);
			dispatch({
				type: 'UPDATE_PALETTES',
				palettes: allResolvedPalettes.flat()
			});
		}
	};

	const fetchCatalogs = async (id = { id: userId }) => {
		const newCatalogs = await getCatalogs(id);
		dispatch({ type: 'UPDATE_CATALOGS', catalogs: newCatalogs });
	};

	return (
		<div className={`SaveMenu ${isSaveMenuOpen ? 'showSaveMenu' : ''}`}>
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
