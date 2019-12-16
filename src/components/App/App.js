import React, { useState } from 'react';
import './App.scss';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import GetRandomColors from '../RandomColor/RandomColor.js';
import { delettePalette, getPalettes, getCatalogs } from '../../util/apiCalls';

const App = () => {
	const [arrayOfColors, updateColors] = useState([]);
	const [userName, updateUserName] = useState('');
	const [currentCatalog, updateCurrentCatalog] = useState(0);
	const [currentPalette, updateCurrentPalette] = useState(0);
	const [userId, updateUserId] = useState(0);
	const [catalogss, updateCatalogs] = useState([]);
	const [palettes, updatePalettes] = useState([]);
	const [showSaveMenu, toggleSaveMenu] = useState(false);
	const [triggerMenu, toggleTriggerMenu] = useState(false);

	const updateArrayOfColors = colors => {
		updateColors(colors);
	};

	const openMenu = () => {
		toggleTriggerMenu(true);
	};

	const closeMenu = () => {
		toggleTriggerMenu(false);
	};

	const closeSaveMenu = () => {
		toggleSaveMenu(false);
	};

	const openSaveMenu = () => {
		toggleSaveMenu(true);
	};

	const wipeUserData = () => {
		updateColors([]);
		updateUserName('');
		updateCurrentCatalog(0);
		updateCurrentPalette(0);
		updateUserId(0);
		updateCatalogs([]);
		updatePalettes([]);
		toggleSaveMenu(false);
	};

	const deletePalette = async palette => {
		await delettePalette(palette);
	};

	const updateCurrentUser = (user, catalogs, palettes) => {
		const { firstName, id } = user;
		updateUserName(firstName);
		updateUserId(id);
		updateCatalogs(catalogs);
		updatePalettes(palettes);
	};

	const resetCurrentCatalog = () => {
		updateCurrentCatalog(0);
	};

	const fetchPalettes = async (catalogs = catalogss) => {
		if (userId && catalogs.length) {
			const allPalettes = catalogs.map(async catalog => {
				return await getPalettes(catalog);
			});
			const allResolvedPalettes = await Promise.all(allPalettes);

			updatePalettes(allResolvedPalettes.flat());
		}
	};

	const fetchCatalogs = async (id = { id: userId }) => {
		const catalogs = await getCatalogs({ id });
		updateCatalogs(catalogs);
	};

	return (
		<div className='App'>
			<GetRandomColors
				arrayOfColors={arrayOfColors}
				updateArrayOfColors={updateArrayOfColors}
				userID={userId}
				currentCatalog={currentCatalog}
				closeSaveMenu={closeSaveMenu}
				openSaveMenu={openSaveMenu}
				showSaveMenu={showSaveMenu}
				catalogs={catalogss}
				resetCurrentCatalog={resetCurrentCatalog}
				fetchPalettes={fetchPalettes}
				fetchCatalogs={fetchCatalogs}
				openMenu={openMenu}
			/>
			<NavBar
				userName={userName}
				catalogs={catalogss}
				updateCurrentUser={updateCurrentUser}
				updateCurrentCatalog={updateCurrentCatalog}
				wipeUserData={wipeUserData}
				updateCurrentPalette={updateCurrentPalette}
				deletePalette={deletePalette}
				palettes={palettes}
				resetCurrentCatalog={resetCurrentCatalog}
				fetchPalettes={fetchPalettes}
				fetchCatalogs={fetchCatalogs}
				currentCatalog={currentCatalog}
				triggerMenu={triggerMenu}
				closeMenu={closeMenu}
				updateArrayOfColors={updateArrayOfColors}
				arrayOfColors={arrayOfColors}
			/>
			<Footer />
		</div>
	);
};

export default App;
