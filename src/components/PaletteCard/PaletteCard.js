import React from 'react';
import './PaletteCard.scss';
import Fade from 'react-reveal/Fade';

const PaletteCard = ({ menuIsActive, palette }) => {
	if (palette.id) {
		const colorForPalette = palette.colors.map((color, i) => {
			return <div key={i} style={{ background: color.hex.value }}></div>;
		});
		return (
			<Fade when={menuIsActive} duration={600} delay={150}>
				<div className='PaletteCard'>
					<h4>{palette.paletteName}</h4>
					<div className='colors'>{colorForPalette}</div>
				</div>
			</Fade>
		);
	} else {
		return (
			<> </>
		)
	}
};

export default PaletteCard;
