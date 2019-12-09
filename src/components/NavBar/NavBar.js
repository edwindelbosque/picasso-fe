import React, { useState, useEffect } from 'react';
import './NavBar.scss';
import { createUser } from '../../util/apiCalls';

const NavBar = () => {
	const [menuIsActive, toggleMenu] = useState(false);

	useEffect(() => {
		const postNewUser = async () => {
			const newUser = {
				email: 'edwindbda@gmail.com',
				password: 'verySecret',
				firstName: 'Edwin',
				lastName: 'Del Bisquit'
			};
			const user = await createUser(newUser);
			console.log(user);
		};

		postNewUser();
	}, []);

	return (
		<>
			<nav className='NavBar'>
				<p>Picasso.</p>
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
		</>
	);
};

export default NavBar;
