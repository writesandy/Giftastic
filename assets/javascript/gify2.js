$(document).ready(function() {


    let topics = ["cinderella", "snow white", "christmas", "bruce willis"];
    let gify = $(this).attr("data-name");
    let limit = 10;
;

    
    function displayGif () {

        let gify = $(this).attr("data-name");
        let queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gify + "&api_key=dc6zaTOxFJmzC" + "&limit="+limit;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);

          for (i=0; i < response.data.length; i++) {
               
            // div to hold gif
            let gifyDiv = $("<div class ='gifData'>")
            let gifyURL = response.data[i].images.fixed_height_small_still.url;
            let gifyGoURL = response.data[i].images.fixed_height_small.url;

            let rating = response.data[i].rating;
            pOne = $("<li class='col-md-4'>").text("Rating: " + rating);
            gifyDiv.append(pOne);


            let newImg = $("<img class='col-md-4'>");
            newImg.attr("src", gifyURL);
            gifyDiv.append(newImg);


            // console.log(rating);
            $('#gifies').prepend(gifyDiv)

            // console.log(rating);


            //store the rating
            }
        })
    
    
    }
    
    function showButtons() {
        $("#gify-buttons").empty();
        for (var i = 0; i < topics.length; i++){
    
        let a = $("<button>");
    
        a.addClass("gify-btn")
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
 //       console.log(topics[i])
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
    
    
    $(document).on("click", ".gify-btn", displayGif);
    
    
    
    showButtons();
    
    });