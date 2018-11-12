//all the relevant require connections
require("dotenv").config();
var moment = require("moment");
var keys = require("./key")
var request = require('request');
var fs = require("fs");
var Spotify = require("node-spotify-api");
// //this spotify var will be the AP ID key to use in my
var spotify = new Spotify(keys.spotify);

//allows the spotify keys to be read from another file
fs.readFile("key.js", "utf8", function(error, data) {

    if (error) {
      return console.log(error);
    }
    // console.log(process.env.SPOTIFY_ID) 
    // console.log(process.env.SPOTIFY_SECRET)
});

//structure my inputs 
var command = process.argv[2];
var media;
    if (process.argv[3] == undefined) {
        media = 'Mr. Nobody';
    } 
    else 
        // media = process.argv[3];
        media = process.argv.slice(3).join(" ");

// my switchboard allocating relevant functions to the correct inputs
switch(command) {
    case "concert-this":
        concert();
        break;
    case "spotify-this-song":
        spotifySearch();
        break;
    case "movie-this":
        movie();
        break;
    case "do-what-it-says":
        doWhat();
    default:
        syntaxError();
};

// 1st Functionality
// concert-this
function concert() {
    var request = require("request");

    request("https://rest.bandsintown.com/artists/" + media + "/events?app_id=codingbootcamp", function(error, response, body) {
    
        // If the request is successful (i.e. if the response status code is 200)
        //venue name, location, date in MM/DD/YYYY format using moment.js
        if (!error && response.statusCode === 200) {
        // console.log(JSON.parse(body).venue);
        // console.log(JSON.parse(datetime))
        // console.log(JSON.parse(body));
        var concertData = JSON.parse(body)[0];
        console.log("The venue name is " + concertData.venue.name);
        console.log("The venue city is " + concertData.venue.city);
        console.log("The venue country is " + concertData.venue.country);
        console.log("The date of the concert is " + moment(concertData.datetime).format("MM/DD/YYYY"));
        console.log("-----------------")
        var concertDataOne = JSON.parse(body)[1];
        console.log("The venue name is " + concertDataOne.venue.name);
        console.log("The venue city is " + concertDataOne.venue.city);
        console.log("The venue country is " + concertDataOne.venue.country);
        console.log("The date of the concert is " + moment(concertDataOne.datetime).format("MM/DD/YYYY"));  
    };
});
};

// 2nd Functionality
// spotify-this-song
function spotifySearch() {
    spotify.search({ type: 'track', query: media, limit: 1 }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
        // artist, song name, preview link to spotify, song's album
        console.log("--------------------------------------");
        var spotifyData = data;
        
        console.log("The song artist is " + spotifyData.tracks.items[0].album.artists[0].name);
        console.log("The song name is " + spotifyData.tracks.items[0].name);
        console.log("The spotify URL for the track is " + spotifyData.tracks.items[0].preview_url);
        console.log("The song album is titled:  " + spotifyData.tracks.items[0].album.name );        
        
        // console.log(data.items);
        // console.log(spotifyData.items[0]);
        // console.log(spotifyData.tracks.items.artist);
        // console.log(spotifyData.tracks.items.album);
        // // console.log(spotifyData.tracks.items);

        // console.log(JSON.parse(data)); 
      });
};

// 3rd Functionality
// movie-this
// var media = ''
function movie() {
    var request = require("request");

    request("http://www.omdbapi.com/?t=" + media + "&y=&plot=short&apikey=trilogy", function(error, response, body) {
    
      // If the request is successful (i.e. if the response status code is 200)
      if (!error && response.statusCode === 200) {
    
        // console.log(JSON.parse(body))
        console.log("The movie's title is: " + JSON.parse(body).Title);
        console.log("The movie's release year is: " + JSON.parse(body).Year);
        console.log("The movie's IMDB rating is: " + JSON.parse(body).imdbRating);
        console.log("The movie's production country is: " + JSON.parse(body).Country);
        var rottenT = JSON.parse(body).Ratings[1];
        // console.log(Object.entries(rottenT));
        // console.log(rottenT);
        Object.entries(rottenT).forEach(([key, value]) => {
            console.log("The movie's Rotten Tomatoes rating is: " + `${value}`)});
        // Object.entries(rottenT).forEach(([key, value]) => {
        //     console.log(`${value}`)});
        // console.log(`The movie's Rotten Tomatoes rating is: ${JSON.parse(body).Ratings[1]}`);
        console.log("The movie's language is: " + JSON.parse(body).Language);
        console.log("The movie's plot is as follows: " + JSON.parse(body).Plot);
        console.log("The movie's actors are " + JSON.parse(body).Actors);
      };
    });
};

// 4th Functionality
// do-what-it-says
function doWhat() {
console.log("dowhat");
fs.appendFile("random.txt", actorData + divider, function(err) {
    if (err) throw err;
    console.log(actorData);
  });
};

//syntax error
function syntaxError() {
    console.log("That syntax is not supported. Please see the readme.txt.")
};