import React from 'react';

const RandomPalette = ({palette}) => {
	if (!palette.length) {
		return (<></>)
	} else {
		const createdColor = palette.map( (color, i) => {
			return (<div key={i} style={ {background: color.hex.value}}></div>)
		})
		return (
			<div>
				<div className='PaletteCard'>
					<h4>{palette.paletteName}</h4>
					<div className='colors'>
						{createdColor}
					</div>
				</div>
			</div>
		);
	}

};

export default RandomPalette