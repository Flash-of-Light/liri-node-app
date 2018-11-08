require("dotenv").config();

console.log(process.env.SPOTIFY_ID) 
console.log(process.env.SPOTIFY_SECRET)

var spotify = new Spotify(keys.spotify);

//Make it so liri.js can take in one of the following commands:

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

// concert-this
function concert() {
// https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp
};

// spotify-this-song
function spotify() {

};

// movie-this
function movie() {

};

// do-what-it-says
function doWhat() {

};