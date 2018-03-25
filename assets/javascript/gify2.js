$(document).ready(function() {


    let topics = ["disndy cinderella", "disney snow white", "merry christmas", "bruce willis"];
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
            let gifyDiv = $("<div class ='gifData': class = 'col-md-2'>")
            let gifyURL = response.data[i].images.fixed_height_small_still.url;
            let gifyGoURL = response.data[i].images.fixed_height_small.url;

            let rating = response.data[i].rating;
            pOne = $("<p>").text("Rating: " + rating);
            gifyDiv.append(pOne);

            let dataStill = $("<img class='col-md-2': data-state='still' : class='gif'>");
            dataStill.attr("src", gifyURL);
            gifyDiv.append(dataStill);

            let dataAnimate = $("<img class='col-md-2': data-state='animate' : class ='gif'>");
            dataAnimate.attr("src", gifyURL);
            gifyDiv.append(dataAnimate);
            console.log(dataAnimate)




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
        $('#gify-text').val('');
        showButtons();

        
    })
    
    
    $(document).on("click", ".gify-btn", displayGif);
    
    
    
    showButtons();
    
    });