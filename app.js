const API_KEY = "e68e11cfa133a86b87b866c957793b8e";
const BASE_URL = "https://api.themoviedb.org/3";

let searchbox = document.getElementById("searchbox");

searchbox.addEventListener("keyup", onsearch);

function onsearch(event) {
  if (event.keyCode == 13) {
    fetchMovies(searchbox.value);
  }
}

function fetchMovies(query) {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`;
  fetch(url)
    .then(response => response.json())
    .then(responseBody => showMovies(responseBody.results));
}

function showMovies(movies) {
  const result = document.getElementsByClassName("result")[0];
  result.classList.remove("hidden");
  result.innerHTML = "";
  for (let i = 0; i < movies.length; i++) {
    const movieElement = getMovieElement(movies[i]);
    result.append(movieElement);
  }
}

function getMovieElement(movie) {
  const movieElement = document.createElement("div");
  movieElement.className = "movie";
  movieElement.innerHTML = `<img class="movie-poster" src="https://image.tmdb.org/t/p/w185${movie.poster_path}">
        <div class="movie-content">
          <div class="movie-title">${movie.title}</div>
          <div class="movie-overview"
          ${movie.overview}
          </div>
          </div>`;

  return movieElement;
}
