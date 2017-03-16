function searchWIki(searchTerm) {
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm.split(',')[0] + "&format=json&callback=?";
    $.ajax({
            url: url,
            type: 'GET',
            contentType: "application/json; charset=utf-8",
            async: false,
            dataType: "json",
            //  data drops here
            success: function (data, status, jqXHR) {
                //console.log(data);
                $("#output1").html('');
                for (var i = 0; i < data[1].length; i++) {
                    $("#output1").append("<div class='well'><a href=" + data[3][i] + "><h2>" + data[1][i] + "</h2>" + "<p>" + data[2][i] + "</p></a></div>");
                }
            }
        })
        .done(function () {
            console.log("success");
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        });
}

function getYoutubeResults(userSearchTerm) {
    $.getJSON("https://www.googleapis.com/youtube/v3/search", {
            part: "snippet",
            maxResults: 20,
            key: "AIzaSyAMUD_BHo3KndZfwnmbo50I9NzIY3RCvk4",
            q: userSearchTerm,
            type: "video"

        },
        function (receivedApiData) {
            //show the json array received from the API call
            //console.log(receivedApiData);
            // if there are no results it will just empty the list
            if (receivedApiData.pageInfo.totalResults == 0) {
                alert("No video found!");
            }
            //if there are results, call the displaySearchResults
            else {
                displayYoutubeSearchResults(receivedApiData.items);

            }
        });
}

// STEP 3 - using the JSON response (videos), populate the relevant part of your HTML with the variable inside the JSON
function displayYoutubeSearchResults(videosArray) {
    //console.log(videosArray);

    //create an empty variable to store one LI for each one the results
    var buildTheHtmlOutput = "";

    $.each(videosArray, function (videosArrayKey, videosArrayValue) {
        //create and populate one LI for each of the results ( "+=" means concatenate to the previous one)
        buildTheHtmlOutput += "<li>";
        buildTheHtmlOutput += "<p>" + videosArrayValue.snippet.title + "</p>"; //output vide title
        buildTheHtmlOutput += "<a href='https://www.youtube.com/watch?v=" + videosArrayValue.id.videoId + "' target='_blank'>"; //taget blank is going to open the video in a new window
        buildTheHtmlOutput += "<img src='" + videosArrayValue.snippet.thumbnails.high.url + "'/>"; //display video's thumbnail
        buildTheHtmlOutput += "</a>";
        buildTheHtmlOutput += "</li>";
    });

    $(".js-search-results").html(buildTheHtmlOutput);
}



$(function () {
    // enter
    $(".searchTerm").keypress(function (e) {
        if (e.keyCode === 13) {
            var searchTerm = $(".searchTerm").val();
            searchWIki(searchTerm);
            getYoutubeResults(searchTerm);
        }
    });
    // click ajax call
    $("#search").on("click", function () {
        var searchTerm = $(".searchTerm").val();
        searchWIki(searchTerm);
        getYoutubeResults(searchTerm);
    });
});
