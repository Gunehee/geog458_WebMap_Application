// initialize basemmap
mapboxgl.accessToken =
'pk.eyJ1IjoiamFrb2J6aGFvIiwiYSI6ImNpcms2YWsyMzAwMmtmbG5icTFxZ3ZkdncifQ.P9MBej1xacybKcDN_jehvw';
const map = new mapboxgl.Map({
'projection': 'albers',
container: 'map', // container ID
style: 'mapbox://styles/mapbox/light-v10', // style URL
zoom: 3, // starting zoom
center: [-100, 40] // starting center
});

// load data and add as layer
async function geojsonFetch() {
let response = await fetch('assets/us-covid-2020-rates.geojson');
let covid_data = await response.json();

map.on('load', function loadingData() {
    map.addSource('us-covid-2020-rates', {
        type: 'geojson',
        data: covid_data
    });

    map.addLayer({
        'id': 'us-covid-2020-rates-layer',
        'type': 'fill',
        'source': 'us-covid-2020-rates',
        'paint': {
            'fill-color': [
                'step',
                ['get', 'rates'],
                '#FFF5EB',   // stop_output_0
                10,          // stop_input_0
                '#FEE6CE',   // stop_output_1
                20,          // stop_input_1
                '#FDD0A2',   // stop_output_2
                30,          // stop_input_2
                '#FDAE6B',   // stop_output_3
                50,         // stop_input_3
                '#FD8D3C',   // stop_output_4
                60,         // stop_input_4
                '#F16913',   // stop_output_5
                70,         // stop_input_5
                '#D94801',   // stop_output_6
                80,        // stop_input_6
                '#A63603',    // stop_output_7
                100,       // stop_input_7  
                "#7F2704"    // stop_output_8
            ],
            'fill-outline-color': '#BBBBBB',
            'fill-opacity': 0.7,
        }
    });

    const layers = [
        '0-9 %',
        '10-19 %',
        '20-29 %',
        '30-49 %',
        '50-59 %',
        '60-69 %',
        '70-79 %',
        '80-99 %',
        '100 and more'
    ];
    const colors = [
        '#FFF5EB',
        '#FEE6CE',
        '#FDD0A2',
        '#FDAE6B',
        '#FD8D3C',
        '#F16913',
        '#D94801',
        '#A63603',
        '#7F2704'
    ];

    // create legend
    const legend = document.getElementById('legend');
    legend.innerHTML = "<b>US Covid rates of people<br>(rates/county)</b><br><br>";


    layers.forEach((layer, i) => {
        const color = colors[i];
        const item = document.createElement('div');
        const key = document.createElement('span');
        key.className = 'legend-key';
        key.style.backgroundColor = color;

        const value = document.createElement('span');
        value.innerHTML = `${layer}`;
        item.appendChild(key);
        item.appendChild(value);
        legend.appendChild(item);
    });
});

map.on('mousemove', ({point}) => {
    const state = map.queryRenderedFeatures(point, {
        layers: ['us-covid-2020-rates-layer']
    });
    document.getElementById('text-description').innerHTML = state.length ?
        `<h3>${state[0].properties.county}</h3><p><strong><em>${state[0].properties.rates}</strong>% per county </em></p>` :
        `<p>Hover over a state!</p>`;
});
}

geojsonFetch();