$(document).ready(function() {
  $(".col-1of9:first").addClass("col-active");
  $(".col-1of9").click(function() {
    $(".col-1of9").removeClass("col-active");
    $(this).toggleClass('col-active');
    $(".city-item-menu-option").removeClass("city-item-menu-option-active");
    $(".city-item-menu-option:nth-child(1)").toggleClass("city-item-menu-option-active");
    $(".city-item:nth-child(1)").attr('style','display: flex');
  });
  $("body").on("click", ".city-item-menu-option", function(){
    $('.city-item-menu-option').removeClass("city-item-menu-option-active");
    $(this).toggleClass("city-item-menu-option-active");
  });
  $(".city-item-menu-option:first").addClass("city-item-menu-option-active");
  console.log('ready!');
});


function openCity(cityName) {
  loadNewCity(cityName);
  $(".city-item-menu-option:first").addClass("city-item-menu-option-active");
  console.log('new city loaded dynamically');

};

function openMenuItem(cityItem) {
  var i;
  var x = document.getElementsByClassName("city-item");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  };
  document.getElementById(cityItem).style.display = "flex";
};

/* controls the dynamic generation of the page content */

function loadNewCity(cityName) {
  let tempCityName = cityName;
  $('#city-headline-name').html(pageContents[tempCityName].headlineData[0]);
  $('#city-headline-date').html(pageContents[tempCityName].headlineData[1]);
  console.log(pageContents[tempCityName].cityItems.length);
  $('#item-menu').empty();
  for (i = 0; i < pageContents[tempCityName].cityItems.length; i++) {
    console.log('loop interation started');
    $('#item-menu').append(`<div class="city-item-menu-option" onclick="openMenuItem('${cityName}-item${i+1}')"><div>${pageContents[cityName].cityItems[i].cityItemMenuOption}</div></div>`);
    console.log('loop iteration complete')
  };
  loadNewCityItem(cityName);

}

function loadNewCityItem(cityItem) {


}



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