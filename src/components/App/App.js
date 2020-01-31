import React, { useState } from 'react';
import './App.scss';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import GetRandomColors from '../RandomColor/RandomColor.js';
import {
	deleteCatalog,
	delettePalette,
	getPalettes,
	getCatalogs
} from '../../util/apiCalls';

const App = () => {
	const [arrayOfColors, updateColors] = useState([]);
	const [userName, updateUserName] = useState('');
	const [currentCatalog, updateCurrentCatalog] = useState(0);
	const [userId, updateUserId] = useState(0);
	const [catalogs, updateCatalogs] = useState([]);
	const [palettes, updatePalettes] = useState([]);
	const [showSaveMenu, toggleSaveMenu] = useState(false);
	const [triggerMenu, toggleTriggerMenu] = useState(false);
	const [lockedColors, updateLockedColors] = useState([
		'N',
		'N',
		'N',
		'N',
		'N'
	]);

	const wipeUserData = () => {
		updateColors([]);
		updateUserName('');
		updateCurrentCatalog(0);
		updateUserId(0);
		updateCatalogs([]);
		updatePalettes([]);
		toggleSaveMenu(false);
	};

	const deletePalette = async palette => {
		await delettePalette(palette);
	};

	const removeCatalog = async catalog => {
		await deleteCatalog(catalog);
	};

	const updateCurrentUser = (user, catalogs, palettes) => {
		const { firstName, id } = user;
		updateUserName(firstName);
		updateUserId(id);
		updateCatalogs(catalogs);
		updatePalettes(palettes);
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
			<GetRandomColors
				arrayOfColors={arrayOfColors}
				lockedColors={lockedColors}
				updateColors={updateColors}
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
				userName={userName}
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
				updateColors={updateColors}
				arrayOfColors={arrayOfColors}
				removeCatalog={removeCatalog}
			/>
			<Footer />
		</div>
	);
};

export default App;
