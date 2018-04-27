// ES5 Function with arguments keyword
const adding = function(a, b){
    console.log(arguments); // Arguments shows all arguments even if not explicitly called in function
    return a + b;
}
// When using arrow functions arguments will not be accessible & you should stick with es5 function instead
console.log(adding(5,1));

const user = {
    name: 'rick',
    cities: ['Alabama', 'California','Utah'],
    printPlacesLived: function (){
        console.log(this.name);
        console.log(this.cities);
        const that = this;
    this.cities.forEach(function (city){
        // Cannot call this within this scope a work around is calling a variable equal to this
        console.log(that.name+' has lived in '+city)
    });
    }
};

// With a arrow function you do not need the work around anymore
const user2 = {
    name: 'rick',
    cities: ['Alabama', 'California','Utah'],
    printPlacesLived: function (){
        console.log(this.name);
        console.log(this.cities);
        
    this.cities.forEach((city) => {
        //To call arrow function this way it must be within the es5-function if it was within another arrow function it would not work
        console.log(this.name+' has lived in '+city+' @ user2 arrow function with this keyword');
    });
    }
};
//It works this way as well
const user3 = {
    name: 'rick',
    cities: ['Alabama', 'California','Utah'],
    printPlacesLived(){
        console.log(this.name);
        console.log(this.cities);
    
    this.cities.forEach((city) => {
        //To call arrow function this way it must be within the es5-function if it was within another arrow function it would not work
        console.log(this.name+' has lived in '+city+' @ user3 arrow function with this keyword');
    });
    }
};
// Works with map too which can be used to access & transform an array
const user4 = {
    name: 'rick',
    cities: ['Alabama', 'California','Utah'],
    printPlacesLived(){
        console.log('map');
     this.cities.map((city) => {

        console.log(this.name + ' has lived @map' + city) ;
    });    
    
    
    }
};

const user5 = {
    name: 'rick',
    cities: ['Alabama', 'California','Utah'],
    printPlacesLived(){
        console.log('map of user5');
     const msg = this.cities.map((city) => {
        return this.name + ' has lived user5' + city;
    });    
    
    return msg;
    }
};


const multiplier = {
    numbers: [1,3,5],
    multiplyBy: 100,
    multiply(){
        const ar = this.numbers.map((multiplyBy) => {
            return multiplyBy * this.multiplyBy;
        });
        return ar;
    }
    /// return a new array where the numbers are multiplied
};

const multiplier2 = {
    numbers: [1,3,5],
    multiplyBy: 100,
    multiply(){
        return this.numbers.map((multiplyBy) => {
            return multiplyBy * this.multiplyBy;
        });
        
    }
    /// return a new array where the numbers are multiplied
};
const multiplier3 = {
    numbers: [1,3,5],
    multiplyBy: 100,
    multiply(){   // Can do on one line if it is only one line
        return this.numbers.map((multiplyBy) => multiplyBy * this.multiplyBy);
    }
    /// return a new array where the numbers are multiplied
};



user.printPlacesLived();
user2.printPlacesLived();
user3.printPlacesLived();
user4.printPlacesLived();
console.log(user5.printPlacesLived());
console.log('3 mul 3 '+multiplier3.multiply());
console.log('multiply222'+multiplier2.multiply());
const m = multiplier.multiply();
console.log(m);
for(var s = 0; s <=m.length -1; s++){
    console.log("inside for"+m[s]);
}