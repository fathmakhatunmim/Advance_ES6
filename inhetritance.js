class Dog{
    constructor(name,breed,age){
        this.name = name;
        this.age = age;
        this.breed = breed;
    }

    eat(){
        console.log(`${this.name}is eating`);
    }

    bark(){
        console.log(`${this.name} is barking`);
    } 
}
  class cat {
        constructor(name,color,age){
            this.name = name;
            this.age = age;
            this.color = color; }
  meow(){
        console.log(`${this.name} is meowing`)
    }    
}
const dog1 = new Dog('coffee','Deshi')


dog1.eat()
console.log(dog1)

const cat1 = new cat('sp','white',5)
cat1.eat()