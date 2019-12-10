import React from 'react';
import './PaletteCard.scss';
import Fade from 'react-reveal/Fade';

const PaletteCard = ({ menuIsActive, palette }) => {
	return (
		<Fade when={menuIsActive} duration={600} delay={150}>
			<div className='PaletteCard'>
				<h4>{palette.paletteName}</h4>
				<div className='colors'>
					<div style={{ background: `#${palette.color1}` }}></div>
					<div style={{ background: `#${palette.color2}` }}></div>
					<div style={{ background: `#${palette.color3}` }}></div>
					<div style={{ background: `#${palette.color4}` }}></div>
					<div style={{ background: `#${palette.color5}` }}></div>
				</div>
			</div>
		</Fade>
	);
};

export default PaletteCard;
