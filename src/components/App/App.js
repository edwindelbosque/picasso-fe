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
			userId: 0,
			catalogs: [],
			palettes: []
		};
	}

	updateArrayOfColors = colors => {
		this.setState({ arrayOfColors: colors });
	};

	updateCurrentUser = (user, catalogs) => {
		const { firstName, id } = user;
		this.setState({ userName: firstName, userId: id, catalogs: catalogs });
	};

	render() {
		return (
			<div className='App'>
				<NavBar
					userName={this.state.userName}
					catalogs={this.state.catalogs}
					updateCurrentUser={this.updateCurrentUser}
				/>
				<Footer />
				<GetRandomColors updateArrayOfColors={this.updateArrayOfColors} />
				<Footer />
			</div>
		);
	}
}

export default App;
