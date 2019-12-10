import React from 'react';
import './PaletteCard.scss';
import Fade from 'react-reveal/Fade';

const palette = {
	color1: 'lightgray',
	color2: 'green',
	color3: 'pink',
	color4: 'yellow',
	color5: 'gold'
};

const PaletteCard = ({ menuIsActive }) => {
	return (
		<Fade when={menuIsActive} duration={600} delay={150}>
			<div className='PaletteCard'>
				<h4>Prototype Art</h4>
				<div className='colors'>
					<div style={{ background: palette.color1 }}></div>
					<div style={{ background: palette.color2 }}></div>
					<div style={{ background: palette.color3 }}></div>
					<div style={{ background: palette.color4 }}></div>
					<div style={{ background: palette.color5 }}></div>
				</div>
			</div>
		</Fade>
	);
};

export default PaletteCard;
