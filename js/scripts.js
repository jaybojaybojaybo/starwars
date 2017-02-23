$(document).ready(function() {

  $('form#survey').submit(function(event) {
    event.preventDefault();
  var color = parseInt($("#color").val());
  var food = parseInt($("#food").val());
  var genre = parseInt($("#genre").val());
  var city = parseInt($("#city").val());
  var total = (color + food + genre + city);

    $('#c3po').hide();
    $('#han').hide();
    $('#vader').hide();
    $('#lando').hide();

    if ((total >= 4) && (total <= 6)) {
      $('#c3po').show();
    } else if ((total >= 7) && (total <= 9)) {
      $('#han').show();
    } else if ((total >= 10) && (total <= 12)) {
      $('#lando').show();
    } else if (total >= 13) {
      $('#vader').show();
    } else  {
      alert("Please make all selections!");
    }


});
});
