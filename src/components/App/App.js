import React, { Component } from 'react';
import './App.scss';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import LoginForm from '../LoginForm/LoginForm.js';

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

	updateCurrentUser = (user, cats) => {
		const { firstName, id } = user;
		this.setState({ userName: firstName, userId: id, catalogs: cats });
	};

	render() {
		return (
			<div className='App'>
				<NavBar userName={this.state.userName} catalogs={this.state.catalogs} />
				<Footer />
				<LoginForm updateCurrentUser={this.updateCurrentUser} />
			</div>
		);
	}
}

export default App;
