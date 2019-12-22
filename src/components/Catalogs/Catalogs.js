import React from 'react';
import './Catalogs.scss';
import { NavLink } from 'react-router-dom';

const Catalogs = ({
	catalogs,
	menuIsActive,
	updateCurrentCatalog,
	removeCatalog,
	fetchCatalogs
}) => {
	let allCatalogs;

	const handleDelete = async catalog => {
		await removeCatalog(catalog);
		await fetchCatalogs();
	};

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
					<div key={id}>
						<button onClick={() => handleDelete(catalog)}>x</button>{' '}
						<li>{catalogName}</li>
					</div>
				</NavLink>
			);
		});
	}

	return (
		<section className='Catalogs'>
			<h2>Catalogs</h2>
			<ul>{allCatalogs}</ul>
		</section>
	);
};

export default Catalogs;
