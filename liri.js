// Reads and sets variables with the dotenv package.
require("dotenv").config();

// Code to import keys.js file and store it as a variable.
var keys = require("./keys.js");

var Spotify = require('node-spotify-api');
var axios = require("axios");

// omdb search
var search = process.argv[2];

// Access Spotify keys using the keys.js
var spotify = new Spotify(keys.spotify);

spotify.search({ type: 'track', query: 'All the Small Things' }, function (err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }

    console.log(data);
});

axios.get("http://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=trilogy").then(
    function (response) {
        // Then we print out the imdbRating
        console.log("Title: " + response.data);
        // console.log("Year: " + response.data);
        // console.log("IMDB: " + response.data);
        // console.log("Rotten Tomatoes Rating: " + response.data);
        // console.log("Country: " + response.data);
        // console.log("Language: " + response.data);
        // console.log("Plot: " + response.data);
        // console.log("Actors: " + response.data);

        //  If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

    //  * If you haven't watched "Mr. Nobody," then you should: <http://www.imdb.com/title/tt0485947/>

    //  * It's on Netflix!
    }
);

axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
    function (response) {
        // Then we print out the imdbRating
        console.log("The band is playing at: " + response.data);
        // console.log("Location: " + response.data);
        // console.log("Date MMDDYYYY: " + response.data);
    }
);

