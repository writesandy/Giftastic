$(document).ready(function() {


    let topics = ["disney cinderella", "disney snow white", "disney arial", "disney mulan", "disney Aurora", "disney Jasmine", "disney Pocahontas"];
    let gify = $(this).attr("data-name");
    let limit = 10;

;

    
    function displayGif () {

        let gify = $(this).attr("data-name");
        let queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gify + "&api_key=dc6zaTOxFJmzC"+ "&limit=" +limit;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);

          for (i=0; i < response.data.length; i++) {
               

            //info for rating in gifyDiv
            let rating = response.data[i].rating;
            pOne = $("<p>").text("Rating: " + rating);

            //div for gify images

            let gifyDiv = $('<img>');
            
            //attributes for gify div
            gifyDiv.attr('src', response.data[i].images.fixed_height_small_still.url);
            gifyDiv.attr('data-still', response.data[i].images.fixed_height_small_still.url);
            gifyDiv.attr('data-animate', response.data[i].images.fixed_height_small.url);
            gifyDiv.attr('data-state', 'still');
            gifyDiv.addClass('changeAnime');
 
            //prepend rating & gif images to page
            $('#gifies').append(pOne);
            $('#gifies').append(gifyDiv);


            }

            $(".changeAnime").on("click"), function() {

                let state = $(this).attr("data-state");
                console.log(this);
    
                if (state === "still") {
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");
                } else {
                    $(this).attr("src", $(this).data("data-still"));
                    $(this).attr("data-state", "still");
                }
    
            } 

        });
    
        }

 



    //Dynamically create buttons -- create function to build button

    function showButtons() {
        $("#gify-buttons").empty();
        for (var i = 0; i < topics.length; i++){
    
        let a = $("<button>");
    
        a.addClass("gify-btn")
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $("#gify-buttons").append(a);
        }
    
    }
    
    
    // Function for when gify button is clicked
    
    $('#add-gify').on("click", function (event) {
        event.preventDefault();
        let gify = $("#gify-text").val().trim();
        topics.push(gify);
        $('#gify-text').val('');
        showButtons();

        
    });
    
    
    $(document).on("click", ".gify-btn", displayGif);
    
    
    showButtons();
    

});