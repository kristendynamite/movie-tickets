function priceOutput(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
  this.prices = [];
}

priceOutput.prototype.fullPrice = function() {
  return parseInt(this.movie) + parseInt(this.time) + parseInt(this.age);
}




//// Front End Logic ////
$(document).ready(function() {

  $("form#ticketForm").submit(function(event) {
    event.preventDefault();

  var movie = $("#movie").val();
  var time = $("#time").val();
  var age = $("#age").val();
  var price = new priceOutput(movie, time, age);

  $("ul#price").append(price.fullPrice());
  $(".output").show();


  });

});
