/*
using var can get you into trouble since var can be redefined and renamed
var a = 'stuff';
var a = 'this';
this is legal in javascript and can lead to bugs which is why the teacher says to use let & const
let will not allow you to redefine a variable so let is safer
var, let, & const are function scope & block level scope which is known as block scoping
when somthing is block scope it is bound to functions and code blocks. 
*/

var a = 'stuff';
console.log('hello' + a);
var a = 'more stuff';
console.log(a);
let b = 'boring';
console.log(b);
const fuck = 'lets fuck';
console.log(fuck);