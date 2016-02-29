$(document).ready(function() {
  $('.create-button').on('click', createProperty);
  $('.properties').on('click', '.remove', buttonSlide);
});


function createProperty() {
  // var randomNum = randomNumber(1, 100);
  var randomID = randomNumber(1, 10000);
  var randomFt = randomNumber(1000, 10000);
  var randomPrice = randomNumber(1, 20);

  appendDom(randomID,randomFt,randomPrice);
}

function appendDom(randomID, randomFt, randomPrice) {
  $('.properties').append('<div class="property"></div>');

  var $el = $('.properties').children().last();

  $el.append('<p>Property ID: ' + randomID +'</p>');
  $el.append('<p>' + randomFt + ' Sq Ft.</p>');
  $el.append('<p>$' + randomPrice +'/ sq ft.</p>');
  $el.append('<button class="remove">Remove</button>');
}

function buttonSlide() {
  $(this).parent().slideUp();
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}
