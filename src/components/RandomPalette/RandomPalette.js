import React from 'react';
import './RandomPalette.scss';

const RandomPalette = ({ palette }) => {
	if (!palette.length) {
		return <></>;
	} else {
		const createdColor = palette.map((color, i) => {
			return <div key={i} style={{ background: color.hex.value }}></div>;
		});
		const createdInfo = palette.map((color, i) => {
			return (
				<div key={i}>
					<h5>{color.name.value}</h5>
					<p>{color.hex.value}</p>
					<p>{color.rgb.value}</p>
				</div>
			);
		});
		return (
			<div>
				<div className='random-palette-card'>
					<h4>{palette.paletteName}</h4>
					<div className='colors-holder'>{createdColor}</div>
				</div>
				<div className='colors-info'>{createdInfo}</div>
			</div>
		);
	}
};

export default RandomPalette;
