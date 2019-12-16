import React from 'react';
import './PaletteCard.scss';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

const PaletteCard = ({
	menuIsActive,
	palette,
	deletePalette,
	fetchPalettes,
	toggleMenu,
	currentCatalog
}) => {
	if (palette.id) {
		const colorForPalette = palette.colors.map((color, i) => {
			return <div key={i} style={{ background: color.hex.value }}></div>;
		});
		return (
			<Fade when={menuIsActive} duration={600} delay={150}>
				<div className='PaletteCard'>
					<Link to={`/catalogs/${currentCatalog}/palettes`}>
						<section
							onClick={async () => {
								await deletePalette(palette);
								fetchPalettes();
								toggleMenu(true);
							}}>
							+
						</section>
					</Link>
					<h4>{palette.paletteName}</h4>
					<div className='colors'>{colorForPalette}</div>
				</div>
			</Fade>
		);
	} else {
		return <> </>;
	}
};

export default PaletteCard;
