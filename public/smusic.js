function searchMusic() {
    const searchTerm = document.getElementById('searchInput').value;
    const limit = 10; // Set the limit to the number of results you want
    const apiUrl = `https://itunes.apple.com/search?term=${searchTerm}&entity=musicTrack&limit=${limit}`;
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const musicResults = document.getElementById('musicResults');
            musicResults.innerHTML = ''; // Clear previous results
            if (data.results.length === 0) {
                musicResults.innerHTML = 'No results found.';
            } else {
                data.results.forEach(result => {
                    const musicItem = document.createElement('div');
                    musicItem.className="results";
                    musicItem.innerHTML = `
                    <div class="in_results">
                    <img src="${result.artworkUrl100}" alt="Album Cover"><br>
                    <div class="results_content">
                        <p><strong>Track Name:</strong> ${result.trackName}</p>
                        <p><strong>Artist:</strong> ${result.artistName}</p>
                        <audio controls>
                            <source src="${result.previewUrl}" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio>
                        </div>
                        </div>
                        <hr>
                    `;
                    musicResults.appendChild(musicItem);
                });
            }
        })
        .catch(error => {
            console.error('Error fetching music data:', error);
        });
}