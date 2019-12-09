import React, { Component } from 'react';
import './App.scss';
import NavBar from '../NavBar/NavBar';

class App extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className='App'>
				<NavBar />
			</div>
		);
	}
}

export default App;
