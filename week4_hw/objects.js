// Create Hamster class
class Hamster {
    constructor(name,owner) {
        this.name = name
        this.owner = owner
    };

    price = 15;

    wheelRun() {
        console.log("Squeak Squeak")
    };

    eatFood() {
        console.log("nibble nibble")
    };

    getPrice() {
        return this.price
    }
}

// create person class
class Person {
    constructor(name) {
        this.name = name
    };
    age = 0

    height = 0;

    weight = 0;

    mood = 0;

    hamster = [];

    bankAccount = 0;

    getName() {
        return this.name
    };

    getAge() {
        return this.age
    };

    getWeight() {
        return this.weight
    };

    greet() {
        console.log(`Hi ${this.name}`)
    };

    eat() {
        this.weight += 1;
        this.mood += 1
    };

    exercise() {
        this.weight -= 1
    };

    ageUp() {
        this.age += 1;
        this.height += 1;
        this.weight += 1;
        this.mood -= 1;
        this.bankAccount += 10;
    }

    buyHamster(hamster) {
       this.hamster.push(hamster);
        this.mood += 10
        this.bankAccount -= hamster.getPrice()
    }
}

// Create a story with person class
// 1. Instantiate a new Person named Timmy
const timmy = new Person ('Timmy')

// 2. Age Timmy five years
timmy.age = 5

// 3. At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
timmy.eat()
timmy.eat()
timmy.eat()
timmy.eat()
timmy.eat()


// 4. Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times
timmy.exercise()
timmy.exercise()
timmy.exercise()
timmy.exercise()
timmy.exercise()


// 5. Age Timmy 9 years
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()

// 6. Create a hamster named "Gus"
// 7. Set Gus's owner to the string "Timmy"
gus = new Hamster('Gus','Timmy')
console.log(gus)

// 8. Have Timmy "buy" Gus
timmy.buyHamster(gus)
console.log(timmy)
// 9. Age Timmy 15 years
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()

// 10. Have Timmy eat twice
timmy.eat()
timmy.eat()

// 11.Have Timmy exercise twice
timmy.exercise()
timmy.exercise()