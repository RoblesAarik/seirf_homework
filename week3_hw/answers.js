/* Data type refreshers

1. A light switch that can be either on or off.
    datatype: boolean
    ex: const light = true

2. A user's email address.
    datatype: string
    ex: 'roblesaarik@gmail.com'

3. A spaceship with a hull, laser blasters, tractor beam, and warp drive.
    datatype: object
    ex: const spaceship = {
        area: 'hull',
        weapon: 'laser blaster',
        tool: 'tractor beam',
        mobility: 'warp drive'
    }

A list of student names from our class.
    datatype: array
    ex: let names = ['Aarik','Loki','Alex'
]
A list of student names from our class, each with a location.
    datatype: object
    ex: const locations {
        aarik: 'Pinole'
        loki: 'New York'
        alex: 'Chicago'
    }
A list of student names from our class, each with a location and each with a list of favorite tv shows.
    datatype: objects
    ex: {
        aarik: {
            location: 'Pinole',
            show: 'The Office',
        },
        loki: {
            location: 'New York',
            show: 'Thor Ragnarock',
        },
        alex: {
            location: 'Chicago',
            show: 'Breaking Bad'
        }
    }
*/
//////////////////
// Take it easy//
////////////////

// Make an array that holds all of the colors of the rainbow.
let rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

// Write code that will access "blue" from the rainbow array.
console.log(rainbow[4])
// Make an object that is called your name and holds the information about 
// your favorite food, a hobby, the name of the town that you live in currently, 
// and your favorite datatype.
const aarik = {
    food: "tacos",
    hobby: "Muay Thai",
    town: 'Pinole',
    datatype: 'objects'
}

// Write code that will access your hobby from the object that you just created.
console.log(aarik.hobby)

///////////////////
// Crazy Objects//
/////////////////

const crazyObject = {
    taco: [{meat: 'steak',
           cheese: ['panela', 'queso', 'chihuahua']},
           {meat: 'chicken',
            salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
          ],
    larry: {
      nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
      quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
      characters: [{
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
      ]
    }
  }

//  Use crazy Object to log the following.

// 1. "omg my mouth is burning"
console.log(crazyObject.taco[1].salsa[5])

// 2. "Pretty pretty prettayyyyy good"
console.log(crazyObject.larry.quotes[0])

// 3. "Swearing at Larry and Jeff"
console.log(crazyObject.larry.characters[2].favourtieHobby)

// 4. "Chicken Teriyaki Boyyyyyy"
console.log(crazyObject.larry.nicknames[1])

// 5. The object the contains the name funkhauser
console.log(crazyObject.larry.characters[1].name)

////////////////////
// Object-ception//
///////////////////

const inception = {
    reality: {
        dreamLayer1: {
            dreamLayer2: {
                dreamLayer3: {
                    dreamLayer4: {
                        dreamLayer5: {
                            dreamLayer6: {
                                limbo: "Joseph Gordon Levitt"
                           }
                        }
                    }
                }
            }
        }
    }
 }

//  Change the value of limbo to null.

inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null

console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null)