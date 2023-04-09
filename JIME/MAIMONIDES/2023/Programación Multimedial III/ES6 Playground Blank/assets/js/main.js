/*
Exercises - Jime Zapolski   

Tips: 
1. To show the result of each exercise write a consol log with the form: console.log('Ex 1.', value or function).
2. Make some research about the usage of reduce, some and many.
3. Create a js file called utils.js and place all helper functions in it. (Ex 10 and 14)

1) Import songs array using modules. OK

2. Use the map function to create a new array with the title of each song in uppercase letters. OK

3. Use the filter function to create a new array with all the songs released before 1975. OK

4. Use destructuring to create a variable that stores the title of the first song in the array. OK

5. Use the find function to get the object representing the song "Hotel California".OK

6. Use the rest operator to create a function that takes any number of arguments and returns their sum. (Tip: Use reduce)OK

7. Use the map function and template literals to create a new array with strings in the format "Title - Artist (Year)" for each song.OK

8. Use destructuring and the filter function to create a new array with the titles of all the songs by The Beatles.

9. Use arrow functions and the reduce function to calculate the total number of years between all the songs' release dates. (Tip: Use reduce)

10. Create a module that exports a function to calculate the average release year of the songs in the input array. (Tip: Use reduce.) // crear en utils, una funcion que calculae el año promedio de las canciones / usar ejemplo de sumar todo y dividir por todo lo que tiene el array

11. Use the find function to get the object representing the song with the longest title.

12. Use destructuring and template literals to log the title, artist and year of the first element of the array.

13. Use the rest operator to create a new array without the first element.

14. Import the filter() function from a utils.js module and use it to create a new array with all the songs that have "Love" in the title.

15. Use the every() method to check if all the songs have titles that are 5 or more characters long.

16. Use the some() method to check if there are any songs from the 80s.

17. Use a template literal to create a string that says "The Beatles released Let It Be in 1970."

18. Use the map() method to create a new array with just the artist names.

19. Create a function called randomMovie that returns one movie from the songs array randomly. Log the call of this function 3 times.

20. Write your own function using at least 3 concepts.

*/

// Exercises - Jime Zapolski  

//1. Import songs array using modules. 
import songs from "./songs.js";
console.log('Ex 1', songs);

//2. Use the map function to create a new array with the title of each song in uppercase letters.
const songsUpper = songs.map(({ title })=> title.toUpperCase());
console.log('Ex 2', songsUpper);

//3. Use the filter function to create a new array with all the songs released before 1975.
const songsBefore = songs
    .filter(({year}) => year <= 1975)
    .map(({title}) => title);
  console.log('Ex 3', songsBefore);

//4. Use destructuring to create a variable that stores the title of the first song in the array.
//const { title: nameFirstSong } = songs[0];
const { title } = songs[0];
console.log('Ex 4',`The title of the first song in the array is ${title}`);

//5. Use the find function to get the object representing the song "Hotel California".
const findSong = songs.find(({ title }) => title === `Hotel California`);
//const findSong = songs.find(hotel=> hotel.title === `Hotel California`);
console.log('Ex 5', findSong);

//6. Use the rest operator to create a function that takes any number of arguments and returns their sum. (Tip: Use reduce)

const sum = (...numbers) => numbers.reduce((accumulator, currentValue) => accumulator + currentValue,0);
console.log('Ex 6', sum(1, 2, 3));//6

//7. Use the map function and template literals to create a new array with strings in the format "Title - Artist (Year)" for each song.
const songsInFormat = songs.map(({ title, artist, year })=> { return `${title} - ${artist} (${year})`});
console.log('Ex 7', songsInFormat);

//8. Use destructuring and the filter function to create a new array with the titles of all the songs by The Beatles.
const titleBeatles = songs
.filter(({ artist}) => artist === 'The Beatles' || artist === 'John Lennon')
.map(({title}) => title)
;
console.log('Ex 8', titleBeatles)

//9. Use arrow functions and the reduce function to calculate the total number of years between all the songs' release dates. (Tip: Use reduce)

