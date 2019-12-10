import React from 'react';
import './Palettes.scss';
import PaletteCard from '../PaletteCard/PaletteCard';

const Palettes = () => {
	return (
		<section className='Palettes'>
			<h2>Palettes</h2>
			<PaletteCard />
		</section>
	);
};

export default Palettes;
