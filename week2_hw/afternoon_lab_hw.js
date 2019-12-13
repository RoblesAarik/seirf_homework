// Easy does it
const quotes = ["Do or do not there is no try", "Why so serious?", "Avengers Assemble"]

// Random
const randomThings = [1, 10, "Hello", true] 

// 1. How do you access the 1st element in the array?
console.log(randomThings[0])

// 2. Change the value of "Hello" to "World"
randomThings[2] = "World"

console.log(randomThings)

// We've got class
const ourClass = ["Outrun", "Zoom", "Github", "Slack"]

// 1. What would you write to access the 3rd element of the array?
console.log(ourClass[2])

// 2. Change the value of "Github" to "Octocat"
ourClass[2] = "Octocat"

// 3. Add a new element, "Cloud City" to the array.
ourClass.push ("Cloud City")

console.log(ourClass)

// Mix it up
const myArray = [5,10,500,20]

// using the push method, add the string "Egon" to the end of the array.
myArray.push ("Egon")

// using a method, remove the string from the end of the array.
myArray.pop()

// using the unshift method, add the string "Bob Marley" to the beginning of the array
myArray.unshift ("Bob Marley")

// using a different method, remove the string from the beginning of the array
myArray.shift()

// use the reverse method on this array
myArray.reverse()

console.log(myArray)

// Biggie Smalls
let i = 0
while (i < myArray.length) {
    if (myArray[i] < 100) {
        console.log("little number")
    } else if (myArray[i] >= 100) {
        console.log("big number")
    }
    i++;
}

// Monkey in the Middle
i = 0
while (i < myArray.length) {
    if (myArray[i] < 5) {
        console.log("little number") 
    } else if (myArray[i] > 10) {
        console.log("big number")
    } else {
        console.log("monkey")
    }
    i++
}

// What's in Your Closet?
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

// 1. What's Kristyn wearing today?
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")

// 2. Kristyn can't find her left shoe. Remove this item from her closet and save it to a variable named kristynShoe.
kristynsCloset.shift()
let kristynShoe = []
kristynShoe.push("left shoe")
console.log(kristynShoe)

// 3. Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
kristynsCloset[6] = "raybans"
kristynsCloset.push("marshmallow peeps")

// 4. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
kristynsCloset[5] = "stained knit hat"

// 5. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
console.log(thomsCloset[0][0])

// 6. In the same way, access one item from Thom's pants array.
console.log(thomsCloset[1][1])

// 7. Access one item from Thom's accessories array.
console.log(thomsCloset[2][2])

// 8. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log("Thom is looking good in his " + thomsCloset[0][0] + ", " + thomsCloset[1][1] + ", and " + thomsCloset[2][2] + "!" )

// 9. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = "Footie Pajamas"

console.log(thomsCloset)