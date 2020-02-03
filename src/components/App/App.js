import React, { useState } from 'react';
import './App.scss';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import RandomColors from '../RandomColor/RandomColor.js';
import { useSelector, useDispatch } from 'react-redux';
import { delettePalette, getPalettes, getCatalogs } from '../../util/apiCalls';

export const App = () => {
	const dispatch = useDispatch();
	const userId = useSelector(state => state.userId);
	const username = useSelector(state => state.username);
	const catalogs = useSelector(state => state.catalogs);

	const [currentCatalog, updateCurrentCatalog] = useState(0);
	const [showSaveMenu, toggleSaveMenu] = useState(false);
	const [triggerMenu, toggleTriggerMenu] = useState(false);

	const wipeUserData = () => {
		updateCurrentCatalog(0);
		toggleSaveMenu(false);
		dispatch({ type: 'UPDATE_USER_ID', id: 0 });
		dispatch({ type: 'UPDATE_CATALOGS', catalogs: [] });
		dispatch({ type: 'UPDATE_PALETTES', palettes: [] });
		dispatch({ type: 'UPDATE_USERNAME', name: '' });
		dispatch({ type: 'UPDATE_COLORS', colors: [] });
	};

	const deletePalette = async palette => {
		await delettePalette(palette);
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
		<div className='App'>
			<RandomColors
				currentCatalog={currentCatalog}
				toggleSaveMenu={toggleSaveMenu}
				showSaveMenu={showSaveMenu}
				updateCurrentCatalog={updateCurrentCatalog}
				fetchPalettes={fetchPalettes}
				fetchCatalogs={fetchCatalogs}
				toggleTriggerMenu={toggleTriggerMenu}
			/>
			<NavBar
				username={username}
				updateCurrentCatalog={updateCurrentCatalog}
				wipeUserData={wipeUserData}
				deletePalette={deletePalette}
				fetchPalettes={fetchPalettes}
				fetchCatalogs={fetchCatalogs}
				currentCatalog={currentCatalog}
				triggerMenu={triggerMenu}
				toggleTriggerMenu={toggleTriggerMenu}
			/>
			<Footer />
		</div>
	);
};
