'use strict';

var _utils = require('utils.js');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('add' + (0, _utils.add)(5, 3)); // import './utils.js'
// import { square,add } from './utils.js';
// import {isAdult,canDrink} from './person.js';
// const age = 19;
// console.log('are you an adult '+isAdult(age)+'age: '+age);
// console.log('are you able to drink '+canDrink(age)+'age: '+age);
// console.log("running is reall!!"+square(7)+add(2));

console.log((0, _utils.square)(5));
console.log((0, _utils2.default)(9, 3));
