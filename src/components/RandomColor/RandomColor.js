import React from "react";
import { getFiveColors } from '../../util/apiCalls.js'
import RandomPalette from "../RandomPalette/RandomPalette.js";

const GetRandomColors = ({arrayOfColors, updateArrayOfColors}) => {
    const handleSubmit = async event => { 
        event.preventDefault();
         getFiveColors(updateArrayOfColors)
    }
     return (
        <>
        <RandomPalette palette={arrayOfColors} />
        <button
            type="button"
            className="GetColorsBtn"
            onClick={(e) => handleSubmit(e)}
            >
            Get Colors
        </button>
        </>
     )

}

export default GetRandomColors