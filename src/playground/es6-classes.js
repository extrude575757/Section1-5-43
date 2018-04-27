class Person{
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    getGretting(){
        return 'Hi. I am '+ this.name;
        
    }
    getDescription(){
        return this.name + ' is '+ this.age + ' years old ' ;
    }

}

const me = new Person('Rick Killgore', 28);
console.log(me.getDescription());
const othr = new Person();
console.log(othr.getDescription());