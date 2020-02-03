import React from 'react';
import './NavBar.scss';
import Fade from 'react-reveal/Fade';
import Palettes from '../Palettes/Palettes';
import Catalogs from '../Catalogs/Catalogs';
import { Route, Link } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import logoutIcon from '../../assets/logoutIcon.png';
import UserSignupForm from '../UserSignupForm/UserSignupForm.js';
import { useSelector, useDispatch } from 'react-redux';
import { getPalettes, getCatalogs } from '../../util/apiCalls';

const NavBar = ({
	updateCurrentCatalog,
	updateCurrentPalette,
	wipeUserData,
	currentCatalog,
	removeCatalog
}) => {
	const isMenuOpen = useSelector(state => state.isMenuOpen);
	const catalogs = useSelector(state => state.catalogs);
	const palettes = useSelector(state => state.palettes);
	const username = useSelector(state => state.username);
	const userId = useSelector(state => state.userId);
	const dispatch = useDispatch();

	const filterPalettes = id => {
		if (palettes) {
			const palettesToReturn = palettes.filter(palette => {
				return palette.catalog_id === parseInt(id);
			});
			return palettesToReturn;
		}
	};

	const fetchCatalogs = async (id = { id: userId }) => {
		const newCatalogs = await getCatalogs(id);
		dispatch({ type: 'UPDATE_CATALOGS', catalogs: newCatalogs });
	};

	const fetchPalettes = async (cats = catalogs) => {
		if (cats.length) {
			const allPalettes = catalogs.map(async catalog => {
				return await getPalettes(catalog);
			});
			const allResolvedPalettes = await Promise.all(allPalettes);
			dispatch({
				type: 'UPDATE_PALETTES',
				palettes: allResolvedPalettes.flat()
			});
		}
	};

	return (
		<>
			<nav className='NavBar'>
				<p className={isMenuOpen ? 'active-title' : ''}>Picasso</p>
				<div>
					{username && <h3>{username}</h3>}
					<Link
						to={
							username
								? isMenuOpen
									? '/create'
									: catalogs
									? `/catalogs/${catalogs.length ? catalogs[0].id : 0}`
									: '/logout'
								: isMenuOpen
								? '/create'
								: '/signup'
						}>
						<div
							className={`hamburger-menu ${isMenuOpen &&
								'hamburger-menu-active'}`}
							onClick={() => {
								if (isMenuOpen) {
									updateCurrentCatalog(0);
									dispatch({
										type: 'TOGGLE_MENU',
										boolean: !isMenuOpen
									});
								} else {
									updateCurrentCatalog(catalogs.length && catalogs[0].id);
									username && fetchPalettes();
								}
								dispatch({
									type: 'TOGGLE_MENU',
									boolean: !isMenuOpen
								});
							}}>
							<div className='bar-1'></div>
							<div className='bar-2'></div>
							<div className='bar-3'></div>
						</div>
					</Link>
				</div>
			</nav>
			<div className={`menu ${isMenuOpen && 'show-menu'}`}></div>
			<div className={`menu ${isMenuOpen && 'show-menu'}`}>
				<Route path='(/signup|/login)'>
					<div className='access-buttons'>
						<Fade right when={isMenuOpen} duration={300} delay={200}>
							<Link to='/login'>
								<button
									className={`login-button ${isMenuOpen && 'animate-button'}`}>
									Login
								</button>
							</Link>
							<Link to='/signup'>
								<button
									className={`signup-button ${isMenuOpen && 'animate-button'}`}>
									Sign Up
								</button>
							</Link>
						</Fade>
						<Route exact path='/login'>
							<LoginForm
								fetchPalettes={fetchPalettes}
								fetchCatalogs={fetchCatalogs}
								isMenuOpen={isMenuOpen}
							/>
						</Route>
						<Route exact path='/signup'>
							<UserSignupForm
								isMenuOpen={isMenuOpen}
								fetchCatalogs={fetchCatalogs}
								fetchPalettes={fetchPalettes}
							/>
						</Route>
					</div>
					<div className='information-area'>
						<Fade left when={isMenuOpen} delay={60} duration={400}>
							<h1>
								Save all of your palettes by creating an <span>account.</span>
							</h1>
						</Fade>
						<div
							className={`hidden-circle ${isMenuOpen &&
								'active-circle'}`}></div>
					</div>
				</Route>
				<div className='main-menu'>
					<Route path='/catalogs'>
						<Catalogs
							menuIsActive={isMenuOpen}
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
									dispatch({
										type: 'TOGGLE_MENU',
										boolean: false
									});
									wipeUserData();
								}}
							/>
						</Link>
					</Route>
					<Route path='/logout'>
						<div menuIsActive={isMenuOpen}></div>
						<Link to='/create'>
							<p className='logout-text'>Logout</p>
							<img
								src={logoutIcon}
								className='logout-icon'
								alt='logout button'
								onClick={() => {
									dispatch({
										type: 'TOGGLE_MENU',
										boolean: false
									});
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
									menuIsActive={isMenuOpen}
									matchingPalettes={matchingPalettes}
									isMenuOpen={isMenuOpen}
									updateCurrentPalette={updateCurrentPalette}
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
