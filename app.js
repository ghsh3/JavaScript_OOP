console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
    constructor(name, pets, residence, hobbies) {
       this.name = name;
       this.pets = pets;
       this.residence = residence;
       this.hobbies = hobbies;
    }
    info() {
        let listedHobbies = this.hobbies;
        if (this.hobbies.length > 2) {
        listedHobbies[listedHobbies.length - 1] = 
        " and " + listedHobbies[listedHobbies.length - 1];
        listedHobbies = listedHobbies.join(", ");
        } else if (this.hobbies.length == 2) {
            listedHobbies = listedHobbies.join(" and ");
    }
        console.log(
        `My name is ${this.name}. I have ${this.pets} pets. 
        I live in ${this.residence}. I like ${listedHobbies}.`);
    } 
    greeting(guest = "Guest") {
        console.log(`Hi,${guest}!`);
    }
    }
    class Coder extends Person {
        constructor(name, pets, residence, hobbies) {
            super(name, pets, residence, hobbies);
            this.occupation = "Full Stack Web Developer";
        }
        greeting(guest = "Guest") {
            console.log(` Hello,${guest}! I'm a ${this.occupation.toUpperCase()} and I love what I do!`)
        }
            
        }
            
        
    
   
const april = new Person ("April", 3, "Colorado", ["reading", "biking", "coding"]);
april.greeting("Matt");
april.info();

const bill = new Coder ("Bill", 2, "Colorado", ["swimming", "eating", "coding"]);
bill.greeting();
bill.info();


 bill.greeting("John");
