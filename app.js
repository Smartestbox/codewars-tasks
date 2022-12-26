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

// Codewars task 8 kyu task Century From Year
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

// Codewars task 8 kyu task Reversed Strings
// Description:
// Complete the solution so that it reverses the string passed into it.
// Examples
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
  
}