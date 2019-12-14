import {getPalettes, getCatalogs, createPalette, saveCatalog } from './apiCalls.js'

const newUserCatalogAndPalettes = async (userId) => {

    // takes in new user id
    // functon needs to create a new catalog using the user id
    const newCatalog = await saveCatalog({user_id: userId})
    //  create two palettes and save them each needs the catalog id
    getColorPalette()
    // needs these: const { catalog_id, user_id, paletteName, colorsToString } = newPalette;
}

