import React from 'react';
import './PaletteCard.scss';

const PaletteCard = () => {
	return (
		<div className='PaletteCard'>
			<h4>Palette Name</h4>
			<div className='colors'>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default PaletteCard;
