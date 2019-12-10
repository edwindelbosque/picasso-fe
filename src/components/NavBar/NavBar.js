import React, { useState, useEffect } from 'react';
import './NavBar.scss';
import Fade from 'react-reveal/Fade';
// import { createUser } from '../../util/apiCalls';
import Palettes from '../Palettes/Palettes';
import Catalogs from '../Catalogs/Catalogs';
import { Route, Link } from 'react-router-dom';

let catalogs = [
	{
		id: 1,
		catalogName: 'Personal',
		user_id: 1
	},
	{
		id: 2,
		catalogName: 'Favorites',
		user_id: 1
	},
	{
		id: 3,
		catalogName: 'Mood',
		user_id: 2
	},
	{
		id: 4,
		catalogName: 'Work',
		user_id: 3
	},
	{
		id: 5,
		catalogName: 'Favorites',
		user_id: 4
	},
	{
		id: 6,
		catalogName: 'Mood',
		user_id: 4
	},
	{
		id: 7,
		catalogName: 'Work',
		user_id: 4
	},
	{
		id: 8,
		catalogName: 'Favorites',
		user_id: 5
	},
	{
		id: 9,
		catalogName: 'Mood',
		user_id: 5
	},
	{
		id: 10,
		catalogName: 'Work',
		user_id: 5
	}
];

let palettes = [
	{
		id: 1,
		paletteName: 'Personal',
		color1: '334534',
		color2: '443224',
		color3: '345534',
		color4: '342534',
		color5: '342533',
		catalog_id: 1
	},
	{
		id: 2,
		paletteName: 'Sunny',
		color1: '342537',
		color2: '742532',
		color3: '142535',
		color4: '544344',
		color5: '342531',
		catalog_id: 3
	},
	{
		id: 3,
		paletteName: 'I love it',
		color1: '542531',
		color2: '342537',
		color3: '342531',
		color4: '242536',
		color5: '742533',
		catalog_id: 2
	},
	{
		id: 4,
		paletteName: '12345',
		color1: '242531',
		color2: '342533',
		color3: '642536',
		color4: '142537',
		color5: '642530',
		catalog_id: 1
	},
	{
		id: 5,
		paletteName: 'Personal',
		color1: '042534',
		color2: '342534',
		color3: '042534',
		color4: '342534',
		color5: '042534',
		catalog_id: 4
	},
	{
		id: 6,
		paletteName: 'Dreamin',
		color1: '142534',
		color2: '342534',
		color3: '142534',
		color4: '342534',
		color5: '142534',
		catalog_id: 5
	},
	{
		id: 7,
		paletteName: 'Hotel',
		color1: '642534',
		color2: '642534',
		color3: '342534',
		color4: '642534',
		color5: '342534',
		catalog_id: 6
	},
	{
		id: 8,
		paletteName: 'Blue',
		color1: '842534',
		color2: '142534',
		color3: '342534',
		color4: '142534',
		color5: '342534',
		catalog_id: 7
	},
	{
		id: 9,
		paletteName: 'Warm',
		color1: '342534',
		color2: '742534',
		color3: '642534',
		color4: '842534',
		color5: '142534',
		catalog_id: 7
	},
	{
		id: 10,
		paletteName: 'Sad',
		color1: '142534',
		color2: '342534',
		color3: '142534',
		color4: '342534',
		color5: '142534',
		catalog_id: 8
	},
	{
		id: 11,
		paletteName: 'Colorful',
		color1: '142534',
		color2: '342534',
		color3: '142534',
		color4: '342534',
		color5: '142534',
		catalog_id: 9
	},
	{
		id: 12,
		paletteName: 'Vibrant',
		color1: '742534',
		color2: '342534',
		color3: '842534',
		color4: '342534',
		color5: '342534',
		catalog_id: 10
	},
	{
		id: 13,
		paletteName: 'Bold',
		color1: '942534',
		color2: '342534',
		color3: '142534',
		color4: '242534',
		color5: '342534',
		catalog_id: 10
	},
	{
		id: 14,
		paletteName: 'Magical',
		color1: '142534',
		color2: '742534',
		color3: '342534',
		color4: '142534',
		color5: '342534',
		catalog_id: 3
	},
	{
		id: 15,
		paletteName: 'Interesting',
		color1: '942534',
		color2: '042534',
		color3: '342534',
		color4: '142534',
		color5: '342534',
		catalog_id: 5
	},
	{
		id: 16,
		paletteName: 'Prototype',
		color1: '442534',
		color2: '342534',
		color3: '742534',
		color4: '142534',
		color5: '742534',
		catalog_id: 10
	},
	{
		id: 17,
		paletteName: 'Prototype Hotel 2',
		color1: '142534',
		color2: '842534',
		color3: '242534',
		color4: '342534',
		color5: '842534',
		catalog_id: 10
	},
	{
		id: 18,
		paletteName: 'Prototype Hotel 3',
		color1: '142534',
		color2: '342534',
		color3: '142534',
		color4: '142534',
		color5: '842534',
		catalog_id: 10
	},
	{
		id: 19,
		paletteName: 'Prototype Hotel 4',
		color1: '142534',
		color2: '742534',
		color3: '242534',
		color4: '342534',
		color5: '742534',
		catalog_id: 10
	},
	{
		id: 20,
		paletteName: 'Movie poster 1',
		color1: '142534',
		color2: '842534',
		color3: '642534',
		color4: '342534',
		color5: '242534',
		catalog_id: 3
	}
];

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
				<p className={menuIsActive ? 'active-title' : ''}>Picasso</p>
				<Link
					to={
						isSignedIn
							? menuIsActive
								? '/create'
								: '/catalogs'
							: menuIsActive
							? '/create'
							: '/new-account'
					}>
					<div
						className={`hamburger-menu ${menuIsActive &&
							'hamburger-menu-active'}`}
						onClick={() => toggleMenu(!menuIsActive)}>
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
