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

// !!! change "All the Small Things" back to search.

spotify
    .search({ type: 'track', query: 'Perennial', limit: 1, })
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

// !!! change Brave back to search
axios.get("http://www.omdbapi.com/?t=" + "Brave" + "&y=&plot=short&apikey=trilogy").then(
    function (response) {
        // Then we print out the imdbRating
        // console.log(JSON.stringify(response.data, null, 2));

        // console.log("Title: " + response.data.Title);
        // console.log("Year: " + response.data.Year);
        // console.log("Rated: " + response.data.Rated);
        // console.log(response.data.Ratings[1].Source + " Rating: " + response.data.Ratings[1].Value);
        // console.log("Country: " + response.data.Country);
        // console.log("Language: " + response.data.Language);
        // console.log("Plot: " + response.data.Plot);
        // console.log("Actors: " + response.data.Actors);

        //  If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

        //  * If you haven't watched "Mr. Nobody," then you should: <http://www.imdb.com/title/tt0485947/>

        //  * It's on Netflix!
    }
);

// !!! change Jinjer back to artist
axios.get("https://rest.bandsintown.com/artists/" + "BabyMetal" + "/events?app_id=codingbootcamp").then(
    function (response) {
        // Then we print out the imdbRating
        // console.log(JSON.stringify(response.data[0], null, 2));

        // console.log("Performing Artists: " + response.data[0].lineup);
        // console.log("Venue: " + response.data[0].venue.name);
        // console.log("City: " + response.data[0].venue.city);
        // console.log("State: " + response.data[0].venue.region);
        // console.log("Country: " + response.data[0].venue.country);

        // // date format converter
        // var date = new Date(response.data[0].datetime);
        // var newdate = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
        // console.log("Date: " + newdate);
    }
);

