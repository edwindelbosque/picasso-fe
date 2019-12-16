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
	const handleDelete = async () => {
		await deletePalette(palette);
		await fetchPalettes();
		toggleMenu(true);
	};

	if (palette.id) {
		const colorForPalette = palette.colors.map(color => {
			return (
				<div
					key={color.hex.value}
					style={{ background: color.hex.value }}></div>
			);
		});
		return (
			<Fade when={menuIsActive} duration={600} delay={150}>
				<div className='PaletteCard'>
					<Link to={`/catalogs/${currentCatalog}`}>
						<section onClick={() => handleDelete()}>+</section>
					</Link>
					<Link
						key={palette.id}
						to={`/catalogs/${palette.catalog_id}/palettes/${palette.id}`}
						onClick={() => {
							toggleMenu(false);
						}}>
						<h4>{palette.paletteName}</h4>
						<div className='colors'>{colorForPalette}</div>
					</Link>
				</div>
			</Fade>
		);
	} else {
		return <> </>;
	}
};

export default PaletteCard;
