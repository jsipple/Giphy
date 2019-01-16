let api = "https://api.giphy.com/v1/gifs/search?";
let apiKey = "&api_key=xtum0fzlz72y6jqpyoxm1zQuqg3Hg1AC";
// this will be what im seaching url will go api + q + apiKey
let q = "&q=star+wars";
let url;
// set variable for if running to get a different one either still or active
function getURL() {
    url = api + apiKey + q
    $.get(url).then(function(gif) {
        for (let i = 0; i < gif.data.length; i++)
        // below creates an image tag and adds it currently showing 25 gifs
        $("#gifs").append($("<img>").attr("src", gif.data[i].images.original_still.url));
    })
}
// below creating a button but not adding text
$("#submit").on("click", function() {
    // creating a button but not adding what i need
    let gifButton = $("<button>").attr("class", "gifBtn").text($("#text").val())
    $("#buttons").append(gifButton), {
        // insert click function here
    };
});
getURL()
console.log(url)