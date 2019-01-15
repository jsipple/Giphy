let api = "https://api.giphy.com/v1/gifs/search?";
let apiKey = "&api_key=xtum0fzlz72y6jqpyoxm1zQuqg3Hg1AC";
// this will be what im seaching url will go api + q + apiKey
let q = "&q=bob";
let url;
function getURL() {
    url = api + apiKey + q
    $.getJSON(url, function(gif) {
        createImg(gif.data[0].images.fixed_height.url)
    })
}
getURL()
console.log(url)