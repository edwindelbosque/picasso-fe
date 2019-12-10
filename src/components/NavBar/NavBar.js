import React, { useState, useEffect } from 'react';
import './NavBar.scss';
import Fade from 'react-reveal/Fade';
// import { createUser } from '../../util/apiCalls';
import Palettes from '../Palettes/Palettes';
import Catalogs from '../Catalogs/Catalogs';

const NavBar = () => {
	const [menuIsActive, toggleMenu] = useState(false);
	const isSignedIn = true;

	useEffect(() => {
		// const postNewUser = async () => {
		// 	const newUser = {
		// 		email: 'edwindbdjba@gmail.com',
		// 		password: 'verySecret',
		// 		firstName: 'Edwin',
		// 		lastName: 'Del Bisquit'
		// 	};
		// 	const user = await createUser(newUser);
		// 	console.log(user);
		// };
		// postNewUser();
	}, []);

	return (
		<>
			<nav className='NavBar'>
				<p className={menuIsActive && 'active-title'}>Picasso</p>
				<div
					className={`hamburger-menu ${menuIsActive &&
						'hamburger-menu-active'}`}
					onClick={() => toggleMenu(!menuIsActive)}>
					<div className='bar-1'></div>
					<div className='bar-2'></div>
					<div className='bar-3'></div>
				</div>
			</nav>
			<div className={`menu ${menuIsActive && 'show-menu'}`}></div>
			<div className={`menu ${menuIsActive && 'show-menu'}`}>
				{!isSignedIn && (
					<div className='access-buttons'>
						<Fade right when={menuIsActive} duration={300} delay={200}>
							<button
								className={`login-button ${menuIsActive && 'animate-button'}`}>
								Login
							</button>
							<button
								className={`signup-button ${menuIsActive && 'animate-button'}`}>
								Sign Up
							</button>
						</Fade>
					</div>
				)}
				{!isSignedIn && (
					<div className='information-area'>
						<Fade left when={menuIsActive} delay={60} duration={400}>
							<h1>
								Save all of your palettes by creating an <span>account.</span>
							</h1>
						</Fade>
						<div
							className={`hidden-circle ${menuIsActive &&
								'active-circle'}`}></div>
					</div>
				)}
				{isSignedIn && (
					<div className='main-menu'>
						<Catalogs />
						<Palettes />
					</div>
				)}
			</div>
		</>
	);
};

export default NavBar;
