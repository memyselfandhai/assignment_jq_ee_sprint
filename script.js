"use strict";

// PART 1:
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


// PART 2:
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

$('li', '.options').on('click', function() {
  $('.top').text( $(this).text() );
  $('.options').children().slideToggle(500);
});




// PART 3:
// THE PHOTO TAGGING BOX
var isClicked = false;

// creating hover outline and attaching to PHOTO
var $outline = $('<div class="square"></div>');

$outline.appendTo( $('.photo') ).hide();
$('#dropdown').appendTo($outline);
$('#dropdown').children().hide();

// changing position of OUTLINE box
// not sure why the outline is following cursor outside of #photo??
var outline_hover = function () {
    $('#photo').mousemove( function(event) {
        $outline.show();
        $outline.css("left", event.pageX-50)
                .css("top", event.pageY-50);
    })

    $('.square').mouseout ( function(event) {
      console.log("hi there")
      $(this).off('mousemove');
    })
  };

outline_hover();

// sliding out menu on click

  var isClicked = false;

  $('#photo').on ("click", function(){
    if (isClicked === false){
      $outline.css("left", event.pageX-50)
              .css("top", event.pageY-50);
      $('#photo').off('mousemove');
      $('#dropdown').children().slideToggle(500);
      isClicked = true;
    }
});

// resetting the tagging box
// fix this so it $exit only registers once
  var $exit = $('body').not('#dropdown');


  $('#reset').on ('click', function(event) {
    if (isClicked) {
      $('#dropdown').children().slideToggle(500);
      $outline.hide();
      outline_hover();
      isClicked = false;
    }});


// selecting from dropdown and tagging box
// add if statement in order to prevent duplicate tags

$("#dropdown").children().on ('click', function(e){
  var chosen = $(this).text();
  e.stopPropagation();
  $outline.clone()
          .addClass("tagged")
          .removeClass("square")
          .appendTo(".photo")
          .attr('id', chosen);
  $(`#${chosen}`).children().first()
              .replaceWith(`<p class="tagged_text"> ${chosen}</p>`);
  $('#dropdown').children().slideToggle(500);
  isClicked = false;
  outline_hover();
});
