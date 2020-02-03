import React, { useState } from 'react';
import './App.scss';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import RandomColors from '../RandomColor/RandomColor.js';
import { useSelector, useDispatch } from 'react-redux';
import { getFiveColors } from '../../util/apiCalls.js';

export const App = () => {
	const dispatch = useDispatch();
	const username = useSelector(state => state.username);
	const [currentCatalog, updateCurrentCatalog] = useState(0);
	const [showSaveMenu, toggleSaveMenu] = useState(false);

	const wipeUserData = () => {
		updateCurrentCatalog(0);
		toggleSaveMenu(false);
		dispatch({ type: 'UPDATE_USER_ID', id: 0 });
		dispatch({ type: 'UPDATE_CATALOGS', catalogs: [] });
		dispatch({ type: 'UPDATE_PALETTES', palettes: [] });
		dispatch({ type: 'UPDATE_USERNAME', name: '' });
		dispatch({ type: 'UPDATE_COLORS', colors: [] });
		getFiveColors(dispatch);
	};

	return (
		<div className='App'>
			<RandomColors
				currentCatalog={currentCatalog}
				toggleSaveMenu={toggleSaveMenu}
				showSaveMenu={showSaveMenu}
				updateCurrentCatalog={updateCurrentCatalog}
			/>
			<NavBar
				username={username}
				updateCurrentCatalog={updateCurrentCatalog}
				wipeUserData={wipeUserData}
				currentCatalog={currentCatalog}
			/>
			<Footer />
		</div>
	);
};
