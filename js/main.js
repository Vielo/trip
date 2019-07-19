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



/* controls the dynamic generation of the page content */

function loadNewCity(cityName) {
  let tempCityName = cityName;
  $('#city-headline-name').html(pageContents[tempCityName].headlineData[0]);
  $('#city-headline-date').html(pageContents[tempCityName].headlineData[1]);
  console.log(pageContents[tempCityName].cityItems.length);
  $('#item-menu').empty();
  for (i = 0; i < pageContents[tempCityName].cityItems.length; i++) {
    console.log('loop interation started');
    $('#item-menu').append(`<div class="city-item-menu-option" onclick="loadNewCityItem('${tempCityName}',${i})"><div>${pageContents[cityName].cityItems[i].cityItemMenuOption}</div></div>`);
    console.log('loop iteration complete')
  };
  loadNewCityItem(tempCityName, 0);

}

function loadNewCityItem(cityName, itemNo) {    /* need to make it take in arguments to determine which city item is to be opened! */
  $('.city-items-container').empty();
  console.log('is there a gallery present? ' +  pageContents[cityName].cityItems[itemNo].showGallery);
  if (pageContents[cityName].cityItems[itemNo].showGallery) {
    $('.city-items-container').append(`<div class="city-item gallery-container"><div class="slideshow-container"></div></div>`);
    var tempLength = Object.keys(pageContents[cityName].cityItems[itemNo].images)
    console.log('number of images: ' + tempLength.length);
    for (i = 0; i < tempLength.length; i++) {
      $('.slideshow-container').append(`<div class="mySlides fade">
      <div class="numbertext">${i+1} / ${tempLength.length}</div>
      <img src="img\\${pageContents[cityName].cityItems[itemNo].cityItemCodename}\\${pageContents[cityName].cityItems[itemNo].cityItemCodename}_${i+1}_max.jpg" style="width:100%"></div>`);
      
    }
    $('.slideshow-container').append(`<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>
    <div class="caption-container">
        <p id="caption-headline"></p>
        <p id="caption-body" class="caption-small"></p>
    </div>`);
    $('.city-item.gallery-container').append(`<div class="thumbnail-column"></div>`);
    for (i = 0; i < tempLength.length; i++) {
      $('.thumbnail-column').append(`<div class="column">
      <img class="demo cursor" src="img\\${pageContents[cityName].cityItems[itemNo].cityItemCodename}\\${pageContents[cityName].cityItems[itemNo].cityItemCodename}_${i+1}_max.jpg" style="width:100%" onclick="currentSlide(${i+1})" alt="${pageContents[cityName].cityItems[itemNo].cityItemMenuOption}"></div>`)
    }  
  }
  
  showSlides(1);
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