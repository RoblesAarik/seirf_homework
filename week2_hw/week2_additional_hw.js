// Part 1
/*
HTML Intro 4
HTML Elements 3
CSS Intro 3
CSS Basics 3
 */

//  Part 2 
// Easy Going, Write a for loop that will log the numbers 1 through 20
for(let i = 1; i <= 20; i++){
    console.log(i)
}

// Get Even, Write a loop that will log only the even numbers in 0 through 200
let i = 0
while (i <= 200){
    if (i % 2 === 0){
        console.log(i)
    }
    i++
}

// Fizz Buzz
i = 0
while(i <= 100){
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } else if (i % 5 === 0){
        console.log("Buzz")
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else {
        console.log(i)
    }
    i++
}

// Wild Wild Life
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]