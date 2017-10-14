// var text_validate = function(input, max_chars, counter){
//   var input_length = input.val().length;
//   var chars_remaining = max_chars - input.length;
//   if (input.length > 0) {
//     counter.text(chars_remaining).show();
//   } else {
//     counter.hide();
//   }
// };


$("#text").on("keyup", function() {
  var input_length = $(this).val().length;
  var chars_remaining = 32 - input_length;
  if (input_length > 0){
    $("#text-counter").text(chars_remaining).show();
  } else {
    $("#text-counter").hide();
  }
});

$("#textarea").on("keyup", function() {
  var input_length = $(this).val().length;
  var chars_remaining = 140 - input_length;
  if (input_length > 0){
    $("#textarea-counter").text(chars_remaining).show();
  } else {
    $("#textarea-counter").hide();
  }
});

$("#password").on("keyup", function() {
  var input_length = $(this).val().length;
  var chars_remaining = 16 - input_length;
  if (input_length > 0){
    $("#pw-counter").text(chars_remaining).show();
  } else {
    $("#pw-counter").hide();
  }
});

$("#confirm-password").on("keyup", function() {
  var input_length = $(this).val().length;
  var chars_remaining = 16 - input_length;
  if (input_length > 0){
    $("#pw-confirm-counter").text(chars_remaining).show();
  } else {
    $("#pw-confirm-counter").hide();
  }
});



// var pass_validate = function (initial, confirm) {
//   if (confirm.length > 0) {
//     if (initial !== confirm) {
//       //display "Your passwords do not match." }
//   }
// };

$('#pw-error').hide();

$("#confirm-password").on("keyup", function() {
  if  ( $('#password').val() !== $('#confirm-password').val() &&
        $('#confirm-password').val().length > 0) {
      $('#pw-error').show();
} else {
      $('#pw-error').toggle()
}
});
