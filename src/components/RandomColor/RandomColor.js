import React, { useState } from "react";
import { getFiveColors } from '../../util/apiCalls.js'

const GetRandomColors = ({updateArrayOfColors}) => {
    const handleSubmit = async event => { 
        event.preventDefault();
         getFiveColors(updateArrayOfColors)
    }

     return (
          <button
                type="button"
                className="GetColorsBtn"
                onClick={(e) => handleSubmit(e)}
                >
                Get Colors
            </button>
     )

}

export default GetRandomColors