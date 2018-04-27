const square = function(x){
    return x * x;
}
console.log(square(8));

const squareArrow = (x) => {
    return x^2;
}
console.log(squareArrow(8));
// With arrow function they allow you to place everything on one line if it has one line
const squareAr = (x) => x*2;
console.log(squareAr(4));

const getFirstName = (x) => x.split(" ")[0];
const getLastName = (x) => {
return x.split(" ")[1];
} 
console.log("First Name"+getFirstName("Franky Fucks"));
console.log("Last Name" +getLastName("Franky Fucks"));
