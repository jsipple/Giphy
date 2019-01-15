let api = "https://api.giphy.com/v1/gifs/search?";
let apiKey = "&api_key=xtum0fzlz72y6jqpyoxm1zQuqg3Hg1AC";
// this will be what im seaching url will go api + q + apiKey
let q = "&q=star+wars";
let url;
function getURL() {
    url = api + apiKey + q
    $.getJSON(url, function(obj) {
        for (let i = 0; i < obj.data.length; i++)
        // change this to create an image tag not look for one in the html
        $("#img").attr("src", obj.data[i].images.fixed_height_still.url)
    })
}
getURL()
console.log(url)