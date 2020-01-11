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