import React from 'react';
import './Palettes.scss';
import PaletteCard from '../PaletteCard/PaletteCard';

const Palettes = ({ menuIsActive, palettes }) => {
	return (
		<section className='Palettes'>
			<h2>Palettes</h2>
			{palettes.map(palette => {
				const { id } = palette;
				return (
					<PaletteCard key={id} menuIsActive={menuIsActive} palette={palette} />
				);
			})}
		</section>
	);
};

export default Palettes;
