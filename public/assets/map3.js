let gmb= document.getElementById("image");
let rev= document.getElementById("review");
let img= document.createElement('img');
let par= document.createElement('p');
gmb.appendChild(img);
rev.appendChild(par);

function showLocation(e) {
    img.src= e.sourceTarget.gambar;
    par.textContent= e.sourceTarget.review;
}

const URL = "data/peta.json";
fetch(URL)
    .then( res => {
        return res.json()
    })
    .then(res => {
        dataPlaces(res.places)
    })
    .catch(err => {
        console.log(err)
    })

function dataPlaces(input){
    var mymap = L.map('mapid').setView(input[0].lokasi, 15);
    for (var p of input) {
        var marker = L.marker(p.lokasi).addTo(mymap).bindPopup(p.sponsor);
        marker.gambar = p.gambar
        marker.review = p.review
        marker.on('click', showLocation);
    }

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
        {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoibWF6c2FtIiwiYSI6ImNqbWtlcDFtZTAwMTIzb252dm5pNnJpdHcifQ.9MUL3ABZX4_Zloq6SXOE9g'
        }).addTo(mymap);
}