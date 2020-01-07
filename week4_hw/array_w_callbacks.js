// Array methods with callbacks

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagrams = [ 'The','job', 'requires', 'extra', 'pluck', 'and', 'zeal', 'from', 'every', 'young', 'wage', 'earner',  'Quick', 'zephyrs', 'blow,', 'vexing', 'daft', 'Jim', 'Two', 'driven', 'jocks', 'help', 'fax', 'my', 'big',
  'quiz', 'Five', 'quacking', 'zephyrs', 'jolt', 'my', 'wax', 'bed', 'The', 'five', 'boxing', 'wizards', 'jump', 'quickly', 'Pack',
  'my', 'box', 'with', 'five', 'dozen', 'liquor', 'jugs', 'We', 'promptly', 'judged', 'antique', 'ivory', 'buckles', 'for', 'the',
  'next', 'prize', 'Jaded', 'zombies', 'acted', 'quaintly', 'but', 'kept','driving','their','oxen','forward' ]

// Every
// 1. Determine if every number is greater than or equal to 0
console.log(nums.every(nums => nums >= 0))

// 2. Determine if every word shorter than 8 characters

console.log(panagrams.every(panagrams => panagrams.length < 8))

// Filter
// 1. Filter the array for numbers less than 4
console.log(nums.filter(nums => nums < 4))

// 2. Filter words that have an even length
console.log(panagrams.filter(panagrams => panagrams.length % 2 === 0))

//Find
// 1. Find the first value divisible by 5
console.log(nums.find(nums => nums % 5 === 0))

// 2. Find the first word that is longer than 3 characters
console.log(panagrams.find(panagrams => panagrams.length > 3))

// Find Index
// 1. Find the index of the first number that is divisible by 3
console.log(nums.findIndex(nums => nums % 3 === 0))

// 2. Find the index of the first word that is less than 2 characters long
console.log(panagrams.findIndex(panagrams => panagrams.length < 2))

// For Each
// 1. console.log each value of the nums array multiplied by 3
nums.forEach(nums => console.log(nums * 3))

// 2. console.log each word with an exclamation point at the end of it
panagrams.forEach(panagrams => console.log(panagrams + '!'))

// Map
// 1. Make a new array of each number multiplied by 100
console.log(nums.map(nums => nums * 100))

// 2. Make a new array of all the words in all uppercase
console.log(panagrams.map(panagrams => panagrams.toUpperCase()))

// Some

// 1. Find out if some numbers are divisible by 7
console.log(nums.some(nums => nums % 7 === 0))


// 2. Find out if some words have the letter a in them
console.log(panagrams.some(panagrams => panagrams.match('a') ))