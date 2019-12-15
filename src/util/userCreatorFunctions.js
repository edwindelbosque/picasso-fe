import {getPalettes, getCatalogs, createPalette, saveCatalog, getFiveColors } from './apiCalls.js'

export const newUserCatalogAndPalettes = async (updateArrayOfColors, newUser, arrayOfColors) => {
    const newCatalog = await saveCatalog({ user_id: newUser.id, catalogName: "First Catalog" })
    console.log(newCatalog);
    
    getFiveColors(updateArrayOfColors)
    .then( () => {
        createPalette({ catalog_id: newCatalog.id, user_id: newUser.id, paletteName: "First Palette", colorsToString: arrayOfColors })

    })
    getCatalogs()
    getPalettes()
}

