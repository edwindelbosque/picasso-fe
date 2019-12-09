import React, { useState } from 'react';
import './NavBar.scss';

const NavBar = () => {
	const [menuIsActive, toggleMenu] = useState(false);

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
