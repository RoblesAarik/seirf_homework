console.log('it works')

class Hero {
  constructor(name) {
      this.name = name
  };
  
  health = 100;

  weapons = {
      sprinkleSpray: 5,
      sugarShock: 10,
  };

  catchPhrases = ['i\'m fresher than day old pizza', 
  'you can\'t count my calories'];

  talkSass() {
      console.log(this.catchPhrases[Math.floor(Math.random() * 2)])
  }; 

  announceHealth() {
      console.log(this.health)
  };

  fight() {
      console.log(`i\'m ready to rumble`)
  }
}


