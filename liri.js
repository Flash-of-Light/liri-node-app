require("dotenv").config();

// console.log(process.env.SPOTIFY_ID) 
// console.log(process.env.SPOTIFY_SECRET)

// var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var media = process.argv[3];

switch(command) {
    case 0:
        command = "concert-this";
        concert();
        break;
    case 1:
        command = "spotify-this-song"
        spotify();
        break;
    case 2:
        command = "movie-this"
        movie();
        break;
    case 3:
        command = "do-what-it-says"
        doWhat();
    case 4:
        error();
        break;
};

// 1st Functionality
// concert-this
// function concert() {
// // https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp
// };

// 2nd Functionality
// spotify-this-song
// function spotify() {

// };

// 3rd Functionality
// movie-this
function movie() {
    var request = require("request");

    // Then run a request to the OMDB API with the movie specified
    request("http://www.omdbapi.com/?t=" + media + "&y=&plot=short&apikey=trilogy", function(error, response, body) {
    
      // If the request is successful (i.e. if the response status code is 200)
      if (!error && response.statusCode === 200) {
    
        // Parse the body of the site 
        // * Title of the movie.
        // * Year the movie came out.
        // * IMDB Rating of the movie.
        // * Rotten Tomatoes Rating of the movie.
        // * Country where the movie was produced.
        // * Language of the movie.
        // * Plot of the movie.
        // * Actors in the movie.

        console.log("The movie's title is: " + JSON.parse(body).imdbRating);
        console.log("The movie's release year is: " + JSON.parse(body).imdbRating);
        console.log("The movie's IMDB rating is: " + JSON.parse(body).imdbRating);
        console.log("The movie's production country is: " + JSON.parse(body).imdbRating);
        console.log("The movie's Rotten Tomatoes rating is: " + JSON.parse(body).imdbRating);
        console.log("The movie's language is: " + JSON.parse(body).imdbRating);
        console.log("The movie's plot is: " + JSON.parse(body).imdbRating);
        console.log("The movie's actors are " + JSON.parse(body).imdbRating);
      }
    });
};

// 4th Functionality
// do-what-it-says
// function doWhat() {

// };