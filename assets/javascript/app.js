$(document).ready(function(){

var fav_gifs = ['dog', 'cats'];

renderButtons();

//displayGifs();



function renderButtons(){
    
   $('#buttons-view').empty();
    
    for(var j = 0; j < fav_gifs.length ; j++){
        
        var a = $("<button>"); //type="button" class="btn btn-outline-dark">');
        //but.addClass("movie-btn");
        a.addClass("btn-outline-dark");
        a.attr('type', 'button');
        a.attr("gif-name",fav_gifs[j]);
        a.text(fav_gifs[j]);

        $("#buttons-view").append(a);
    }
};



function displayGifs(){
    var gif = $(this).attr("gif-name");
    console.log(gif);
    var APIKey = 'yMniQi4EXDO26QvjCByQ8rEtyoIqq9KU';
    var limit = 5;
    var queryURL = 'https://api.giphy.com/v1/gifs/search?q='+gif+'&api_key=yMniQi4EXDO26QvjCByQ8rEtyoIqq9KU&limit=5';
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
      })
        // After the data comes back from the API
        .then(function(response) {
        console.log(response);
        var results = response.data;
        console.log(results);

        for(var i=0; i < results.length; i++){
            var gifDiv = $('<div class="gif">');

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: "+rating);

            var gifImage = $('<img>');

            gifImage.attr("src", results[i].images.fixed_height.url);

            gifDiv.append(p);
            gifDiv.append(gifImage);

            $('#gifs-view').prepend(gifDiv);
        }
    

    });
};
        
        





$('#add-gif').on("click", function(event){
    console.log(event);
    event.preventDefault();

    var gif = $("#gif-input").val().trim();

    fav_gifs.push(gif);

    renderButtons();

    console.log(fav_gifs);
});

$(document).on("click", ".btn-outline-dark", displayGifs);

renderButtons();

});



