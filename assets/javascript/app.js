let api = "https://api.giphy.com/v1/gifs/search?";
let apiKey = "&api_key=xtum0fzlz72y6jqpyoxm1zQuqg3Hg1AC";
// this will be what im seaching url will go api + q + apiKey
let q = "&q=star+wars";
let url;
function getURL() {
    url = api + apiKey + q
    $.getJSON(url, function(gif) {
        for (let i = 0; i < gif.data.length; i++)
        // below creates an image tag and adds it currently showing 25 gifs
        $("#gifs").append($("<img>").attr("src", gif.data[i].images.original.url));
    })
}
getURL()
console.log(url)