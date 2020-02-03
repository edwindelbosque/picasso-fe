import React, { useState } from 'react';
import './App.scss';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import RandomColors from '../RandomColor/RandomColor.js';
import { useDispatch } from 'react-redux';
import { getFiveColors } from '../../util/apiCalls.js';

const App = () => {
	const dispatch = useDispatch();
	const [currentCatalog, updateCurrentCatalog] = useState(0);

	const wipeUserData = () => {
		updateCurrentCatalog(0);
		getFiveColors(dispatch);
		dispatch({ type: 'TOGGLE_SAVE_MENU', boolean: false });
		dispatch({ type: 'UPDATE_USER_ID', id: 0 });
		dispatch({ type: 'UPDATE_CATALOGS', catalogs: [] });
		dispatch({ type: 'UPDATE_PALETTES', palettes: [] });
		dispatch({ type: 'UPDATE_USERNAME', name: '' });
		dispatch({ type: 'UPDATE_COLORS', colors: [] });
	};

	return (
		<div className='App'>
			<RandomColors
				currentCatalog={currentCatalog}
				updateCurrentCatalog={updateCurrentCatalog}
			/>
			<NavBar
				updateCurrentCatalog={updateCurrentCatalog}
				wipeUserData={wipeUserData}
				currentCatalog={currentCatalog}
			/>
			<Footer />
		</div>
	);
};

export default App;
