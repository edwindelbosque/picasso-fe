import React, { Component } from 'react';
import './App.scss';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import GetRandomColors from '../RandomColor/RandomColor.js';

class App extends Component {
	constructor() {
		super();
		this.state = {
			arrayOfColors: [],
			userName: '',
			currentCatalog: 0,
			userId: 0,
			catalogs: [],
			palettes: [],
			showSaveMenu: false
		};
	}

	updateArrayOfColors = colors => {
		this.setState({ arrayOfColors: colors });
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
			userId: 0,
			catalogs: [],
			palettes: []
		});
	};

	updateCurrentUser = (user, catalogs) => {
		const { firstName, id } = user;
		this.setState({ userName: firstName, userId: id, catalogs: catalogs });
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
				<NavBar
					userName={this.state.userName}
					catalogs={this.state.catalogs}
					updateCurrentUser={this.updateCurrentUser}
					updateCurrentCatalog={this.updateCurrentCatalog}
					wipeUserData={this.wipeUserData}
				/>
				<Footer />
			</div>
		);
	}
}

export default App;
