'use strict';

// listens for when a user submits a form indicating how high to count
function formSubmitted() {
  $('#number-chooser').submit( function(event) {
    event.preventDefault();
    inputValue();
  });
}


// get the value of the input field
function inputValue() {
  let numberTyped = $('#number-choice').val();
  numberList(numberTyped);
}


// calculates the list of numbers 
function numberList(num) {
  const counting = [];
  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      counting.push('<div class="fizz-buzz-item fizzbuzz"><span> fizzbuzz </span></div>');
    } else if (i % 5 === 0) {
      counting.push('<div class="fizz-buzz-item buzz"><span> buzz </span></div>');
    } else if (i % 3 === 0) {
      counting.push('<div class="fizz-buzz-item fizz"><span> fizz </span></div>');
    } else {
      counting.push(`<div class="fizz-buzz-item"><span> ${i} </span></div>`);
    }
  }
  fizzBuzz(counting);
}


// displays the numbers on the screen
function fizzBuzz(list) {
  $('.js-results').append(list);
}



formSubmitted();