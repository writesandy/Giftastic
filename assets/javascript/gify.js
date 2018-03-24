$(document).ready(function() {


let topics = ["cinderella", "snow+white", "princess+leia", "pocahontas", "mulan"];
const gify = $(this).attr("data-name");

function displayGifies () {

    let queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gify + "&api_key=dc6zaTOxFJmzC";

 

    $.ajax ({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log('url: ' +response.data[0].images.original.url);
        console.log('rating: ' +response.data[0].rating)

       
    let gifyDiv = $("<div class='gify'>");
    let rating = response.data[0].rating;

    $("#gifies").append(gifyDiv)

    let pOne = $("<p>").text("Rating: " +rating);

    // append rating

    gifyDiv.append(pOne);

    // Retrieving url for image

    let imgURL = response.data[i].images.original.url;

    // Element to image

    let image = $("<img>").attr("src", imgURL);

    gifyDiv.append(image);



});
}

function showButtons() {
    $("#gify-buttons").empty();
    console.log(topics)
    for (var i = 0; i < topics.length; i++){

    var a = $("<button>");

    a.addClass("gify-btn")
    a.attr("data-name", topics[i]);
    a.text(topics[i]);
    console.log(topics[i])
    $("#gify-buttons").append(a);
    }
}




showButtons();

});