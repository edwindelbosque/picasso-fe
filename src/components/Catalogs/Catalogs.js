import React from 'react';
import './Catalogs.scss';
import { NavLink } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const Catalogs = ({ menuIsActive, catalogs }) => {
	return (
		<section className='Catalogs'>
			<h2>Catalogs</h2>
			<ul>
				<Fade when={menuIsActive} delay={200} duration={400} bottom>
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
				</Fade>
			</ul>
		</section>
	);
};

export default Catalogs;
