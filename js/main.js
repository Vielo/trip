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
    $('#item-menu').append(`<div class="city-item-menu-option" onclick="loadNewCityItem('${tempCityName}',${i})"><div>${pageContents[cityName].cityItems[i].cityItemMenuOption}</div></div>`);
    console.log('city items (' + i + ') loop iteration complete')
  };
  loadNewCityItem(tempCityName, 0);

};

function loadNewCityItem(cityName, itemNo) {    /* controls the dynamic generation of specific city items */
  $('.city-items-container').empty();
  var tempArray = [];
  var imgCheckForVideo = false;   /* used to check whether a gallery component exists, used by the video Fotorama component to determine whether is should create one */
  console.log('is there a gallery present? ' +  pageContents[cityName].cityItems[itemNo].showGallery);
  if (pageContents[cityName].cityItems[itemNo].showGallery) {   /* if the gallery property of page-contents City Info is true, proceed with loading the gallery. Otherwise don't and just load the text */
    $('.city-items-container').append(`<div class="city-item gallery-container"><div class="fotorama"
    data-nav="thumbs" data-allowfullscreen="true" data-arrows="true" data-click="true" data-swipe="false" data-transition="crossfade" data-fit="scaledown" data-thumbwidth="120" data-auto="false" data-width="100%" data-ratio="800/600"></div></div>`);
    imgCheckForVideo = true;
    for (i = 1; i <= pageContents[cityName].cityItems[itemNo].imagesNo; i++) {
      tempArray.push({img: `img/${pageContents[cityName].cityItems[itemNo].cityItemCodename}/${pageContents[cityName].cityItems[itemNo].cityItemCodename}_${i}.jpg`, thumb: `img/${pageContents[cityName].cityItems[itemNo].cityItemCodename}/${pageContents[cityName].cityItems[itemNo].cityItemCodename}_${i}_thumb.jpg`, caption: `${pageContents[cityName].cityItems[itemNo].caption} (${i}/${pageContents[cityName].cityItems[itemNo].imagesNo})`});
    };
    console.log(tempArray);
    if (pageContents[cityName].cityItems[itemNo].showVideos == false) {
      $('.fotorama').fotorama({
        data: tempArray
      });
    }
 
  }
  if (pageContents[cityName].cityItems[itemNo].showVideos) {
    if (imgCheckForVideo == false) {
      $('.city-items-container').append(`<div class="city-item gallery-container"><div class="fotorama" data-nav="thumbs" data-allowfullscreen="true" data-arrows="true" data-click="true" data-swipe="false" data-transition="crossfade" data-fit="scaledown" data-thumbwidth="120" data-auto="false" data-width="100%" data-ratio="800/600"></div></div>`);
    }
    var tempVidLength = Object.keys(pageContents[cityName].cityItems[itemNo].videos)
    console.log("number of videos: " + tempVidLength.length);
    for (j = 0; j < tempVidLength.length; j++) {
      console.log(tempVidLength[j]);
      var tmpVid = `vid${j+1}`;
      console.log(pageContents[cityName].cityItems[itemNo].videos[tmpVid]);
      tempArray.push({video: pageContents[cityName].cityItems[itemNo].videos[tmpVid]});
    };
    console.log(tempArray);
    $('.fotorama').fotorama({
      data: tempArray
    });    
  }
  else {    
    $('.city-items-container').append(pageContents[cityName].cityItems[itemNo].contentText);
  }
}
