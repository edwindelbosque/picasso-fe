import React, { useState, useEffect } from 'react';
import './NavBar.scss';
import Fade from 'react-reveal/Fade';
// import { createUser } from '../../util/apiCalls';

const NavBar = () => {
	const [menuIsActive, toggleMenu] = useState(false);

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
				<Fade duration={500}>
					<p className={menuIsActive && 'active-title'}>Picasso</p>
				</Fade>
				<Fade duration={500}>
					<div
						className={`hamburger-menu ${menuIsActive &&
							'hamburger-menu-active'}`}
						onClick={() => toggleMenu(!menuIsActive)}>
						<div className='bar-1'></div>
						<div className='bar-2'></div>
						<div className='bar-3'></div>
					</div>
				</Fade>
			</nav>
			<div className={`menu ${menuIsActive && 'show-menu'}`}>
				<div>
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
			</div>
		</>
	);
};

export default NavBar;