const totalNumberOfYears = songs.reduce(
  (accumulator, { year }) => accumulator + year,0);
console.log('Ex 9: suma de los años:', totalNumberOfYears);

// 10. Create a module that exports a function to calculate the average release year of the songs in the input array. (Tip: Use reduce.) // crear en utils, una funcion que calculae el año promedio de las canciones / usar ejemplo de sumar todo y dividir por todo lo que tiene el array
import average from "./utils.js";
console.log('Ex 10, the average release year of the songs is', average(totalNumberOfYears,songs.length));

//11. Use the find function to get the object representing the song with the longest title.
// con el find evaluamos la condicion - si lo cumple o no el objeto que esta evaluando en el momento
// el .length podemos porque toma como string
// el max = le paso todos los objetos separados de songs
// ...songs => te separa songs en varios elementos ; ejemplos [algo,algo.algo]
// devuelvo el length de ese title
// ...songs.map(({title}) => title.length) --> asi devuelve 6,4,6,.... 
// con el max = busco el maximo 
// y sumado al find voy evaluando 1 x 1 si es mayor al max
const longestSong = songs.find(({title}) => title.length === Math.max(...songs.map(({title}) => title.length)));
console.log('Ex 11', longestSong)
//12. Use destructuring and template literals to log the title, artist and year of the first element of the array.
const {title:nombreUno, artist, year } = songs[0];
console.log(`Ex 12, The first:  ${nombreUno} - ${artist} - ${year}`);

//13. Use the rest operator to create a new array without the first element.
const [, ...rest] = songs;
console.log(`Ex 13`, rest);

//14. Import the filter() function from a utils.js module and use it to create a new array with all the songs that have "Love" in the title.
import {haveTitle} from "./utils.js";
//console.log('Ex 14',haveTitleLike(songs,'Bohemian'));
console.log('Ex 14',haveTitle(songs,'Love'));

//15. Use the every() method to check if all the songs have titles that are 5 or more characters long.
const titleMore5 = songs.every(({title}) => title.length >= 5);
console.log('Ex 15',titleMore5);

//16. Use the some() method to check if there are any songs from the 80s.
const yearLess80 = songs.some(({year}) => year >= 1980 && year <=1990);
console.log('Ex 16',yearLess80);

// 17. Use a template literal to create a string that says "The Beatles released Let It Be in 1970."
//const letItBe = haveTitle(songs, 'Let It Be');
const letItBe = songs.find(({ title }) => title === `Let It Be`);
console.log('Ex 17',`${letItBe.artist} released ${letItBe.title} in ${letItBe.year}`);

//18. Use the map() method to create a new array with just the artist names.
const justArtist = songs.map(({artist}) => artist);
console.log('Ex 18 ',justArtist);

//19. Create a function called randomMovie that returns one movie from the songs array randomly. Log the call of this function 3 times.
import {random} from "./utils.js";
//const  {title:nameRandom, artist:artistRandom, year:yearRandom } = songs[random(0,songs.length-1)];
//console.log('Ex 19',`The random song is ${nameRandom} - ${artistRandom} - ${yearRandom}`);

console.log(songs[random(0,songs.length-1)]);

console.log(songs[random(0,songs.length-1)]);

console.log(songs[random(0,songs.length-1)]);

//20. Write your own function using at least 3 concepts.

//si algun artista empieza su nombre con J - use filter y destructuring
const artistWithJ =  songs
.filter(({artist}) => artist[0].includes('J'))
.map(({artist}) => artist);
console.log('Ex 20', 'If some artist start ther name with J',artistWithJ);

// si alguna cancion se hizo este año
const lunchThisYear = songs.some(({year}) => 2023 - year === 0);
console.log('Ex 20', lunchThisYear)

//5. Use the find function to get the object representing the song "Hotel California".
// find solo encuentra el primer registro
const hotelCalifornia = songs.find(({title}) => title === 'Hotel California'); 
console.log('Ex 5 en vivo', hotelCalifornia);