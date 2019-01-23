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
        ratings = $("<p>").text("Rating: " + obj.data[i].rating)
        // console.log(obj.data[i].rating)
        let gifImg = $("<img>").attr("src", obj.data[i].images.original_still.url).attr("class", "still").on("click", function() {
            if ($(this).attr("class") === "still") {
            $(this).attr("src", obj.data[i].images.original.url).toggleClass("still gif")
        } else {
            $(this).attr("src", obj.data[i].images.original_still.url).toggleClass("still gif")
            }
        })
        $("#gifs").append(gifImg).append(ratings);
    }
}).catch( error => console.log("an error"))
}
// using this to load the original instead of the still or vise versa
// can i get the obj.data[i] from what i'm clicking? maybe something wierd like making i the class
// below creating a button but not adding text
$("#submit").on("submit", function(event) {
    // creating a button but not adding what i need
    event.preventDefault();
    let gifButton = $("<button>").attr("class", "gifBtn").text($("#text").val().trim())
    $("#buttons").append(gifButton).on("click", function() {  
    q = ""
    q = `&q=${gifButton.text()}`
    q = q.replace(" ", "+")
    let imgs = $("#gifs")
    imgs.html("")
    getURL();
    })
});


$(".startBtn").on("click", function() {
    q = `&q=${$(this).text()}`
    q = q.replace(" ", "+")
    let imgs = $("#gifs")
    imgs.html("")
    getURL();
    })

// not executing on click
getURL();
console.log(url)