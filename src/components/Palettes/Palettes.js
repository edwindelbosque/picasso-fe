import React from 'react';
import './Palettes.scss';
import PaletteCard from '../PaletteCard/PaletteCard';
import { useSelector } from 'react-redux';

const Palettes = ({
	menuIsActive,
	matchingPalettes,
	toggleMenu,
	deletePalette,
	fetchPalettes,
	currentCatalog
}) => {
	return (
		<section className='Palettes'>
			<h2>Palettes</h2>
			{matchingPalettes.map(palette => {
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
