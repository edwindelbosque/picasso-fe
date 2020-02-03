import React from 'react';
import './Palettes.scss';
import PaletteCard from '../PaletteCard/PaletteCard';
import { useSelector } from 'react-redux';

const Palettes = ({
	menuIsActive,
	toggleMenu,
	deletePalette,
	fetchPalettes,
	currentCatalog
}) => {
	const palettes = useSelector(state => state.palettes);
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
