# liri-node-app

LIRI (Language Interpretation and Recognition Interface) - an application built using Node.js to return media information based on commands.  It utilizes gitignore, dotenv, moment, spotify, and request.  Specific dependencies include: "dotenv": "^6.1.0", "moment": "^2.22.2", "node-spotify-api": "^1.0.7", and "request": "^2.88.0".

**Input commands:**

```
concert-this

spotify-this-song

movie-this

do-what-it-says
```

**concert-this**

specific syntax: node liri concert-this (band name here)

This will request information from the bandsintown API and return the venue name, location, and date for upcoming concerts.

An example of the data returned for the rock band U2:
![concert-this for U2](https://github.com/Jay-Goss/liri-node-app/blob/master/pictures/U2.png)

**spotify-this-song**

specific syntax: node liri spotify-this-song (song name here)

This will request information from the spotify API and return the artist, song name, preview link of the song, and the song's album.

Screenshot of use:
![spotify-this-song demonstration for Africa](https://github.com/Jay-Goss/liri-node-app/blob/master/pictures/spotify.png)

The song choice will default to The Sign by Ace of Base if no song selection is made.
![spotify-this-song default selection](https://github.com/Jay-Goss/liri-node-app/blob/master/pictures/spotify2.png)

**movie-this**

specific syntax: node liri movie-this (insert movie title here)

This will return selected movie information obtained from the OMDB API including movie title, release year, production country, Rotten Tomatoes rating, language, plot, and actors.

An example of the default movie selection Mr. Nobody if no movie name is chosen:
![movie-this with no subject](https://github.com/Jay-Goss/liri-node-app/blob/master/pictures/movie1.png)

An example of the information returned for a specific selection:
![movie-this with a movie picked](https://github.com/Jay-Goss/liri-node-app/blob/master/pictures/movie2.png)

Functionality for multiple-word titles:
![movie-this with a movie picked](https://github.com/Jay-Goss/liri-node-app/blob/master/pictures/movie3.png)

**do-what-it-says**

specific syntax: node liri do-what-it-says

This will run spotify-this-song for the song "I want it that way" and edit the text in the random.txt file.

**syntax error**

If incorrect syntax is used then this message will display.
![syntax error](https://github.com/Jay-Goss/liri-node-app/blob/master/pictures/syntax.png)
