import React, { useState } from 'react';
import './App.scss';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import RandomColors from '../RandomColor/RandomColor.js';
import { useSelector, useDispatch } from 'react-redux';
import {
	deleteCatalog,
	delettePalette,
	getPalettes,
	getCatalogs
} from '../../util/apiCalls';

const App = () => {
	const dispatch = useDispatch();
	const userId = useSelector(state => state.userId);
	const username = useSelector(state => state.username);
	const [currentCatalog, updateCurrentCatalog] = useState(0);
	const [catalogs, updateCatalogs] = useState([]);
	const [palettes, updatePalettes] = useState([]);
	const [showSaveMenu, toggleSaveMenu] = useState(false);
	const [triggerMenu, toggleTriggerMenu] = useState(false);

	const wipeUserData = () => {
		updateCurrentCatalog(0);
		updateCatalogs([]);
		updatePalettes([]);
		toggleSaveMenu(false);

		dispatch({ type: 'UPDATE_USER_ID', id: 0 });
		dispatch({ type: 'UPDATE_USERNAME', name: '' });
		dispatch({ type: 'UPDATE_COLORS', colors: [] });
	};

	const deletePalette = async palette => {
		await delettePalette(palette);
	};

	const removeCatalog = async catalog => {
		await deleteCatalog(catalog);
	};

	const updateCurrentUser = (user, catalogs, palettes) => {
		const { firstName, id } = user;
		updateCatalogs(catalogs);
		updatePalettes(palettes);
		dispatch({ type: 'UPDATE_USERNAME', name: firstName });
		dispatch({ type: 'UPDATE_USER_ID', id: id });
	};

	const fetchPalettes = async (cats = catalogs) => {
		if (cats.length) {
			const allPalettes = catalogs.map(async catalog => {
				return await getPalettes(catalog);
			});
			const allResolvedPalettes = await Promise.all(allPalettes);

			updatePalettes(allResolvedPalettes.flat());
		}
	};

	const fetchCatalogs = async (id = { id: userId }) => {
		const newCatalogs = await getCatalogs(id);
		updateCatalogs(newCatalogs);
	};

	return (
		<div className='App'>
			<RandomColors
				userID={userId}
				currentCatalog={currentCatalog}
				toggleSaveMenu={toggleSaveMenu}
				showSaveMenu={showSaveMenu}
				catalogs={catalogs}
				updateCurrentCatalog={updateCurrentCatalog}
				fetchPalettes={fetchPalettes}
				fetchCatalogs={fetchCatalogs}
				toggleTriggerMenu={toggleTriggerMenu}
			/>
			<NavBar
				username={username}
				catalogs={catalogs}
				updateCurrentUser={updateCurrentUser}
				updateCurrentCatalog={updateCurrentCatalog}
				wipeUserData={wipeUserData}
				deletePalette={deletePalette}
				palettes={palettes}
				fetchPalettes={fetchPalettes}
				fetchCatalogs={fetchCatalogs}
				currentCatalog={currentCatalog}
				triggerMenu={triggerMenu}
				toggleTriggerMenu={toggleTriggerMenu}
				removeCatalog={removeCatalog}
			/>
			<Footer />
		</div>
	);
};

export default App;
