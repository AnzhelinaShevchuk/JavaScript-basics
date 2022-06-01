let numberOfFilms;

function start() {
	numberOfFilms = +prompt("How many films have you already watched?", "");
  
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
  numberOfFilms = +prompt("How many films have you already watched?", "");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genders: [],
  privat: false,
}

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonaLevel() {
if (personalMovieDB.count < 10) {
  console.log("Quite a few movies watched");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("You're a classic viewer.");
} else if (personalMovieDB.count >= 30) {
  console.log("You are a cinephile");
} else {
  console.log("error");
}
}

detectPersonaLevel();


function shovMyDB (hidden) {
	if (!hidden) {
  console.log(personalMovieDB);
  }
}

shovMyDB(personalMovieDB.privat);

function writeYourGenres() {
for (let i = 1; i <= 3; i++) {
       
      personalMovieDB.genders[i-1] = prompt(`Your favorite genders is number ${i}`, '');
      
} 
}
writeYourGenres();
console.log(personalMovieDB);