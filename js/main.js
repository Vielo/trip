$(document).ready(function() {
  $(".col-1of9:first").addClass("col-active");
  loadNewCity("denver1");
  loadNewCityItem("denver1", 0);
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
  console.log("city items amount: " + pageContents[tempCityName].cityItems.length);
  $('#item-menu').empty();
  for (i = 0; i < pageContents[tempCityName].cityItems.length; i++) {
    console.log('city items (' + i + ') loop interation started');
    $('#item-menu').append(`<div class="city-item-menu-option" onclick="loadNewCityItem('${tempCityName}',${i})"><div>${pageContents[cityName].cityItems[i].cityItemMenuOption}</div></div>`);
    console.log('city items (' + i + ') loop iteration complete')
  };
  loadNewCityItem(tempCityName, 0);

}

function loadNewCityItem(cityName, itemNo) {    /* controls the dynamic generation of specific city items */
  $('.city-items-container').empty();
  console.log('is there a gallery present? ' +  pageContents[cityName].cityItems[itemNo].showGallery);
  if (pageContents[cityName].cityItems[itemNo].showGallery) {   /* if the gallery property of page-contents City Info is true, proceed with loading the gallery. Otherwise don't and just load the text */
    $('.city-items-container').append(`<div class="city-item gallery-container"><div class="slideshow-container"></div></div>`);
    var tempLength = Object.keys(pageContents[cityName].cityItems[itemNo].images)
    console.log('number of images: ' + tempLength.length);
    for (i = 0; i < tempLength.length; i++) {
      $('.slideshow-container').append(`<div class="mySlides fade">
      <div class="numbertext">${i+1} / ${tempLength.length}</div>
      <img src="img\\${pageContents[cityName].cityItems[itemNo].cityItemCodename}\\${pageContents[cityName].cityItems[itemNo].cityItemCodename}_${i+1}_max.jpg" style="width:100%"></div>`);
      
    }
    $('.slideshow-container').append(`<a class="prev" onclick="plusSlides(-1,'${cityName}',${itemNo})">&#10094;</a>
    <a class="next" onclick="plusSlides(1,'${cityName}',${itemNo})">&#10095;</a>
    <div class="caption-container">
        <p id="caption-headline"></p>
        <p id="caption-body" class="caption-small"></p>
    </div>`);
    $('.city-item.gallery-container').append(`<div class="thumbnail-column"></div>`);
    for (i = 0; i < tempLength.length; i++) {
      $('.thumbnail-column').append(`<div class="column">
      <img class="demo cursor" src="img\\${pageContents[cityName].cityItems[itemNo].cityItemCodename}\\${pageContents[cityName].cityItems[itemNo].cityItemCodename}_${i+1}_max.jpg" style="width:100%" onclick="currentSlide(${i+1},'${cityName}',${itemNo})" alt="${pageContents[cityName].cityItems[itemNo].cityItemMenuOption}"></div>`)
    } 
    slideIndex = 1;
    console.log("slide index reset, current value: " + slideIndex)
    console.log("page content cityName is now: " + cityName);
    showSlides(1, cityName, itemNo); 
    currentCity = cityName;
    console.log("currentCity is now: " + currentCity);
    currentCityItem = itemNo;
    console.log("currentCityItem is now: " + pageContents[cityName].cityItems[itemNo].cityItemMenuOption + "(" + currentCityItem + ")");
  }
  else {    /* TODO: dynamic generation of non-gallery city items */
    $('.city-items-container').append(pageContents[cityName].cityItems[itemNo].contentText);
  }
  
  
}


/* The below controls how the gallery behaves */
var slideIndex = 1;

var currentCity;
var currentCityItem;
var slideIndex = 1;


function plusSlides(n, currentCity, currentCityItem) {
showSlides(slideIndex += n, currentCity, currentCityItem);
}

function currentSlide(n, currentCity, currentCityItem) {
    showSlides(slideIndex = n, currentCity, currentCityItem);
}

function showSlides(n, o, p) {        /* n is current slide, o is used to determine site-content info for loading the captions, p is ued to determine specific city item */
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("demo");
var captionHeadline = document.getElementById("caption-headline");
var captionBody = document.getElementById("caption-body");
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
tempSlide = `img${slideIndex}`;
console.log('slide index: ' + slideIndex);
captionHeadline.innerHTML = pageContents[o].cityItems[p].images[tempSlide][0];
captionBody.innerHTML = pageContents[o].cityItems[p].images[tempSlide][1];
}