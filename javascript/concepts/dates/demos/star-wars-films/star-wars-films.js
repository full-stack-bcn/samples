const fetch = require("node-fetch");

const convertDate = film => {
  film.release = new Date(film.release_date);
  delete film.release_date;
};

const sortStarWarsFilms = films => {
  films.forEach(convertDate);
  films.sort((a, b) => a.release - b.release);
  console.log(
    films.map(f => `${f.release.getFullYear()} ${f.title}`).join("\n")
  );
};

fetch("https://swapi.co/api/films")
  .then(response => response.json())
  .then(json => sortStarWarsFilms(json.results));
