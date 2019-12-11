import React, { useState } from 'react';
import './NavBar.scss';
import Fade from 'react-reveal/Fade';
import Palettes from '../Palettes/Palettes';
import Catalogs from '../Catalogs/Catalogs';
import { Route, Link } from 'react-router-dom';
import { getPalettes } from '../../util/apiCalls';

const NavBar = ({ userName, catalogs }) => {
	const [menuIsActive, toggleMenu] = useState(false);
	const [palettes, updatePalettes] = useState([]);
	const isSignedIn = userName;

	const fetchPalettes = () => {
		if (isSignedIn) {
			const accumulatedPalettes = [];
			catalogs.forEach(async catalog => {
				const palettess = await getPalettes(catalog);
				accumulatedPalettes.push(...palettess);
			});
			updatePalettes(accumulatedPalettes);
		}
	};

	return (
		<>
			<nav className='NavBar'>
				<p className={menuIsActive ? 'active-title' : ''}>Picasso</p>
				<Link
					to={
						isSignedIn
							? menuIsActive
								? '/create'
								: catalogs
								? '/catalogs'
								: '/logout'
							: menuIsActive
							? '/create'
							: '/new-account'
					}>
					<div
						className={`hamburger-menu ${menuIsActive &&
							'hamburger-menu-active'}`}
						onClick={() => {
							toggleMenu(!menuIsActive);
							fetchPalettes();
						}}>
						<div className='bar-1'></div>
						<div className='bar-2'></div>
						<div className='bar-3'></div>
					</div>
				</Link>
			</nav>
			<div className={`menu ${menuIsActive && 'show-menu'}`}></div>
			<div className={`menu ${menuIsActive && 'show-menu'}`}>
				<Route path='/new-account'>
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
				</Route>
				<div className='main-menu'>
					<Route path='/catalogs'>
						<Catalogs menuIsActive={menuIsActive} catalogs={catalogs} />
					</Route>
					<Route path='/logout'>
						<div menuIsActive={menuIsActive}></div>
					</Route>
					<Route
						path='/catalogs/:id'
						render={({ match }) => {
							const matchingPalettes = palettes.filter(
								palette => palette.catalog_id === parseInt(match.params.id)
							);
							return (
								<Palettes
									menuIsActive={menuIsActive}
									palettes={matchingPalettes}
								/>
							);
						}}
					/>
				</div>
			</div>
		</>
	);
};

export default NavBar;
