class oldSin {
    constructor(){
        this.name = 'fucks';
        this.getGreeting = this.getGreeting.bind(this); // Bind greeting so borkenThisBinding does not have type error this is undefined error
    }
    getGreeting(){
        return 'Hello your name is '+this.name;
    }
}
const o = new oldSin();
const brokenThisBinding = o.getGreeting;
console.log(brokenThisBinding());
console.log(o);

// With the babel-plugin-transform-class-properties we don't need to declar this for class names. It will also eliminate the need for a constructor handy for refactoringcode
class newSin {
        name= "fucks";
        getGreeting = () => {
            return 'Helow your name is'+ name; 
        }
    
}
const f = new newSin();
const ff  = f.getGreeting;
console.log(ff()); // Now with new syntax we do not break the this binding
console.log(f.name); 