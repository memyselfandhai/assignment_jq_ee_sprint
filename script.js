"use strict";

// length validator
var text_validate = function(input, max_chars, counter) {
    input.on("keyup", function () {
    var input_length = input.val().length;
    var chars_remaining = max_chars - input.length;
    if (input.length > 0) {
      counter.text(chars_remaining).show();
    } else {
      counter.hide();
    }
})};

text_validate( $("#text"), 32, $("#text-counter"))
text_validate( $("#textarea"), 140, $("#textarea-counter"))
text_validate( $("#password"), 16, $("#pw-counter"))
text_validate( $("#confirm-password"), 16, $("#pw-confirm-counter"))

// error messages
$('.error').hide();

// password confirmation error
$("#confirm-password").on("keyup", function() {
  if  ( $('#password').val() !== $('#confirm-password').val() &&
        $('#confirm-password').val().length > 0) {
      $('#pw-confirm-error').show();
} else {
      $('#pw-confirm-error').hide()
}});

// submit button length error messages

var button_validate = function (input, min_chars, err_message) {
  $('#submit').click (function (event) {
    if (input.val().length < min_chars) {
        event.preventDefault();
        input.css("border-color", "red");
        err_message.show();
    } else {
      input.css("border-color","initial");
      err_message.hide();
    }
} )} ;

button_validate( $('#password'), 6, $('#pw-error') );
button_validate( $('#confirm-password'), 6, $('#pw-confirm-error') );
button_validate( $('#text'), 4, $('#text-error') );
button_validate( $('#textarea'), 4, $('#textarea-error') );



// THE DROPDOWN

$('.options').children().hide();

$('.top').on('click', function() {
     $('.options').children().slideToggle(500);
});

$('li').hover(
  function() {
    $(this).addClass("hover");
}, function() {
    $(this).removeClass("hover");
});

$('li').on('click', function() {
  $('.top').text( $(this).text() );
  $('.options').children().slideToggle(500);
});
