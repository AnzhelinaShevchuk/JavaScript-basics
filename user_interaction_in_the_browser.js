let numberOfFilms;

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genders: [],
  privat: false,

  start: function() {
    numberOfFilms = +prompt("How many films have you already watched?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt("How many films have you already watched?", "");
    }
  },
  rememberMyFilms: function() {
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
  },
  detectPersonaLevel: function() {
    if (personalMovieDB.count < 10) {
      console.log("Quite a few movies watched");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("You're a classic viewer.");
    } else if (personalMovieDB.count >= 30) {
      console.log("You are a cinephile");
    } else {
      console.log("error");
    }
  },
  writeYourGenres: function() {
    for (let i = 1; i <= 3; i++) {
      personalMovieDB.genders[i - 1] = prompt(`Your favorite genders is number ${i}`, '');
      if (personalMovieDB.genders[i - 1] == '' || personalMovieDB.genders[i - 1] == null || !personalMovieDB.genders[i - 1].trim()) {
        i--;
      }
    }

    function logArrayElements(element, index, array) {
      console.log('Your favorite genders ' + index + ' - ' + element);
    }
    personalMovieDB.genders.forEach(logArrayElements)
  },
  toggleVisibleMyDB: function() {
    if (personalMovieDB.privat === false) {
      personalMovieDB.privat = true;
      console.log(personalMovieDB.privat);
    } else if (personalMovieDB.privat === true) {
      personalMovieDB.privat = false
    }
  }
}; 

