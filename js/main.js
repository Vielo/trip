var currentLanguage = "pl";   /* stores current language so that correct copy is loaded from site-content.js, default PL */
var currentCityNameAndNo = undefined;   /* stores currently open city item for smooth language switch */

$(document).ready(function() {
  $(".col-1of9:first").addClass("col-active");
  $('.col-1of9-contents-1of3').each(function(i) {
    $(this).html(langContents.dayButtonLabels[currentLanguage][i])
});
  $('.language-button:first').addClass('language-button-active');
  $("body").on("click", ".language-button", function(){
    $('.language-button').removeClass("language-button-active");
    $(this).toggleClass("language-button-active");
  });
  loadNewCity("denver1");
  loadNewCityItem("denver1", 0);
  $(".col-1of9").click(function() {
    $(".col-1of9").removeClass("col-active");
    $(this).toggleClass('col-active');
    $(".city-item-menu-option").removeClass("city-item-menu-option-active");
    $(".city-item-menu-option:nth-child(1)").toggleClass("city-item-menu-option-active");
    
  });
  $("body").on("click", ".city-item-menu-option", function(){
    $('.city-item-menu-option').removeClass("city-item-menu-option-active");
    $(this).toggleClass("city-item-menu-option-active");
  });
  $(".city-item-menu-option:first").addClass("city-item-menu-option-active");
  console.log('ready!');
});


function changeLanguage(lang) {
  currentLanguage = lang;
  cityName = currentCityNameAndNo[0];
  cityItem = currentCityNameAndNo[1];

  $('.city-item-menu-option > div').each(function(i) {
    $(this).html(pageContents[currentCityNameAndNo[0]].cityItems[[i]].cityItemMenuOption[currentLanguage])
  });
  $('.col-1of9-contents-1of3').each(function(i) {
    $(this).html(langContents.dayButtonLabels[currentLanguage][i])
  });
  if (typeof pageContents[cityName].cityItems[cityItem].cityItemMenuOption === 'object' && pageContents[cityName].cityItems[cityItem].cityItemMenuOption !== null) {
    $('#city-headline-name').html(pageContents[cityName].cityItems[cityItem].cityItemMenuOption[currentLanguage]);
  }
  else {
    $('#city-headline-name').html(pageContents[cityName].cityItems[cityItem].cityItemMenuOption);
  }
  console.log("Current language is now " + currentLanguage);
}


function openCity(cityName) {
  loadNewCity(cityName);
  $(".city-item-menu-option:first").addClass("city-item-menu-option-active");
  console.log('new city loaded dynamically');

};



/* controls the dynamic generation of the page content */

