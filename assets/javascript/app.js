let api = "https://api.giphy.com/v1/gifs/search?";
let apiKey = "&api_key=xtum0fzlz72y6jqpyoxm1zQuqg3Hg1AC";
// this will be what im seaching url will go api + q + apiKey
let q = "&q=star+wars";
let ratings = '';
let url;
// set variable for if running to get a different one either still or active
function getURL() {
    url = api + apiKey + q
    $.get(url).then(function(obj) {
        for (let i = 0; i < obj.data.length; i++) {
        // below creates an image tag and adds it currently showing 25 gifs
        // this ratings is not working when appended
        ratings = $("<p>").text(obj.data[i].rating)
        let gifImg = $("<img>").attr("src", obj.data[i].images.original_still.url).attr("class", "still")
        gifImg.append(ratings)
        $("#gifs").append(gifImg);
    }
})
}
// using this to load the original instead of the still or vise versa
// can i get the obj.data[i] from what i'm clicking? maybe something wierd like making i the class
// $(".still").on("click", function() {
//     $("this").attr.("src", ).removeClass("still").addClass("gif")
// })
// $(".gif").on("click", function() {
//     $("this").attr.("src", ).removeClass("gif").addClass("still")
// })
// below creating a button but not adding text
$("#submit").on("click", function() {
    // creating a button but not adding what i need
    let gifButton = $("<button>").attr("class", "gifBtn").text($("#text").val())
    $("#buttons").append(gifButton), {
        // insert click function here
    };
});
// not executing on click
$(".gifBtn").on("click", function() {
    q = $(this).textContent
    console.log(q)
    getURL();
});
getURL();
console.log(url)