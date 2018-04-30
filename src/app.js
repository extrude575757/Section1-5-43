// import './utils.js'
import { square,add } from './utils.js';
import {isAdult,canDrink} from './person.js';
const age = 19;
console.log('are you an adult '+isAdult(age)+'age: '+age);
console.log('are you able to drink '+canDrink(age)+'age: '+age);
console.log("running is reall!!"+square(7)+add(2));