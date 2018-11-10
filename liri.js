require("dotenv").config();

var keys = require("./key")
// var random = require("random.txt")
var fs = require("fs");

fs.readFile("key.js", "utf8", function(error, data) {

    if (error) {
      return console.log(error);
    }
    // console.log(process.env.SPOTIFY_ID) 
    // console.log(process.env.SPOTIFY_SECRET)
});

// function spotify(keys) {
//   this.keys = keys  
// }

// //this spotify var will be the AP ID key to use in my
// var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var media;
    if (process.argv[3] == undefined) {
        media = 'Mr. Nobody';
    } 
    else 
        media = process.argv[3];
//split strings with spaces in them and add a + instead to format the search
media = media.split(' ').join('+');

switch(command) {
    case "concert-this":
        concert();
        break;
    case "spotify-this-song":
        spotify();
        break;
    case "movie-this":
        movie();
        break;
    case "do-what-it-says":
        doWhat();
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
        var concertData = JSON.parse(body);
        console.log(concertData.venue)
        console.log(concertData.offers)
        console.log(concertData.offers.venue)
        console.log(JSON.parse(body).venue.name);
    };
});
};

// 2nd Functionality
// spotify-this-song
function spotify() {
    console.log(spotify)
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
};


