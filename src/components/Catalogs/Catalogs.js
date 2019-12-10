import React from 'react';
import './Catalogs.scss';
import { NavLink } from 'react-router-dom';

const Catalogs = ({ catalogs }) => {
	return (
		<section className='Catalogs'>
			<h2>Catalogs</h2>
			<ul>
				<NavLink
					exact
					to='/'
					className='Nav__button link-wrapper dropdown'
					activeClassName='nav-active'>
					{' '}
					<li>Work</li>
				</NavLink>
				<NavLink
					exact
					to='/'
					className='Nav__button link-wrapper dropdown'
					activeClassName='nav-active'>
					{' '}
					<li>Personal</li>
				</NavLink>
				<NavLink
					exact
					to='/'
					className='Nav__button link-wrapper dropdown'
					activeClassName='nav-active'>
					{' '}
					<li>Hobby</li>
				</NavLink>
				<NavLink
					exact
					to='/'
					className='Nav__button link-wrapper dropdown'
					activeClassName='nav-active'>
					{' '}
					<li>Mood</li>
				</NavLink>
				<NavLink
					exact
					to='/'
					className='Nav__button link-wrapper dropdown'
					activeClassName='nav-active'>
					{' '}
					<li>Design</li>
				</NavLink>
				<NavLink
					exact
					to='/'
					className='Nav__button link-wrapper dropdown'
					activeClassName='nav-active'>
					{' '}
					<li>Design</li>
				</NavLink>
			</ul>
		</section>
	);
};

export default Catalogs;
