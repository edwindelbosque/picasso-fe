import React from 'react';
import './Catalogs.scss';
import { NavLink } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { getPalettes } from '../../util/apiCalls';

const Catalogs = ({ menuIsActive, catalogs }) => {
	const allCatalog = catalogs.map(catalog => {
		const { catalogName, id } = catalog;
		return (
			<NavLink
				key={id}
				exact
				to={`/catalogs/${id}`}
				activeClassName='active-catalog'>
				{' '}
				<li>{catalogName}</li>
			</NavLink>
		);
	});

	// const fetchPalettes = () => {
	// 	catalogs.forEach(async catalog => {
	// 		const palettess = await getPalettes(catalog);
	// 		console.log(palettess);
	// 	});
	// };

	return (
		<section className='Catalogs'>
			<h2>Catalogs</h2>
			<ul>
				<Fade when={menuIsActive} delay={200} duration={400} bottom>
					{allCatalog}
				</Fade>
			</ul>
		</section>
	);
};

export default Catalogs;
