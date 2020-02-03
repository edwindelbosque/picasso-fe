import React, { useState, useEffect } from 'react';
import { getFiveColors, createPalette } from '../../util/apiCalls.js';
import RandomPalette from '../RandomPalette/RandomPalette.js';
import './RandomColor.scss';
import SaveMenu from '../SaveMenu/SaveMenu';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const RandomColors = ({ currentCatalog, updateCurrentCatalog }) => {
	const [paletteNameValue, handlePaletteNameValueChange] = useState('');
	const lockedColors = useSelector(state => state.lockedColors);
	const colors = useSelector(state => state.colors);
	const dispatch = useDispatch();
	const catalogs = useSelector(state => state.catalogs);
	const userId = useSelector(state => state.userId);

	const handleGenerateColors = async () => {
		lockedColors.every(element => element === 'N')
			? getFiveColors(dispatch)
			: getFiveColors(dispatch, lockedColors);
	};

	useEffect(() => {
		handleGenerateColors();
	}, []);

	const handleSavePalette = async event => {
		if (userId && currentCatalog === 0) {
			dispatch({ type: 'TOGGLE_SAVE_MENU', boolean: true });
		} else {
			const newPalette = {
				paletteName: paletteNameValue,
				catalog_id: currentCatalog,
				user_id: userId,
				colorsToString: colors
			};
			await createPalette(newPalette);
			handlePaletteNameValueChange('');
		}
	};

	const postPalette = async id => {
		const newPalette = {
			paletteName: paletteNameValue,
			catalog_id: id,
			user_id: userId,
			colorsToString: colors
		};
		await createPalette(newPalette);
		handlePaletteNameValueChange('');
		updateCurrentCatalog(0);
	};

	const canBeSubmitted = () => {
		return paletteNameValue.length > 0 && colors.length;
	};
	const isEnabled = canBeSubmitted();
	return (
		<>
			<section className='random-generator__section'>
				<div className='random-generator__div-header'>
					<div className='palette-name__label-and__input'>
						<input
							className='palette-name__input'
							id='palette-name'
							type='text'
							name='palette-name'
							placeholder='Palette Name'
							onChange={e => handlePaletteNameValueChange(e.target.value)}
							value={paletteNameValue}
						/>
					</div>
					{userId === 0 ? (
						<Link to='/signup'>
							<button
								type='button'
								className='SavePaletteBtn'
								disabled={!isEnabled}
								onClick={() => {
									dispatch({
										type: 'TOGGLE_MENU',
										boolean: true
									});
								}}>
								Save
							</button>
						</Link>
					) : (
						<button
							type='button'
							className='SavePaletteBtn'
							disabled={!isEnabled}
							onClick={e => handleSavePalette(e)}>
							Save
						</button>
					)}
					<button
						type='button'
						className='GenerateColorsBtn'
						onClick={e => handleGenerateColors(e)}>
						Generate Colors
					</button>
				</div>
				<RandomPalette palette={colors} lockedColors={lockedColors} />
			</section>
			<SaveMenu catalogs={catalogs} postPalette={postPalette} />
		</>
	);
};
export default RandomColors;
