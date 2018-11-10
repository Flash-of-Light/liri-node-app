###### liri-node-app

LIRI (Language Interpretation and Recognition Interface) - an application built using Node.js to return media information based on commands.  It utilizes gitignore, dotenv, moment, spotify, and request.  Specific dependencies include: "dotenv": "^6.1.0", "moment": "^2.22.2", "node-spotify-api": "^1.0.7", and "request": "^2.88.0".

**Input commands:**

```
concert-this

spotify-this-song

movie-this

do-what-it-says
```

**concert-this**

specific syntax: node liri.js concert-this (band name here)

This will request information from the bandsintown API and return the venue name, location, and date for upcoming concerts.
Screenshot of use:

**spotify-this-song**

specific syntax: node liri.js spotify-this-song (song name here)

This will request information from the spotify API and return the artist, song name, preview link of the song, and the song's album.

Screenshot of use:
![spotify usage]

**movie-this**
specific syntax: node liri.js

An example of the default movie selection Mr. Nobody if no movie name is chosen.
![movie-this with no subject](https://github.com/Jay-Goss/liri-node-app/blob/master/pictures/movie1.png)

An example of the information returned for a specific selection.
![movie-this with a movie picked](https://github.com/Jay-Goss/liri-node-app/blob/master/pictures/movie2.png)

**do-what-it-says**

specific syntax:
