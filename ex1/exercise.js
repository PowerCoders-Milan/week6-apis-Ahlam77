var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 45.2801, lng: 9.1124},
    zoom: 8
  });
  
 new google.maps.Marker ({
  position: {lat: 45.2801, lng: 9.1124},
  map: map
});
}