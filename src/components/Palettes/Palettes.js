import React from 'react';
import './Palettes.scss';
import PaletteCard from '../PaletteCard/PaletteCard';
import { useDispatch } from 'react-redux';

const Palettes = ({
	isMenuOpen,
	matchingPalettes,
	fetchPalettes,
	currentCatalog
}) => {
	const dispatch = useDispatch();
	const handleClick = () => {
		dispatch({
			type: 'TOGGLE_MENU',
			boolean: !isMenuOpen
		});
	};

	return (
		<section className='Palettes'>
			<h2>Palettes</h2>
			{matchingPalettes.map(palette => {
				return (
					<PaletteCard
						key={palette.id}
						palette={palette}
						menuIsActive={isMenuOpen}
						fetchPalettes={fetchPalettes}
						toggleMenu={handleClick}
						currentCatalog={currentCatalog}
					/>
				);
			})}
		</section>
	);
};

export default Palettes;
