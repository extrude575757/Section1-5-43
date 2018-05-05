// import './utils.js'
// import { square,add } from './utils.js';

// console.log("running is reall!!"+square(7)+add(2));
// to only import a default import do
///  import subtract from './utils.js';
// subtract is default import
//import subtract, {add, square } from './utils.js';
// default import are special because they can be named any thing you want this will work
// import './utils.js';
// import fuckYouBitch, {add, square}  from './utils.js';
// console.log(square(33));
// console.log(fuckYouBitch(9,3));

import fuckWad, {isAdult,canDrink} from './person.js';
// ./ is for relative files
// When getting from just the name webpack will look for the same name in the node modules folder
const age = 139;
console.log('are you an adult '+isAdult(age)+'age: '+age);
console.log('are you able to drink '+canDrink(age)+'age: '+age);
console.log('are you a sneior '+fuckWad(age)+ 'age: '+age);