// # Programming Basics: For Loops

// These exercises are designed for practising "for" loops. Print all your results to the console.

// 1. **Addition.**
// Write a program to add up the numbers 1 to 20.
let i;
for (i = 1; i <= 20; i++) {
  console.log(i);
}

// 2. **There are i bottles of beer on the wall.**
// Write a program that will output, "There is one bottle of beer on the wall." "There are two bottles of beer on the wall" up until there are five bottles.
let b;
for (b = 1; b <= 5; b++) {
  switch (b) {
    case 1:
      console.log("There is " + b + " bottle of beer on the wall");
      break;
    case 2:
      console.log("There are " + b + " bottles of beer on the wall");
      break;
    case 3:
      console.log("There are " + b + " bottles of beer on the wall");
      break;
    case 4:
      console.log("There are " + b + " bottles of beer on the wall");
      break;
    case 5:
      console.log("There are " + b + " bottles of beer on the wall");
  }
}

// 3. **The odd/even reporter.**
// Write a program that will iterate from 0 to 20. For each iteration,
// it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
let j;
for (j = 0; j <= 20; j++) {
  if (j % 2 == 0) {
    console.log(j + " is even");
  } else {
    console.log(j + " is odd");
  }
}

// 4. **Multiplication Tables.**
// Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9
// and log the result (e.g. "2 * 9 = 18").
// **Bonus:** Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
let c;
for (c = 0; c <= 10; c++) {
  d = c * 9;
  console.log(c + " * 9 = " + d);
}

// 5. **Fizz Buzz**
// Write a program which iterates the integers from 1 to 100. But for multiples of three print "Fizz"
// instead of the number and for the multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".
let e;
for (e = 1; e <= 100; e++) {
  console.log(e);
  if (e % 3 === 0 || e % 5 === 0) {
    console.log("Fizz");
  }
  if (e % 3 === 0 && e % 5 === 0) {
    console.log("FizzBuzz");
  }
}

// 6. **Sum of Multiples**
// Write a program to add the multiples of 3 and 5 under 1000.
// let f;
let sum = 0;
for (let f = 1; f <= 1000; f++) {
  if (f % 3 === 0 || f % 5 === 0) {
    sum = sum + f;
    // console.log(f);
  }
}
console.log(sum);

// **Bonus**

// 7. Write programs that produce the following outputs:
// >100 200 300 400 500 600 700 800 900
let g;
for (g = 10; g < 1000; g * 10) {
  console.log(g);
}

// >
// >0 2 4 6 8 10
// >
// >3 6 9 12 15
// >
// >9 8 7 6 5 4 3 2 1 0
// >
// >1 1 1 2 2 2 3 3 3 4 4 4
// >
// >0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

// 8. **isPalindrome.**
// Write a program to check whether a word is a palindrome or not.
// Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat
