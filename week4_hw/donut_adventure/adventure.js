console.log('it works')

// Created Hero class
class Hero {
  constructor(name) {
      this.name = name
  };
  
  health = 100;

  weapons = {
      sprinkleSpray: 5,
      sugarShock: 10,
  };

  catchPhrases = ['I\'m fresher than day old pizza', 
  'you can\'t count my calories'];

  talkSass() {
      console.log(this.catchPhrases[Math.floor(Math.random() * 2)])
  }; 

  announceHealth() {
      console.log(this.health)
  };

  fight() {
      console.log(`I\'m ready to rumble`)
  }
}

dougie = new Hero('Dougie the donut')

// Created Enemy class
class Enemy {
    constructor(name) {
        this.name = name
    };

    health = 100;

    weapons = {
        pepperoniStars: 5,
        cheeseGrease: 10    
    };

    catchPhrases = ['I\'m youtube famous',
    'I\'m more dangerous than an uncovered sewer'];

    talkSmack() {
        console.log(this.catchPhrases[Math.floor(Math.random() * 2)])
    };

    announceHealth() {
        console.log(this.health)
    };

    fight() {
        console.log(`I\'m gonna flatten you like a slice of pepperoni!`)
    }

}

pizza = new Enemy('Pizza Rat')

