$(document).ready(function() {
  $(".col-1of9:first").addClass("col-active");
  $(".col-1of9").click(function() {
    $(".col-1of9").removeClass("col-active");
    $(this).toggleClass('col-active');
  });
  $(".city-item-menu-option:first").addClass("city-item-menu-option-active");
  $(".city-item-menu-option").click(function() {
    $(".city-item-menu-option").removeClass("city-item-menu-option-active");
    $(this).toggleClass("city-item-menu-option-active");
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

