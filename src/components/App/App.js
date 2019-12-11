import React, { Component } from 'react';
import './App.scss';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import LoginForm from '../LoginForm/LoginForm.js';
import UserSignupForm from '../UserSignupForm/UserSignupForm.js';
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

	updateCurrentCatalog = id => {
		this.setState({ currentCatalog: id });
	};

	render() {
		return (
			<div className='App'>
				<NavBar />
				<LoginForm updateCurrentUser={this.updateCurrentUser} />
				<UserSignupForm updateCurrentUser={this.updateCurrentUser} />
				<GetRandomColors arrayOfColors={this.state.arrayOfColors} updateArrayOfColors={this.updateArrayOfColors} userID={this.state.userId} currentCatalog={this.state.currentCatalog}/>
				<NavBar
					userName={this.state.userName}
					catalogs={this.state.catalogs}
					updateCurrentUser={this.updateCurrentUser}
				/>
				<Footer />
			</div>
		);
	}
}

export default App;
