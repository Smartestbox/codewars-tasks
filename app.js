// Codewars 8 kyu task "Will you make it?"

// Description:

// You were camping with your friends far away from home, but when it's time to go back, 
// you realize that your fuel is running out and the nearest pump is 50 miles away! You 
// know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO
    return mpg * fuelLeft >= distanceToPump
};

//---------------------------------------------------------------------------------------------------------

// Codewars 8 kyu task Century From Year

// Description:

// The first century spans from the year 1 up to and including the year 100, the second century - 
// from the year 101 up to and including the year 200, etc.
// Task
// Given a year, return the century it is in.
// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

const century = year => year % 100 !== 0 ? Math.trunc(year/100) + 1 : Math.trunc(year/100);

//---------------------------------------------------------------------------------------------------------

// Codewars 8 kyu task Reversed Strings

// Description:

// Complete the solution so that it reverses the string passed into it.
// Examples
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

const solution = str => {
    const strArr = [...str];
    let reverseString = '';
    for(let i = strArr.length - 1; i >= 0; i--) {
      reverseString += strArr[i]
    }
    return reverseString;
}

//---------------------------------------------------------------------------------------------------------

// Codewars 8 kyu task Opposites Attract

// Description: 

// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a 
// flower each. If one of the flowers has an even number of petals and the other has an odd number of petals 
// it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love 
// and false if they aren't.

function lovefunc(flower1, flower2){
    if((!(flower1 % 2) && flower2 % 2) ||
    (!(flower2 % 2) && flower1 % 2)) {
      return true  
    } else {
      return false
    }
  }

//---------------------------------------------------------------------------------------------------------

// Codewars 8 kyu task Returning Strings

// Description:

// Make a function that will return a greeting statement that uses an input; your program should return, 
// "Hello, <name> how are you doing today?".

const greet = name => `Hello, ${name} how are you doing today?`

//---------------------------------------------------------------------------------------------------------

// Codewars 8 kyu task Remove String Spaces

// Description:

// Simple, remove the spaces from the string, then return the resultant string.

const noSpace = str => str.split(' ').join('')

//---------------------------------------------------------------------------------------------------------

// Codewars 8 kyu task Our football team has finished the championship.

// Description:

// Our team's match results are recorded in a collection of strings. Each match is represented by a string 
// in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

const points = games => {
    totalPoints = 0;
    for(let i = 0; i < games.length; i++) {
      if(parseInt(games[i][0]) > parseInt(games[i][2])) {
        totalPoints += 3;
      } else if(parseInt(games[i][0]) === parseInt(games[i][2])) {
        totalPoints += 1;
      }
    }
    return totalPoints;
}

//---------------------------------------------------------------------------------------------------------

// Codewars 8 kyu task Grasshopper - Summation
// Description:
// Write a program that finds the summation of every number from 1 to num. The number will always be a 
// positive integer greater than 0.
// For example:
// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

const summation = num => {
    let sum = 0;
    for(let i = num; i > 0; i--) {
      sum += i;
    }
    return sum
}

//---------------------------------------------------------------------------------------------------------

// Codewars 8 kyu task Beginner Series #2 Clock
// Description: 
// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000

const past = (h, m, s) => h * 3600000 + m * 60000 + s * 1000

//---------------------------------------------------------------------------------------------------------

// Codewars 8 kyu task Count of positives / sum of negatives

// Description:

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

const countPositivesSumNegatives = input => {
    let positiveCount = 0;
    let negativeSum = 0;
  
    if (input === null || input.length === 0) {
      return [];
    } else {
      input.forEach(num => num > 0 ? positiveCount++ : negativeSum += num);
    }
  
    return [positiveCount , negativeSum];
}

//---------------------------------------------------------------------------------------------------------

// Codewars 8 kyu task MakeUpperCase

// Description:

// Write a function which converts the input string to uppercase.

const makeUpperCase = str => str.toUpperCase();

//---------------------------------------------------------------------------------------------------------

// Codewars 8 kyu task Remove exclamation marks

// Description: 

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

const removeExclamationMarks = s => {
    let newStr = '';
    for(let i = 0; i < s.length; i++) {
      if(s[i] !== '!') {
        newStr += s[i]
      }
    }
    return newStr;
}

//---------------------------------------------------------------------------------------------------------

// Codewars 8 kyu task Reversed sequence

// Description:

// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
    let arr = [];
    for (let i = n; i > 0; i--) {
        arr.push(i);
    } 
    return arr;
};

//---------------------------------------------------------------------------------------------------------

// Codewars 8 kyu task Area or Perimeter

// Description:

// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// Example(Input1, Input2 --> Output):

// 6, 10 --> 32
// 3, 3 --> 9

const areaOrPerimeter = (l , w) => l !== w ? (l + w) * 2 : l*w

//---------------------------------------------------------------------------------------------------------
