export const getFiveColors = (colorsRequest, model = 'default') => {
    const url = "http://colormind.io/api/";

    const data = {
        model : model,
    }
    if (colorsRequest) {
        data.input = colorsRequest
    }

    var http = new XMLHttpRequest();

    http.onreadystatechange = async () => {
        if(http.readyState == 4 && http.status == 200) {
            var palette = await JSON.parse(http.responseText).result;
            console.log(palette);
            http.response(palette)
        }
    }
    
    http.open("POST", url, true);
    http.send(JSON.stringify(data));
   
}
