'use strict';

/* alert('Hello'); */

/* const result = confirm('Are you have 18 years old?');
console.log(result); */

/* const answer = prompt('Вам есть 18 лет?', '18');
console.log(answer); */
 
/* const answers = [];

answers[0] = prompt('Как вас зовут?','');
answers[1] = prompt('Как ваша фамилия?', '');
answers[2] = prompt('Как ваше отчество?', '');
 
console.log(typeof(answers));
console.log(typeof(null)); */

// const category = 'toys';

// console.log(`https://pornhub.com/${category}/5/${category} 2`, 5 + 5);


// let incr = 10,
// 	decr = 10;

//++incr;
//--decr;

// console.log(--incr, ++decr);
// console.log(5%2);
// console.log(2 + 5 !==  '7');

// const isChecked = false,
// 	isClose = false;

// console.log(isChecked || !isClose);


const numberOfFilms = prompt('Cколько фильмов вы уже посмотрели?', '');

 const personalMovieDB = {
     count : numberOfFilms,   movies: {},   actors: {},   genres : [],
     privat: false

 };
const  a = prompt('Один из последних просмотренных фильмов?', ''),
       b = prompt('На сколько оцените его?', ''),
       c = prompt('Один из последних просмотренных фильмов?', ''),
       d = prompt('На сколько оцените его?', '')


 personalMovieDB.movies[a] = b;
 personalMovieDB.movies[c] = d;

console.log(personalMovieDB);



 






