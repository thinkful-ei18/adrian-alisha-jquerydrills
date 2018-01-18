'use strict';

/* 
To complete this challenge requires:

Using DOM manipulation and traversal to dynamically add and remove HTML elements and apply styles.
Linking to an externally hosted library (jQuery) and a locally hosted JavaScript file (index.js).
Linking to your application JavaScript file from the index.html page.
Using this and event delegation
Requirements
In terms of user experience, your shopping list app must allow users to:

  1. enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
  2. check and uncheck items on the list by clicking the "Check" button
  3. permanently remove items from the list

  Additionally:

You must use a CDN-hosted version of jQuery *
Put your application code in a file called index.js and link to it in index.html *
Be sure to put both script elements at the bottom of the <body> element. *
Do not alter index.html or main.css other than adding the links to the external JavaScript inside index.html. Write JavaScript code that works with the existing HTML and CSS to implement the required features.
Hint: you may find it helpful to read up on and use the following jQuery methods: .submit(), preventDefault(), toggleClass(), and closest().
*/

// listen for the button to be clicked *
// when clicked find the text in the input field *
// add the chosen text to the list *

$('#js-shopping-list-form').submit(function (event) {
  event.preventDefault();
  let shoppingItem = $('.js-shopping-list-entry').val();
  $('ul').append(`<li>
        <span class="shopping-item">${shoppingItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
});

// $('.shopping-item-toggle').on('click').toggleClass('.shopping-item__checked');

$('.shopping-list').on('click', '.shopping-item-toggle', function (event) {
  $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
});