console.log('it works')

// Created Hero class
class Hero {
  constructor(name) {
      this.name = name
  };
  
  health = 100;

  weapons = [
      {
        name: 'sprinkleSpray',
        hitpoints: 5,
    },
      {
         name: 'sugarShock',
         hitpoints: 10,}
  ]

  catchPhrases = ['I\'m fresher than day old pizza', 
  'you can\'t count my calories'];

  randomNumGen (arr) {
    return Math.floor(Math.random() * arr.length)
}

  randomWeapon() {
    return this.weapons[this.randomNumGen(this.weapons)]
 }

  talkSass() {
      console.log(this.catchPhrases[Math.floor(Math.random() * 2)])
  }; 

  announceHealth() {
      console.log(`My health is ${this.health}!`)
  };

  fight(enemy) {
    let weapon = this.randomWeapon()
    enemy.health -= weapon.hitpoints
    console.log(`I\'m gonna flatten you like a slice of pepperoni!`)
    return enemy.health
}
}

dougie = new Hero('Dougie the donut')

// Created Enemy class
class Enemy {
    constructor(name) {
        this.name = name
    };

    health = 100;

    weapons = [
       { 
           name: 'pepperoniStars',
           hitpoints: 5,
   
        name: 'cheeseGrease',
        hitpoints: 10 ,
       }
    ];   
    

    catchPhrases = ['I\'m youtube famous',
    'I\'m more dangerous than an uncovered sewer'];

    randomNumGen (arr) {
        return Math.floor(Math.random() * arr.length)
    }

    randomWeapon() {
       return this.weapons[this.randomNumGen(this.weapons)]
    }

    talkSmack() {
        console.log(this.catchPhrases[Math.floor(Math.random() * 2)])
    };

    announceHealth() {
        console.log(`My health is ${this.health}!`)
    };

    fight(hero) {
        let weapon = this.randomWeapon()
        hero.health -= weapon.hitpoints
        console.log(`I\'m gonna flatten you like a slice of pepperoni!`)
        return hero.health
    }

}

pizza = new Enemy('Pizza Rat')
///////////////////////////////
// Walking Down the Street

// 1. Have Dougie talkSass
console.log(dougie.talkSass())

// 2. Have Pizza Rat talkSmack
console.log(pizza.talkSmack())

// 3. Have Dougie announceHealth
console.log(dougie.announceHealth())

// 4. Have Pizza Rat announceHealth
console.log(pizza.announceHealth())

// Fight

// 1. Have Pizza Rat fight Dougie
console.log(pizza.fight(dougie))
// 2. Have Dougie fight Pizza Rat
console.log(dougie.fight(pizza))
// 3. Have Pizza Rat and Dougie both announceHealth to make sure their health has decreased!
console.log(dougie.announceHealth())
console.log(pizza.announceHealth())