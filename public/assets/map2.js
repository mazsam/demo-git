let places= [
    {"lokasi": [-6.221028, 106.791434], "sponsor" : "Restoran Spanyol"},
    {"lokasi":  [-6.219912, 106.791239], "sponsor" : "Warung Kopi"},
    {"lokasi": [-6.220529, 106.789848], "sponsor" : "Depot Ikan Bakar"},
    {"lokasi": [-6.222977, 106.789152], "sponsor" : "Gudang STEAK"},
    {"lokasi":[-6.222043, 106.791070], "sponsor" : "Seafood!!"}
];
var mymap = L.map('mapid').setView(places[0].lokasi, 15);
// var marker = L.marker([-8.701660,115.169856]).addTo(mymap);
for (var p of places) {
    var marker = L.marker(p.lokasi).addTo(mymap).bindPopup(p.sponsor);
}

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
    {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoibWF6c2FtIiwiYSI6ImNqbWtlcDFtZTAwMTIzb252dm5pNnJpdHcifQ.9MUL3ABZX4_Zloq6SXOE9g'
    }).addTo(mymap);

// var circle = L.circle([-8.701660,115.169856], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(mymap);

// var polygon = L.polygon([
//     [51.509, -0.08],
//     [51.503, -0.06],
//     [51.51, -0.047]
// ]).addTo(mymap);

// marker.bindPopup("<b>Resto top disini/b><br>yes!").openPopup();
// circle.bindPopup("Ini sebuah circle.");
// polygon.bindPopup("Ini sebuah polygon.");

// var popup = L.popup()
// .setLatLng([-8.703315, 115.168869])
// .setContent("Restoran terbaik disini.")
// .openOn(mymap);
// function onMapClick(e) {
//     console.log("Peta diklik pada posisi " + e.latlng);
// }
// mymap.on('click', onMapClick);

// var popup = L.popup();
// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent("Lokasi yang dipilih: " + e.latlng.toString())
//         .openOn(mymap);
// }
// mymap.on('click', onMapClick);