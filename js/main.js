$(document).ready(function() {
  $(".col-1of9").click(function() {
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
  console.log('main tab opened');
};

function openMenuItem(cityItem) {
  var i;
  var x = document.getElementsByClassName("city-item");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(cityItem).style.display = "block";
};

