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

    // console.log(data);
});

// !!! change Brave back to search
axios.get("http://www.omdbapi.com/?t=" + "Brave" + "&y=&plot=short&apikey=trilogy").then(
    function (response) {
        // Then we print out the imdbRating
        // console.log(JSON.stringify(response.data, null, 2));
        console.log("Title: " + response.data.Title);
        console.log("Year: " + response.data.Year);
        console.log("Rated: " + response.data.Rated);
        console.log(response.data.Ratings[1].Source + " Rating: " + response.data.Ratings[1].Value);
        console.log("Country: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);

        //  If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

    //  * If you haven't watched "Mr. Nobody," then you should: <http://www.imdb.com/title/tt0485947/>

    //  * It's on Netflix!
    }
);

// !!! change Jinjer back to artist
axios.get("https://rest.bandsintown.com/artists/" + "Jinjer" + "/events?app_id=codingbootcamp").then(
    function (response) {
        // Then we print out the imdbRating
        console.log(JSON.stringify(response.data.venue[1], null, 2));
        // console.log("The band is playing at: " + response.data.venue.name);
        // console.log("Location: " + response.data.venue.city + ", " + response.data.venue.region) + ", " + response.data.venue.country;
        // console.log("Date MMDDYYYY: " + response.data.venue.datetime);
    }
);

