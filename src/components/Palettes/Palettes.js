import React from 'react';
import './Palettes.scss';
import PaletteCard from '../PaletteCard/PaletteCard';

const Palettes = ({ menuIsActive }) => {
	return (
		<section className='Palettes'>
			<h2>Palettes</h2>
			<PaletteCard menuIsActive={menuIsActive} />
		</section>
	);
};

export default Palettes;
