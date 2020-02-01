import React from 'react';
import './RandomPalette.scss';
import locked from '../../assets/locked.svg';
import unlocked from '../../assets/unlocked.svg';

let classNames = require('classnames');

const RandomPalette = ({ palette, lockedColors }) => {
	if (!palette.length) {
		return <></>;
	} else {
		const createdColor = palette.map((color, i) => {
			let unlockClass = classNames({
				show: lockedColors[i] === 'N',
				hide: lockedColors[i] !== 'N'
			});
			let lockClass = classNames({
				show: lockedColors[i] !== 'N',
				hide: lockedColors[i] === 'N'
			});
			return (
				<div
					key={i}
					className='color-square'
					style={{ background: color.hex.value }}>
					<img src={unlocked} alt='unlocked' className={unlockClass} />
					<img src={locked} alt='locked' className={lockClass} />
				</div>
			);
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
