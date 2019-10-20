$(document).ready(function () {
    var gif = ['Cats', 'Dogs', 'Teen Titans'];
    renderButtons()
    
    
    $(".submit").on("click", function () {
        var input = $("#search").val().trim();
        var key = '7gKa3fmHF2VE4q6MJ7KgxBlKx8S5phoE'
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + key + "&limit=10&q=" + input;
        $(".gif-display").empty();
        $("#search").val("");
        
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            for (var i = 0; i < response.data.length; i++) {
                var c = $("<img>");
                var rating = $("<div>").html("<p> Rating: " + response.data[i].rating);
                $(c).attr("src", response.data[i].embed_url);
                $(rating).append(c);
                $(".gif-display").append(rating);
            }
            gif.push(input);
            console.log(gif);
            renderButtons()
        });
        return;
    
    });

    $(".gif").on("click", function() {
        console.log("fire");
        var input = $("#gif").attr("data-gif");
        var key = '7gKa3fmHF2VE4q6MJ7KgxBlKx8S5phoE'
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + key + "&limit=10&q=" + input;


        $(".gif-display").empty();
        
        
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            for (var i = 0; i < response.data.length; i++) {
                var c = $("<img>");
                var rating = $("<div>").html("<p> Rating: " + response.data[i].rating);
                $(c).attr("src", response.data[i].embed_url);
                $(rating).append(c);
                $(".gif-display").append(rating);
            }
        });
        renderButtons();

    });

    function renderButtons() {
        $(".btn-gif-display").empty();
        for (var i = 0; i < gif.length; i++) {
            var a = $('<button>');
            a.addClass("gif");
            a.attr("data-gif", gif[i]);
            a.text(gif[i]);
            $(".btn-gif-display").append(a);
        }
        return;
    }

});