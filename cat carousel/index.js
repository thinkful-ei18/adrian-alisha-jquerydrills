'use strict';

// create the event listener --done!
// remove the IMG in hero class
// then add the clicked image to hero class

$('.thumbnails .thumbnail').on('click', function (event) {
  let imgSRC = $(event.currentTarget).find('img').attr('src');
  let imgALT = $(event.currentTarget).find('img').attr('alt');
  $('.hero').find('img').attr('src', imgSRC);
  $('.hero').find('img').attr('alt', imgALT);

  const pressedIMG = $(imgSRC).attr('aria-pressed') === 'true';
  // const pressedALT = $(imgALT).attr('aria-pressed') === 'true';

  console.log(imgSRC);
  console.log(imgALT);
  // console.log('hello!');
});