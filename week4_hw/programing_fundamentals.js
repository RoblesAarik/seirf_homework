// Common programming principles
// DRY Don't repeat yourself if you're repeating yourself theres a better way to do it.
// KISS Keep it simple,stupid, The more simple your code is the easier it is the write and maintain
// Avoid creating a YAGNI (You aren't going to need it), Try not to add functionalities until you need it 
// Do the simplest thing that could work, Ask yourself what is the simplest thing that could work.
// Don't make me think, if the code requires to much thinking from an observer to understand, it cant be 
// Write for the maintainer, write code for future maintainer because you or someone else won't know whats going on
// Single responsibility principle, a part of your code that does one task well
// Avoid premature optimization, don't optimize your code unliess it is working but slower than you want it to.
// Serparation of concerns, different areas of functionallity should be managed by distinct but minimal overlapping of code
// I stuggle with avoiding premature optimization

/////////////////
// Commenting Code

// DECLARES the function
const f = l => {
// DECLARES variables inside the function
    let es = 0, p = 0, c = 1, n = 0
// CONDITIONAL stating while c is less than or equal to l, do something
    while (c <= l) {
// assigned a new value to n. n is now c + p
      n = c + p;
// c = n and p = c
      [c, p] = [n, c]
// CONDITIONAL stating if the sum of es and c modulo 2 is equal to 0 assign the value of c else it is 0
      es += (c % 2 === 0) ? c : 0
    }
// RETURN the value of es
    return es
  }
  
  console.log(f(55))

const f2 = (limit) => {
  let evenSum = 0;
  let previous = 0;
  let current = 1;
  while (current <= limit) {
    let next = current + previous;
    previous = current;
    current = next;
    if (current % 2 === 0) {
      evenSum += current;
    }
  }
  return evenSum;
}
console.log(f2(55))

// The function could be call evenFibonacci. I think the variables they used were easier to understand in this function.

// I would rather start with f2 it makes more sense and eaiser to tell what is going on

// no the shorter code doesn't work if you take out the semi-colon