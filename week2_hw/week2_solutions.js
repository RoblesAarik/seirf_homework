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

