'use strict';

$('#number-chooser').submit(function (event) {
  event.preventDefault();
  // variable that holds the numbers from user
  let userInput = $('#number-choice').val();
  console.log(userInput); // userinput tester


}); // this closes line 3!

function generateFizzBuzz(num) {
  // this function does one thing and one thing only: a pure function! 
  if (num % 3 === 0) {
    return 'fizz';
  } else if (num % 5 === 0) {
    return 'buzz';
  } else if (num % 15 === 0) {
    return 'fizzbuzz';
  } else {
    return num;
  }
}

console.log(generateFizzBuzz(10)); // fizzbuzz tester