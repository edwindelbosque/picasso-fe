import React from 'react';
import './Catalogs.scss';
import { NavLink } from 'react-router-dom';
// import { getPalettes } from '../../util/apiCalls';
import Fade from 'react-reveal/Fade';

const Catalogs = ({ catalogs, menuIsActive, updateCurrentCatalog }) => {
	let allCatalogs;

	if (catalogs) {
		allCatalogs = catalogs.map(catalog => {
			const { catalogName, id } = catalog;
			return (
				<NavLink
					onClick={() => updateCurrentCatalog(id)}
					key={id}
					exact
					to={`/catalogs/${id}`}
					activeClassName='active-catalog'>
					{' '}
					<li>{catalogName}</li>
				</NavLink>
			);
		});
	}

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
					{allCatalogs}
				</Fade>
			</ul>
		</section>
	);
};

export default Catalogs;
