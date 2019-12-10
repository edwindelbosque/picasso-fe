import React, { Component } from 'react';
import './App.scss';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import LoginForm from '../LoginForm/loginForm.js';

class App extends Component {
	constructor() {
		super();
		this.state = {
			arrayOfColors: [],
			userName: '',
			userId: 0
		};
	}

	updateCurrentUser = user => {
		const { firstName, id } = user;
		this.setState({ userName: firstName, userId: id });
	};

	render() {
		return (
			<div className='App'>
				<NavBar />
				<Footer />
				<LoginForm updateCurrentUser={this.updateCurrentUser} />
			</div>
		);
	}
}

export default App;
