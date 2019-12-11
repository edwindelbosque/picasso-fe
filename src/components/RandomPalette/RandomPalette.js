import React from 'react';
import './RandomPalette.scss';

const RandomPalette = ({palette}) => {
	if (!palette.length) {
		return (<></>)
	} else {
		const createdColor = palette.map( (color, i) => {
			return (<div key={i} style={ {background: color.hex.value}}></div>)
		})
		return (
			<div>
				<div className='random-palette-card'>
					<h4>{palette.paletteName}</h4>
					<div className='colors-holder'>
						{createdColor}
					</div>
				</div>
			</div>
		);
	}

};

export default RandomPalette