$(document).ready(function() {
  $(".col-1of9:first").addClass("col-active");
  $(".col-1of9").click(function() {
    $(".col-1of9").removeClass("col-active");
    $(this).toggleClass('col-active');
    $(".city-item-menu-option").removeClass("city-item-menu-option-active");
    $(".city-item-menu-option:nth-child(1)").toggleClass("city-item-menu-option-active");
    $(".city-item:nth-child(1)").attr('style','display: block');
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
  document.getElementById(cityItem).style.display = "block";
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

/*

      <div id="city-item-container-wellington" class="city-items-container">
          <div id="wellington-item1" class="city-item">
              <div class="slideshow-container">
                  <div class="mySlides fade">
                      <div class="numbertext">1 / 6</div>
                      <img src="img\idaho_springs\idaho_springs_1_max.jpg" style="width:100%">
                  </div>
                      
                  <div class="mySlides fade">
                      <div class="numbertext">2 / 6</div>
                      <img src="img\idaho_springs\idaho_springs_2_max.jpg" style="width:100%">
                  </div>
                      
                  <div class="mySlides fade">
                      <div class="numbertext">3 / 6</div>
                      <img src="img\idaho_springs\idaho_springs_3_max.jpg" style="width:100%">
                  </div>
                  <div class="mySlides fade">
                      <div class="numbertext">4 / 6</div>
                      <img src="img\idaho_springs\idaho_springs_4_max.jpg" style="width:100%">
                  </div>
                  <div class="mySlides fade">
                      <div class="numbertext">5 / 6</div>
                      <img src="img\idaho_springs\idaho_springs_5_max.jpg" style="width:100%">
                  </div>
                  <div class="mySlides fade">
                      <div class="numbertext">6 / 6</div>
                      <img src="img\idaho_springs\idaho_springs_6_max.jpg" style="width:100%">
                  </div>
                      
                  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                  <a class="next" onclick="plusSlides(1)">&#10095;</a>
                  <div class="caption-container">
                      <p id="caption"></p>
                  </div>
              
                  <div class="row">
                      <div class="column">
                          <img class="demo cursor" src="img\idaho_springs\idaho_springs_1_max.jpg" style="width:100%" onclick="currentSlide(1)" alt="Georgetown">
                      </div>
                      <div class="column">
                          <img class="demo cursor" src="img\idaho_springs\idaho_springs_2_max.jpg" style="width:100%" onclick="currentSlide(2)" alt="Georgetown">
                      </div>
                      <div class="column">
                          <img class="demo cursor" src="img\idaho_springs\idaho_springs_3_max.jpg" style="width:100%" onclick="currentSlide(3)" alt="Georgetown">
                      </div>
                      <div class="column">
                          <img class="demo cursor" src="img\idaho_springs\idaho_springs_4_max.jpg" style="width:100%" onclick="currentSlide(4)" alt="Georgetown">
                      </div>
                      <div class="column">
                          <img class="demo cursor" src="img\idaho_springs\idaho_springs_5_max.jpg" style="width:100%" onclick="currentSlide(5)" alt="Georgetown">
                      </div>    
                      <div class="column">
                          <img class="demo cursor" src="img\idaho_springs\idaho_springs_6_max.jpg" style="width:100%" onclick="currentSlide(6)" alt="Georgetown">
                      </div>
                  </div>    
              </div>

          </div>
          <div id="wellington-item2" class="city-item" style='display:none'>
              <p>Item 2</p>
              <p>Should not be visible until menu item 2 is clicked</p>
          </div>
          <div id="wellington-item3" class="city-item" style='display:none'>
              <p>Item 3</p>
              <p>Should not be visible until menu item 2 is clicked</p>
          </div>
      </div>
  </div>
  
</div>


*/















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