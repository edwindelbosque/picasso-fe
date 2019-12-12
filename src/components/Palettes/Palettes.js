import React from 'react';
import './Palettes.scss';
import PaletteCard from '../PaletteCard/PaletteCard';
import { Link } from 'react-router-dom';

const Palettes = ({ menuIsActive, palettes, toggleMenu }) => {
	console.log('PALETTES IS WORKING!!', palettes);
	
	return (
		<section className='Palettes'>
			<h2>Palettes</h2>
			{palettes.map(palette => {
				const { id, catalog_id } = palette;
				return (
					<Link
						key={id}
						to={`/catalogs/${catalog_id}/palettes/${id}`}
						onClick={() => toggleMenu(false)}>
						<PaletteCard menuIsActive={menuIsActive} palette={palette} />
					</Link>
				);
			})}
		</section>
	);
};

export default Palettes;
