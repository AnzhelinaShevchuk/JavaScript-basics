const numberOfFilms = +prompt("How many films have you already watched?", "");

//console.log(numberOfFilms);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genders: [],
  privet: false,
}

//console.log(personalMovieDB.count);

const 
 name1 = prompt("one of the last movies you watched?", ""),
 mark1  = prompt("how much would you rate it?", ""),
 name2 = prompt("one of the last movies you watched?", ""),
 mark2  = prompt("how much would you rate it?", "");
 
personalMovieDB.movies[name1] = mark1;
personalMovieDB.movies[name2] = mark2;

console.log(personalMovieDB);