function loadNewCity(cityName) {
  let tempCityName = cityName;
  currentCityNameAndNo = [cityName, undefined];
  console.log('currentCityNameAndNo variable is: ' + currentCityNameAndNo);
  if (typeof pageContents[cityName].cityItems[0].cityItemMenuOption === 'object' && pageContents[cityName].cityItems[0].cityItemMenuOption !== null) {
    $('#city-headline-name').html(pageContents[cityName].cityItems[0].cityItemMenuOption[currentLanguage]);
  }
  else {
    $('#city-headline-name').html(pageContents[cityName].cityItems[0].cityItemMenuOption);
  }
  $('#city-headline-date').html(pageContents[tempCityName].headlineData[1]);
  console.log("city items amount: " + pageContents[tempCityName].cityItems.length);
  $('#item-menu').empty();
  for (i = 0; i < pageContents[tempCityName].cityItems.length; i++) {
    let langTemp = undefined;
    if (typeof pageContents[cityName].cityItems[i].cityItemMenuOption === 'object' && pageContents[cityName].cityItems[i].cityItemMenuOption !== null) {
      langTemp = pageContents[cityName].cityItems[i].cityItemMenuOption[currentLanguage];
    }
    else {
      langTemp = pageContents[cityName].cityItems[i].cityItemMenuOption;
    }
    $('#item-menu').append(`<div class="city-item-menu-option" onclick="loadNewCityItem('${tempCityName}',${i})"><div>${langTemp}</div></div>`);
  };
  loadNewCityItem(tempCityName, 0);

};
function loadNewCityItem(cityName, itemNo) {    /* controls the dynamic generation of specific city items */
  currentCityNameAndNo = [cityName, itemNo];
  console.log("currentCityNameAndNo is " + cityName, itemNo);
  if (typeof pageContents[cityName].cityItems[itemNo].cityItemMenuOption === 'object' && pageContents[cityName].cityItems[itemNo].cityItemMenuOption !== null) {
    $('#city-headline-name').html(pageContents[cityName].cityItems[itemNo].cityItemMenuOption[currentLanguage]);
  }
  else {
    $('#city-headline-name').html(pageContents[cityName].cityItems[itemNo].cityItemMenuOption);
  }
  $('.city-items-container').empty();
  var tempArray = [];
  if (pageContents[cityName].cityItems[itemNo].slideText !== undefined) {
    tempArray.push({html: `<div class="slide-text">${pageContents[cityName].cityItems[itemNo].slideText}<p>Galeria >>>></p></div>`, thumb: `img/text_icon.png`});
  }
  var imgCheckForVideo = false;   /* used to check whether a gallery component exists, used by the video Fotorama component to determine whether is should create one */
  console.log('is there a gallery present? ' +  pageContents[cityName].cityItems[itemNo].showGallery);
  if (pageContents[cityName].cityItems[itemNo].showGallery) {   /* if the gallery property of page-contents City Info is true, proceed with loading the gallery. Otherwise don't and just load the text */
    $('.city-items-container').append(`<div class="city-item gallery-container"><div class="fotorama"
    data-nav="thumbs" data-allowfullscreen="native" data-arrows="true" data-click="true" data-swipe="true" data-transition="slide" data-fit="scaledown" data-thumbwidth="120" data-auto="false" data-width="100%" data-keyboard="true"></div></div>`);
    imgCheckForVideo = true;
    for (i = 1; i <= pageContents[cityName].cityItems[itemNo].imagesNo; i++) {
      tempArray.push({img: `img/${pageContents[cityName].cityItems[itemNo].cityItemCodename}/${pageContents[cityName].cityItems[itemNo].cityItemCodename}_${i}.jpg`, thumb: `img/${pageContents[cityName].cityItems[itemNo].cityItemCodename}/${pageContents[cityName].cityItems[itemNo].cityItemCodename}_${i}_thumb.jpg`, caption: `${pageContents[cityName].cityItems[itemNo].caption} (${i}/${pageContents[cityName].cityItems[itemNo].imagesNo})`});
    };
    if (pageContents[cityName].cityItems[itemNo].showVideos == false) {
      $('.fotorama').fotorama({
        data: tempArray
      });
    }
 
  }
  if (pageContents[cityName].cityItems[itemNo].showVideos) {
    if (imgCheckForVideo == false) {
      $('.city-items-container').append(`<div class="city-item gallery-container"><div class="fotorama"
    data-nav="thumbs" data-allowfullscreen="native" data-arrows="true" data-click="true" data-swipe="true" data-transition="slide" data-fit="scaledown" data-thumbwidth="120" data-auto="false" data-width="100%" data-keyboard="true"></div></div>`);
    }
    var tempVidLength = Object.keys(pageContents[cityName].cityItems[itemNo].videos)
    for (j = 0; j < tempVidLength.length; j++) {
      var tmpVid = `vid${j+1}`;
      tempArray.push({video: pageContents[cityName].cityItems[itemNo].videos[tmpVid]});
    };
    $('.fotorama').fotorama({
      data: tempArray
    });    
  }
  else {    
    $('.city-items-container').append(pageContents[cityName].cityItems[itemNo].contentText);
  }
}
