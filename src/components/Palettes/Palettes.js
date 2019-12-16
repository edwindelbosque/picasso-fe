import React from 'react';
import './Palettes.scss';
import PaletteCard from '../PaletteCard/PaletteCard';

const Palettes = ({
	menuIsActive,
	palettes,
	toggleMenu,
	deletePalette,
	fetchPalettes,
	currentCatalog
}) => {
	return (
		<section className='Palettes'>
			<h2>Palettes</h2>
			{palettes.map(palette => {
				return (
					<PaletteCard
						key={palette.id}
						palette={palette}
						menuIsActive={menuIsActive}
						deletePalette={deletePalette}
						fetchPalettes={fetchPalettes}
						toggleMenu={toggleMenu}
						currentCatalog={currentCatalog}
					/>
				);
			})}
		</section>
	);
};

export default Palettes;
