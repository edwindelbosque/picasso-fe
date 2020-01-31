import React, { useState, useEffect } from 'react';
import { getFiveColors, createPalette } from '../../util/apiCalls.js';
import RandomPalette from '../RandomPalette/RandomPalette.js';
import './RandomColor.scss';
import SaveMenu from '../SaveMenu/SaveMenu';
import { Link } from 'react-router-dom';
const GetRandomColors = ({
	arrayOfColors,
	updateColors,
	userID,
	currentCatalog,
	catalogs,
	showSaveMenu,
	toggleSaveMenu,
	updateCurrentCatalog,
	fetchPalettes,
	fetchCatalogs,
	toggleTriggerMenu,
	lockedColors
}) => {
	const [paletteNameValue, handlePaletteNameValueChange] = useState('');

	const handleGenerateColors = async () => {
		getFiveColors(updateColors, lockedColors);
	};

	useEffect(() => {
		handleGenerateColors();
	}, []);

	const handleSavePalette = async event => {
		if (userID && currentCatalog === 0) {
			toggleSaveMenu(true);
		} else {
			const newPalette = {
				paletteName: paletteNameValue,
				catalog_id: currentCatalog,
				user_id: userID,
				colorsToString: arrayOfColors
			};
			await createPalette(newPalette);
			handlePaletteNameValueChange('');
		}
	};

	const postPalette = async id => {
		const newPalette = {
			paletteName: paletteNameValue,
			catalog_id: id,
			user_id: userID,
			colorsToString: arrayOfColors
		};
		await createPalette(newPalette);
		handlePaletteNameValueChange('');
		updateCurrentCatalog(0);
	};

	const canBeSubmitted = () => {
		return paletteNameValue.length > 0 && arrayOfColors.length;
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
					{userID === 0 ? (
						<Link to='/signup'>
							<button
								type='button'
								className='SavePaletteBtn'
								disabled={!isEnabled}
								onClick={() => toggleTriggerMenu(true)}>
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
				<RandomPalette palette={arrayOfColors} />
			</section>
			<SaveMenu
				catalogs={catalogs}
				toggleSaveMenu={toggleSaveMenu}
				showSaveMenu={showSaveMenu}
				postPalette={postPalette}
				userID={userID}
				fetchPalettes={fetchPalettes}
				fetchCatalogs={fetchCatalogs}
			/>
		</>
	);
};
export default GetRandomColors;
