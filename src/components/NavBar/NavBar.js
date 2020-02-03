import React, { useState, useEffect } from 'react';
import './NavBar.scss';
import Fade from 'react-reveal/Fade';
import Palettes from '../Palettes/Palettes';
import Catalogs from '../Catalogs/Catalogs';
import { Route, Link } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import logoutIcon from '../../assets/logoutIcon.png';
import UserSignupForm from '../UserSignupForm/UserSignupForm.js';
import { useSelector } from 'react-redux';

const NavBar = ({
	username,
	signUpUser,
	logInUser,
	updateCurrentCatalog,
	updateCurrentPalette,
	wipeUserData,
	deletePalette,
	updateUserId,
	currentCatalog,
	fetchPalettes,
	toggleTriggerMenu,
	triggerMenu,
	fetchCatalogs,
	removeCatalog
}) => {
	const [menuIsActive, toggleMenu] = useState(false);
	const isSignedIn = username;
	const catalogs = useSelector(state => state.catalogs);
	const palettes = useSelector(state => state.palettes);

	const filterPalettes = id => {
		if (palettes) {
			const palettesToReturn = palettes.filter(palette => {
				return palette.catalog_id === parseInt(id);
			});
			return palettesToReturn;
		}
	};

	useEffect(() => {
		if (triggerMenu) {
			toggleMenu(true);
		}
	}, [triggerMenu]);

	return (
		<>
			<nav className='NavBar'>
				<p className={menuIsActive ? 'active-title' : ''}>Picasso</p>
				<div>
					{username && <h3>{username}</h3>}
					<Link
						to={
							isSignedIn
								? menuIsActive
									? '/create'
									: catalogs
									? `/catalogs/${catalogs.length ? catalogs[0].id : 0}`
									: '/logout'
								: menuIsActive
								? '/create'
								: '/signup'
						}>
						<div
							className={`hamburger-menu ${menuIsActive &&
								'hamburger-menu-active'}`}
							onClick={() => {
								if (menuIsActive) {
									updateCurrentCatalog(0);
									toggleTriggerMenu(false);
								} else {
									updateCurrentCatalog(catalogs.length && catalogs[0].id);
									username && fetchPalettes();
								}
								toggleMenu(!menuIsActive);
							}}>
							<div className='bar-1'></div>
							<div className='bar-2'></div>
							<div className='bar-3'></div>
						</div>
					</Link>
				</div>
			</nav>
			<div className={`menu ${menuIsActive && 'show-menu'}`}></div>
			<div className={`menu ${menuIsActive && 'show-menu'}`}>
				<Route path='(/signup|/login)'>
					<div className='access-buttons'>
						<Fade right when={menuIsActive} duration={300} delay={200}>
							<Link to='/login'>
								<button
									className={`login-button ${menuIsActive &&
										'animate-button'}`}>
									Login
								</button>
							</Link>
							<Link to='/signup'>
								<button
									className={`signup-button ${menuIsActive &&
										'animate-button'}`}>
									Sign Up
								</button>
							</Link>
						</Fade>
						<Route exact path='/login'>
							<LoginForm
								logInUser={logInUser}
								toggleMenu={toggleMenu}
								fetchPalettes={fetchPalettes}
								fetchCatalogs={fetchCatalogs}
							/>
						</Route>
						<Route exact path='/signup'>
							<UserSignupForm
								signUpUser={signUpUser}
								toggleMenu={toggleMenu}
								fetchCatalogs={fetchCatalogs}
								fetchPalettes={fetchPalettes}
								updateUserId={updateUserId}
							/>
						</Route>
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
						<Catalogs
							menuIsActive={menuIsActive}
							updateCurrentCatalog={updateCurrentCatalog}
							removeCatalog={removeCatalog}
							fetchCatalogs={fetchCatalogs}
						/>
						<Link to='/create'>
							<p className='logout-text'>Logout</p>
							<img
								src={logoutIcon}
								className='logout-icon'
								alt='logout button'
								onClick={() => {
									toggleMenu(false);
									wipeUserData();
								}}
							/>
						</Link>
					</Route>
					<Route path='/logout'>
						<div menuIsActive={menuIsActive}></div>
						<Link to='/create'>
							<p className='logout-text'>Logout</p>
							<img
								src={logoutIcon}
								className='logout-icon'
								alt='logout button'
								onClick={() => {
									toggleMenu(false);
									wipeUserData();
								}}
							/>
						</Link>
					</Route>
					<Route
						exact
						path='/catalogs/:id'
						render={({ match }) => {
							const matchingPalettes = filterPalettes(match.params.id);

							return (
								<Palettes
									menuIsActive={menuIsActive}
									palettes={matchingPalettes}
									toggleMenu={toggleMenu}
									updateCurrentPalette={updateCurrentPalette}
									deletePalette={deletePalette}
									fetchPalettes={fetchPalettes}
									currentCatalog={currentCatalog}
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
