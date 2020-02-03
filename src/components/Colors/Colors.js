import React from 'react';
import './Colors.scss';
import locked from '../../assets/locked.svg';
import unlocked from '../../assets/unlocked.svg';
import { useSelector, useDispatch } from 'react-redux';

const Colors = () => {
	const dispatch = useDispatch();
	const lockedColors = useSelector(state => state.lockedColors);
	const colors = useSelector(state => state.colors);

	if (!colors.length) {
		return <></>;
	} else {
		const createdColor = colors.map((color, i) => {
			return (
				<div
					key={i}
					className='color-square'
					style={{ background: color.hex.value }}>
					{lockedColors[i] === 'N' ? (
						<img
							src={unlocked}
							onClick={() =>
								dispatch({
									type: 'UPDATE_LOCKS',
									i: i,
									color: [color.rgb.r, color.rgb.g, color.rgb.b]
								})
							}
							alt='unlocked'
							className='show'
						/>
					) : (
						<img
							src={locked}
							onClick={() =>
								dispatch({
									type: 'UPDATE_LOCKS',
									i: i,
									color: 'N'
								})
							}
							alt='locked'
							className='show'
						/>
					)}
				</div>
			);
		});
		const createdInfo = colors.map((color, i) => {
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
					<h4>{colors.paletteName}</h4>
					<div className='colors-holder'>{createdColor}</div>
				</div>
				<div className='colors-info'>{createdInfo}</div>
			</div>
		);
	}
};

export default Colors;
