// Reads and sets variables with the dotenv package.
require("dotenv").config();

// Code to import keys.js file and store it as a variable.
var keys = require("./keys.js");

var Spotify = require('node-spotify-api');
var axios = require("axios");

var fs = require("fs");

//  Takes user input and enters into search
var inputString = process.argv

var search = inputString[2];
var name = inputString[3];

function runCommand() {
    if (search === "spotify-this") {
        var song = name; {
            if (!song)
                song = "Bushes of Love"
        }
        return spotifyThis(song);
    } if (search === "movie-this") {
        var movie = name; {
            if (!movie)
                movie = "The Empire Strikes Back"
        }
        return movieThis(movie);
    } else if (search === "concert-this") {
        var liveShow = name; {
            if (!liveShow)
                liveShow = "Galactic Empire"
        }
        return concertThis(liveShow);
    } else if (search === "do-it") {
        return dewIt();
    } else if (!search) {
        console.log("Please search a song, movie, concert, with 'spotify-this', 'movie-this,' 'concert-this', followed by the search query or just 'do-it'")
        return;
    }
}
// Access Spotify keys using the keys.js
var spotify = new Spotify(keys.spotify);

function spotifyThis(song) {
    spotify
        .search({ type: 'track', query: song, limit: 1, })
        .then(function (response) {

            var spotLink = response.tracks.items[0]
            // console.log(response.tracks.items[0]);
            console.log("Artist: " + spotLink.artists[0].name);
            console.log("Album: " + spotLink.album.name);
            console.log("Song title: " + spotLink.name);
            console.log("Preview link: " + spotLink.preview_url);

        })
        .catch(function (err) {
            console.log(err);
        });
}

function movieThis(movie) {
    axios.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy").then(
        function (response) {
            // console.log(JSON.stringify(response.data, null, 2));

            console.log("Title: " + response.data.Title);
            console.log("Year: " + response.data.Year);
            console.log("Rating: " + response.data.imdbRating);
            console.log(response.data.Ratings[1].Source + " Rating: " + response.data.Ratings[1].Value);
            console.log("Country: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);
        }
    );
}

// !!! change Jinjer back to artist by concert-this
function concertThis(liveShow) {
    axios.get("https://rest.bandsintown.com/artists/" + liveShow + "/events?app_id=codingbootcamp").then(
        function (response) {
            // Then we print out the imdbRating
            // console.log(JSON.stringify(response.data[0], null, 2));

            console.log("Performing Artists: " + response.data[0].lineup);
            console.log("Venue: " + response.data[0].venue.name);
            console.log("City: " + response.data[0].venue.city);
            console.log("State: " + response.data[0].venue.region);
            console.log("Country: " + response.data[0].venue.country);

            // date format converter
            var date = new Date(response.data[0].datetime);
            var newdate = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
            console.log("Date: " + newdate);
        }
    );
}

function dewIt() {
    fs.readFile("random.txt", "utf8", function (error, data) {

        if (error) {
            return console.log(error);
        }

        console.log(data);

        var dataArr = data.split(", ");

        var search = dataArr[0]
        var name = dataArr[1]

        if (search === "spotify-this") {
            return spotifyThis(name);
        } else if (search === "movie-this") {
            return movieThis(name);
        } else if (search === "concert-this") {
            return concertThis(name);
        }
        // runCommand(search, name);


    });
}

runCommand();
// var runThis = function(argOne, argTwo) {
//     runCommand(argOne, argTwo);
// }

// runThis(process.argv[2], process.argv.slice(3).join(" "));
