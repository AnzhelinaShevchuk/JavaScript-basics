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

for (let i = 0; i < 2; i++) {
  const a = prompt('one of the last movies you watched?', ''),
        b = prompt('how much would you rate it?', '');

  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done');
  } else {
      console.log('error');
      i--;
  }
} 

/* let i = 0;
do {
const a = prompt('one of the last movies you watched?', ''),
    b = prompt('how much would you rate it?', '');
if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done');
      i++;
  } else {
      console.log('error');
  }
} while(i < 2) */

/* let i = 0;
while(i < 2) {
const a = prompt('one of the last movies you watched?', ''),
    b = prompt('how much would you rate it?', '');
if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done');
      i++;
  } else {
      console.log('error');
  }
} */

if (personalMovieDB.count < 10) {
  console.log("Quite a few movies watched");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("You're a classic viewer.");
} else if (personalMovieDB.count >= 30) {
  console.log("You are a cinephile");
} else {
  console.log("error");
}

console.log(personalMovieDB);