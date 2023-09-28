const express = require('express');
const axios = require('axios');

const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve a simple HTML page with a search form
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Spotify Music Search</title>
      </head>
      <body>
        <h1>Spotify Music Search</h1>
        <form action="/search" method="get">
          <input type="text" name="query" placeholder="Enter a song or artist...">
          <button type="submit">Search</button>
        </form>
        <div id="results"></div>
      </body>
    </html>
  `);
});

// Handle music search requests
app.get('/search', async (req, res) => {
  try {
    const query = req.query.query;
    console.log(query.name);

    // Make a request to the Spotify API to search for tracks
    const response = await axios.get('https://api.spotify.com/v1/search', {
      params: {
        q: query,
        type: 'track',
      },
      headers: {
        Authorization: 'BQBwEvTukhfQY1FdAXzKdA40n0AoFqqsLTvFa6CWiPaWPgvZHTKEYAdW2xmtA7AklCP40DCPaR0wumXSIdihQ5ulSj5AC6wxaqVQdjK9vTXbEPcrotzrp_inAhbDBL-CnNX-MlMSW8uWNnB2K4mLu3JnCYwPRuY7WdUu1FiJE442gOW5zsWjOhckLF8W45EmrjB3yMopJjZEFAwqPpvWADJqzu8JRQdQ6peC5m0GAtEPiCd3ok04nHkkg6NfvhMM_vY2qCxeaGWv5_Vurp8-NHo8', // Replace with your Spotify API access token
      },
    });

    const tracks = response.data.tracks.items;

    // Display search results
    const resultsHtml = tracks.map(track => `<p>${track.name} by ${track.artists[0].name}</p>`).join('');
    res.send(`<h2>Search Results:</h2>${resultsHtml}`);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
