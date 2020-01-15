console.log("It Works")

    // Game object
    const game = {
         // Game end Logic
        win() {
                alert("Fleet destryed Captian! Let's get outta here.")
                alert('Press ok to restart')
                this.start()
        },

        start () {
            createShip();
            ussLoki.hull = 20
            action()
        },

        lose () {
               alert("GAME OVER!");
               alert('Press ok to restart')
               this.start()
        },
    }

// Create an object for your ship USS Loki

let ussLoki = {
    name: 'USS LOKI',
    hull: 20,
    firepower: 5,
    accuracy: 0.7,
   
    attackChance(enemy) {
        if(Math.random() < this.accuracy) {
            enemy.hull -= this.firepower
            console.log(`Target Hit! Enemy hull at ${enemy.hull} Captain!`)
        } else {
            console.log('Attack missed Captain!') 
        }
    },

    attack(enemy) {
        if(this.hull <= 0) {
            game.lose()
        } else if (alienFleet === []) {
            game.win()
        } else {
            this.attackChance(enemy)
        }
    }
}

// Create a class for Alien Ships

class Alienships {
    constructor(hull, firepower, accuracy) {
        this.hull = hull
        this.firepower = firepower
        this.accuracy = accuracy
    };

    attackChance() {
        if(Math.random() <= this.accuracy) {
            ussLoki.hull -= this.firepower
            console.log(`We were hit! Hull at ${ussLoki.hull} Captain!`)
        } else {
            console.log('They missed!')
        }
    };

    attack() {
        if(this.hull > 0 && ussLoki.hull > 0) {
            this.attackChance()
        } else {
            alienFleet.shift()
            action()
        }
    };
}




let alienFleet = []
let alienHull = [3,4,5,6]
let alienFirepower = [2,3,4]
let alienAccuracy = [0.6,0.7,0.8]

const createShip = () => {
    for(let i = 0; i < 6; i += 1) {
        let hull = alienHull[Math.floor(Math.random() * 4)];
        let firepower = alienFirepower[Math.floor(Math.random() * 3)];
        let accuracy = alienAccuracy[Math.floor(Math.random() * 3)];
        alienFleet[i] = new Alienships(hull, firepower, accuracy)
    }
}


// Battle Logic
    // Turn based Game
    // START battle function
    const battle = (ship1,ship2) => {
        let i = 0;
        ship1 = ussLoki;
        ship2 = alienFleet[0];
    if(alienFleet !== []) {
        ussLoki.attack(ship2);
        ship2.attack();
    } else {
        game.win()
    }
    battle()
}


  // PROMPT function
  action =() => {
    input = prompt('Captain?','Attack or Retreat')
    if(input.toLowerCase() === 'attack') {
        battle()
    } else if(input.toLowerCase() === 'retreat') {
        alert('You live to see another day!')
    } else {
        alert('Captain?')
        this.action()
    }
}

game.start()







    // END turn function

    // USS Loki attacks first
        // check for hit
        // IF hit === true alien ship hull - 5
        // IF hit === false Alien ship attack
        // IF alien hull === 0 alien ship is destroyed
        // PROMPT
        // ELSE Alien ship attack


    // Alien ship attacks 2nd
        // Check for hit
        // IF hit === true USS LOKI hull - alienFirepower
        // IF hit === false USS LOKI attack
        // IF USS LOKI hull ==== 0 GAME OVER
        // ELSE USS LOKI attack


    // Continue until one ship is destroyed
    // PROMPT (Fight next ship, Retreat)
    // IF next ship call next ship in alienFleet array
    // ELSE end game 


