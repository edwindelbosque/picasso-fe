export const getFiveColors = async ( model = 'default', colorsRequest) => {
    const data = {
        model : model,
    }
    if (!colorsRequest) {
        data.input = colorsRequest
    }
    console.log(data);
    
    return await get(app).get('http://colormind.io/api/').send(data)
}