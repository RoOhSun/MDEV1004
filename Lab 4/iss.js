const issApi = "https://api.wheretheiss.at/v1/satellites/25544"

async function fetchLocation() {
    const data = await fetch(issApi);
    const object = await data.json();

    const coordinates = [object.latitude, object.longitude];

    var map = L.map('map').setView(coordinates, 8);
    var marker = L.marker(coordinates, { draggable: true }).addTo(map);

    const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    document.getElementById('latitude').textContent = object.latitude;
    document.getElementById('longitude').textContent = object.longitude;

    console.log(object.latitude);
    console.log(object.longitude);
}

fetchLocation();



