// Create Hamster class
class Hamster {
    constructor(name) {
        this.name = name
    };

    owner = "" ;

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

me = new Hamster('Loki')
console.log(me.wheelRun())

// create person class
class Person {
    constructor(name) {
        this.name = name
    };

    age = 0; 

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
        this.bankAccount += 1;
    }

    buyHamster(hamster) {
        hamster.push();
        this.mood += 10
        this.bankAccount -= Hamster.getPrice
    }
}

