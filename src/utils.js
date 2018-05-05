// exports default exports & named exports
console.log("utils is running works?");
// There are two ways to export a named export
export const square = (x) => {return x*x};
export const add = (x,b) => {return x+b};
const subtract = (a,b) =>  a - b ;
// You can not have more than one default in an export only zero or 1 not more than 1

// There a few ways to export named exports above works also bellow works
export const hit = (x,b) => x/b*x+b ;
// export defaults can be exported a few ways also
//export { add, square, subtract as default };   
export default subtract;
// Also the expression could even be refered to instead of variable for export default
//export default (a,b) => a+a+a+b+b*3;