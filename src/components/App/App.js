import React, { Component } from 'react';
import './App.scss';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import GetRandomColors from '../RandomColor/RandomColor.js';
import { delettePalette } from '../../util/apiCalls';

class App extends Component {
	constructor() {
		super();
		this.state = {
			arrayOfColors: [],
			userName: '',
			currentCatalog: 0,
			currentPalette: 0,
			userId: 0,
			catalogs: [],
			palettes: [],
			showSaveMenu: false
		};
	}

	updateArrayOfColors = colors => {
		this.setState({ arrayOfColors: colors });
	};

	updateCurrentPalette = id => {
		this.setState({ currentPalette: id });
	};

	closeSaveMenu = () => {
		this.setState({
			showSaveMenu: false
		});
	};

	openSaveMenu = () => {
		this.setState({
			showSaveMenu: true
		});
	};

	wipeUserData = () => {
		this.setState({
			arrayOfColors: [],
			userName: '',
			currentCatalog: 0,
			currentPalette: 0,
			userId: 0,
			catalogs: [],
			palettes: [],
			showSaveMenu: false
		});
	};

	deletePalette = palette => {
		const { id } = palette;
		delettePalette(palette);
		this.setState({
			palette: this.state.palettes.filter(palette => palette.id !== id)
		});
	};

	updateCurrentUser = (user, catalogs, palettes) => {
		const { firstName, id } = user;
		this.setState({
			userName: firstName,
			userId: id,
			catalogs: catalogs,
			palettes
		});
	};

	updateCurrentCatalog = id => {
		this.setState({ currentCatalog: id });
	};

	resetCurrentCatalog = () => {
		this.setState({ currentCatalog: 0 });
	};

	render() {
		return (
			<div className='App'>
				<GetRandomColors
					arrayOfColors={this.state.arrayOfColors}
					updateArrayOfColors={this.updateArrayOfColors}
					userID={this.state.userId}
					currentCatalog={this.state.currentCatalog}
					closeSaveMenu={this.closeSaveMenu}
					openSaveMenu={this.openSaveMenu}
					showSaveMenu={this.state.showSaveMenu}
					catalogs={this.state.catalogs}
					resetCurrentCatalog={this.resetCurrentCatalog}
				/>
				{/* <Route
					to='/catalogs/:catalog_id/palettes/:id'
					render={({ match }) => {}}></Route> */}
				<NavBar
					userName={this.state.userName}
					catalogs={this.state.catalogs}
					updateCurrentUser={this.updateCurrentUser}
					updateCurrentCatalog={this.updateCurrentCatalog}
					wipeUserData={this.wipeUserData}
					updateCurrentPalette={this.updateCurrentPalette}
					deletePalette={this.deletePalette}
					palettes={this.state.palettes}
					resetCurrentCatalog={this.resetCurrentCatalog}
				/>
				<Footer />
			</div>
		);
	}
}

export default App;
