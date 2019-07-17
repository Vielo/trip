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
  (function() { 
    Galleria.loadTheme('galleria/themes/classic/galleria.classic.min.js');
    Galleria.run('.galleria', {
      dataSource: imageData,
    });
  }());
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

/* The below controls how the gallery behaves */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}