$(document).ready(() => {
  $('.slider').slick({
    prevArrow: `<i class="fas fa-angle-down fas--left"></i>`,
    nextArrow: `<i class="fas fa-angle-down fas--right"></i>`,
  });

})

function initMap() {
  let map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.682176, lng: -73.9102105},
    zoom: 13
  });
  
}

