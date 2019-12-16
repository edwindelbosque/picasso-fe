import React from 'react';
import './Palettes.scss';
import PaletteCard from '../PaletteCard/PaletteCard';
import { Link } from 'react-router-dom';

const Palettes = ({
	menuIsActive,
	palettes,
	toggleMenu,
	updateCurrentPalette,
	deletePalette,
	fetchPalettes,
	currentCatalog
}) => {
	return (
		<section className='Palettes'>
			<h2>Palettes</h2>
			{palettes.map(palette => {
				const { id, catalog_id } = palette;
				return (
					<Link
						key={id}
						to={`/catalogs/${catalog_id}/palettes/${id}`}
						onClick={() => {
							// toggleMenu(false);
							updateCurrentPalette(id);
						}}>
						<PaletteCard
							menuIsActive={menuIsActive}
							deletePalette={deletePalette}
							palette={palette}
							fetchPalettes={fetchPalettes}
							toggleMenu={toggleMenu}
							currentCatalog={currentCatalog}
						/>
					</Link>
				);
			})}
		</section>
	);
};

export default Palettes;
