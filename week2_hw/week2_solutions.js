// Verbal Questions
/* 1. The difference between a parameter and an argument:
 a parameter is the information you put inside the function.
 An argument is the information you enter when invoking the function.

 2. The difference between return and console.log:
 Return will print the output and stop the function when it get to return.
 console.log just prints out the output but cannot stop the function by itself

*/

// Palindrome Function
const checkPalindrome = (word) => {
    let lower = word.toLowerCase()
  let reverse =  lower.split('').reverse().join('')
 if (lower === reverse) {
     return true
 } else {
     return false
 }
}
console.log(checkPalindrome("Radar"));
console.log(checkPalindrome("Borscht"));

// Sum Array
const sumArray = (array) => {
    let sum = 0
    for(let i = 0; i < array.length; i++) {
        sum += array[i]
    } 
    return sum
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));

// Prime Numbers
const checkPrime = (num) => {
    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            return false
        }  
        }
        return true
    }
    

console.log(checkPrime(11));
console.log(checkPrime(10));

// Print Prime Numbers
// use checkPrime function to console.log all prime numbers
// go the each number from 0 to the number printing out 
// only the prime numbers.
const printPrimes = (num) => {
    for (let i = 0; i < num; i++) {
        if (checkPrime(i) !== false) {
           console.log (i)
        }
    }
    return num
}

console.log(printPrimes(97));

