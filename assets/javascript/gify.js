$(document).ready(function() {


let topics = ["cinderella", "snow white", "princess leia", "pocahontas", "mulan"];
let gify = $(this).attr("data-name");
let results = 10;

function displayGifies () {

    let queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=dc6zaTOxFJmzC";

     $.ajax ({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        // console.log('url: ' +response.data[0].images.original.url);
        // console.log('rating: ' +response.data[0].rating)

        let results = response.data;

        for (let i = 0; i < results.length; i++) {
            let rating = results.rating;
            console.log('text');
        }

       
    let gifyDiv = $("<div class='gify'>");
    let rating = response.data[0].rating;

    $("#gifies").append(gifyDiv)


    let pOne = $("<p>").text("Rating: " +rating);
    console.log(rating);

    // append rating

    gifyDiv.append(pOne);

    // Retrieving url for image
top

    // Element to image

    let image = $("<img>").attr("src", imgURL);

    gifyDiv.append(image);



});
}

function showButtons() {
    $("#gify-buttons").empty();
    console.log(topics)
    for (var i = 0; i < topics.length; i++){

    let a = $("<button>");

    a.addClass("gify-btn")
    a.attr("data-name", topics[i]);
    a.text(topics[i]);
    console.log(topics[i])
    $("#gify-buttons").append(a);
    }

}


// Function for when gify button is clicked

$('#add-gify').on("click", function (event) {
    event.preventDefault();
    let gify = $("#gify-text").val().trim();
    topics.push(gify);
    showButtons();
})


$(document).on("click", ".gify-btn", displayGifies);



showButtons();

});