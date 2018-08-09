

let map;
let marker;
let infowindow;

function myMap() {
   let map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 38.631440, lng: -90.193188},
        zoom:18
    });
    let marker = new google.maps.Marker({
        position:{lat: 38.631440, lng: -90.193188},
        map: map,
    });
    let infowindow = new google.maps.InfoWindow({
        content: '<strong>Analome</strong> <em>123</em>'
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}
    