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


