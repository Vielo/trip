$(document).ready(function() {
  $(".col-1of9").click(function() {
    alert('click registered!');
    this.toggleClass('col-active');
  });
  console.log('ready!');
});






function openCity(cityName) {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(cityName).style.display = "block";
}

