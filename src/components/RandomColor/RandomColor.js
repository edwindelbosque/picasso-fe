import React, { useState } from 'react';
import { getFiveColors, createPalette } from '../../util/apiCalls.js';
import RandomPalette from '../RandomPalette/RandomPalette.js';
import './RandomColor.scss';
import SaveMenu from '../SaveMenu/SaveMenu';
const GetRandomColors = ({
	arrayOfColors,
	updateArrayOfColors,
	userID,
	currentCatalog,
	openSaveMenu,
	catalogs,
	showSaveMenu,
	closeSaveMenu,
	resetCurrentCatalog
}) => {
	const [paletteNameValue, handlePaletteNameValueChange] = useState('');
	const [showCatalogs, handleShowCatalogsChange] = useState(false);
	const handleGenerateColors = async event => {
		event.preventDefault();
		getFiveColors(updateArrayOfColors);
		checkToShowCatalog();
	};
	const checkToShowCatalog = () => {
		handleShowCatalogsChange(currentCatalog ? false : true);
	};
	const handleSavePalette = async event => {
		if (userID && currentCatalog === 0) {
			handleShowCatalogsChange(true);
			openSaveMenu();
		} else {
			const newPalette = {
				paletteName: paletteNameValue,
				catalog_id: currentCatalog,
				user_id: userID,
				colorsToString: arrayOfColors
			};
			createPalette(newPalette);
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
		createPalette(newPalette);
		handlePaletteNameValueChange('');
		resetCurrentCatalog();
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
					<button
						type='button'
						className='SavePaletteBtn'
						disabled={!isEnabled}
						onClick={e => handleSavePalette(e)}>
						Save
					</button>
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
				closeSaveMenu={closeSaveMenu}
				showSaveMenu={showSaveMenu}
				postPalette={postPalette}
			/>
		</>
	);
};
export default GetRandomColors;
