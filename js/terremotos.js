const YOUR_BING_MAPS_API_KEY = '';
const DEFAULT_DAYS_GAP = 2;
const EARTHQUAKE_URL = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime={startDate}&endtime={endDate}";

function setDefaultDates() {
    const today = new Date();
    const twoDaysAgo = new Date();
    twoDaysAgo.setDate(today.getDate() - DEFAULT_DAYS_GAP);

    const formatDate = (date) => {
        const d = new Date(date);
        let month = '' + (d.getMonth() + 1);
        let day = '' + d.getDate();
        const year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    };

    document.getElementById('startDate').value = formatDate(twoDaysAgo);
    document.getElementById('endDate').value = formatDate(today);
}

function buscarTerremotos() {
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;

    let url = EARTHQUAKE_URL.replace("{startDate}", startDate);
    url = url.replace("{endDate}", endDate);

    fetch(url)
        .then(response => response.json())
        .then(data => mostrarTerremotos(data.features))
        .catch(error => alert('Error al buscar terremotos:', error));
}

function mostrarTerremotos(terremotos) {
    const lista = document.getElementById('resultados');
    lista.innerHTML = '';
    terremotos.forEach(terremoto => {
        const item = document.createElement('li');
        item.classList.add('list-group-item');
        const enlace = document.createElement('a');
        enlace.href = '#';
        enlace.innerText = terremoto.properties.place;
        enlace.onclick = () => mostrarMapa(terremoto.geometry.coordinates, terremoto.properties.mag);
        item.appendChild(enlace);
        lista.appendChild(item);
    });
}

function mostrarMapa(coordinates, magnitude) {
    const mapa = document.getElementById('mapa');
    mapa.innerHTML = '';
    const map = new Microsoft.Maps.Map('#mapa',
    
        {
        center: new Microsoft.Maps.Location(coordinates[1], coordinates[0]),
            zoom: 6, 
            credentials: YOUR_BING_MAPS_API_KEY,
    });
    const pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), {
        title: 'Magnitud: ' + magnitude // Se muestra la magnitud como título del pushpin
    });
    map.entities.push(pushpin);
}



document.getElementById('formBuscar').addEventListener('submit', function(event) {
    event.preventDefault();
    buscarTerremotos();
});




window.onload = onceLoaded;
function onceLoaded() {
    console.log('window loaded');

     // Creamos script dinámicamente para poder añadir la clave de bing maps
     var script = document.createElement('script');
     script.type = 'text/javascript';
     script.src = 'http://www.bing.com/api/maps/mapcontrol?key=' + YOUR_BING_MAPS_API_KEY;
 
     // Añadimos antes de cerrar el body
     document.body.appendChild(script);

     setDefaultDates();
}


