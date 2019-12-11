import React, { useState }  from "react";
import { getFiveColors,  createPalette} from '../../util/apiCalls.js';
import RandomPalette from "../RandomPalette/RandomPalette.js";
import './RandomColor.scss';

const GetRandomColors = ({arrayOfColors, updateArrayOfColors, userID, currentCatalog}) => {
    const [paletteNameValue, handlePaletteNameValueChange] = useState("");
    const [userIdError, handleUserIdErrorChange] = useState("");

    const handleGenerateColors = async event => { 
        event.preventDefault();
         getFiveColors(updateArrayOfColors)
    }

    const handleSavePalette = async event => {
        console.log('handleSavePalette', arrayOfColors, userID);
        
        if (userID && currentCatalog) {
            console.log('YES TO BOTH PALLETNAME AND CATALOG AND COLOR GENERATED');
            
            const newPalette = {paletteName: paletteNameValue, catalog_id: currentCatalog, user_id: userID, colors: arrayOfColors}
            createPalette(newPalette)
            .then(res => res.json())
            .then( data => console.log('CREATED NEW PALETTE!!', data))
            handlePaletteNameValueChange('')
        } else {
            handleUserIdErrorChange("ERROR")
        }
    }

    const canBeSubmitted = () => {
        return (paletteNameValue.length > 0 && currentCatalog > 0 && arrayOfColors.length)
    }

    const isEnabled = canBeSubmitted()

     return (
        <section className="random-generator__section">
            <div className="random-generator__div-header">
                <div className="palette-name__label-and__input">
                    <label htmlFor="palette-name" className="form-login email-login__label">
                        Palette Name
                    </label>
                    <input
                        className="palette-name__input"
                        id="palette-name"
                        type="text"
                        name="palette-name"
                        placeholder="Enter Palette Name"
                        onChange={ e => handlePaletteNameValueChange(e.target.value)}
                        value={paletteNameValue}
                    />
                </div>
                <button
                    type="button"
                    className="SavePaletteBtn"
                    disabled={!isEnabled}
                    onClick={(e) => handleSavePalette(e)}
                    >
                    Save Palette
                </button>
                <button
                    type="button"
                    className="GenerateColorsBtn"
                    onClick={(e) => handleGenerateColors(e)}
                    >
                    Generate Colors
                </button>
            </div>
            <RandomPalette palette={arrayOfColors} />
        </section>
     )

}

export default GetRandomColors