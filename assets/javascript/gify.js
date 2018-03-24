$(document).ready(function() {



let topics = ["cinderella", "snow+white", "princess+leia", "pocahontas", "mulan"]

function displayGifies () {
    let gify = $(this).attr("data-name");
    let queryURL = "http://api.giphy.com/v1/gifs/search?q=cinderella&api_key=dc6zaTOxFJmzC";

 
$.ajax ({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response);

});



}



});