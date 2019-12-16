import React from 'react';
import './Catalogs.scss';
import { NavLink } from 'react-router-dom';
// import { getPalettes } from '../../util/apiCalls';

const Catalogs = ({ catalogs, menuIsActive, updateCurrentCatalog }) => {
	let allCatalogs;

	if (catalogs.length) {
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

	return (
		<section className='Catalogs'>
			<h2>Catalogs</h2>
				<ul>
					{allCatalogs}
				</ul>
		</section>
	);
};

export default Catalogs;
