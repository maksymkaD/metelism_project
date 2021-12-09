var L = require('leaflet')
var leafletMap = require('leaflet-map')

window.createMap = function(lat,long) {

    var map = L.map('map').setView([lat, long], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    L.marker([lat, long]).addTo(map)
    .bindPopup('ХОЙ!')
    .openPopup();
}
//browserify leaflet.js -o leaflet-b.js document.getElementById("popup-form-container").innerHTML=""; 50.448518,30.5181423