// require('dotenv').config()
$.get("/api/").then(data => {
    mapboxgl.accessToken = "pk.eyJ1IjoiYmJyaW50bGUiLCJhIjoiY2toY2VzMXVuMDA1YjJ4bnk3a3Myc2xoOSJ9.utPq30o3rq4GihknsRgSFQ";

    var geojson = {
        'type': 'FeatureCollection',
        'features': []
    };

    var uploadFileName = [];
    const hauntedPlaceArray = [];
    const historicalPlaceArray = [];
    const tvFilmPlaceArray = [];

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-117.325, 33.9738],
        zoom: 9
    });
    var nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'top-left');

    // Add geolocate control to the map.
    map.addControl(
        new mapboxgl.GeolocateControl({
            positionOptions: {
            enableHighAccuracy: true
            },
            trackUserLocation: true,
            showAccuracyCircle: false,
            showUserLocation: false
        })
    );

    data.forEach(hauntedPlace => {
        const hauntedPlaceCreated = hauntedPlace.createdAt;
        date = new Date(hauntedPlaceCreated);
        entireDateString = date.toDateString()

        let newFeature = {
            'type': 'Feature',
            'properties': {
                'message': `${hauntedPlace.haunted_locations}\n${hauntedPlace.note}\nFound by: ${hauntedPlace.foundByUser}\nCreated: ${entireDateString}`,
                'iconSize': [25, 25]
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [hauntedPlace.longitude, hauntedPlace.latitude]
                }
        }
        hauntedPlaceArray.push(hauntedPlace)
        geojson.features.push(newFeature)
        uploadFileName.push(hauntedPlace.picture)
    });

    data.forEach(historicalPlace => {
        const historicalPlaceCreated = historicalPlace.createdAt;
        date = new Date(historicalPlaceCreated);
        entireDateString = date.toDateString()

        let newFeature = {
            'type': 'Feature',
            'properties': {
                'message': `${historicalPlace.historical_locations}\n${historicalPlace.note}\nFound by: ${historicalPlace.foundByUser}\nCreated: ${entireDateString}`,
                'iconSize': [25, 25]
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [historicalPlace.longitude, historicalPlace.latitude]
                }
        }
        historicalPlaceArray.push(historicalPlace)
        geojson.features.push(newFeature)
        uploadFileName.push(historicalPlace.picture)
    });

    data.forEach(tvFilmPlace => {
        const tvFilmPlaceCreated = tvFilmPlace.createdAt;
        date = new Date(tvFilmPlaceCreated);
        entireDateString = date.toDateString()

        let newFeature = {
            'type': 'Feature',
            'properties': {
                'message': `${tvFilmPlace.tvFilm_locations}\n${tvFilmPlace.note}\nFound by: ${tvFilmPlace.foundByUser}\nCreated: ${entireDateString}`,
                'iconSize': [25, 25]
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [tvFilmPlace.longitude, tvFilmPlace.latitude]
                }
        }
        tvFilmPlaceArray.push(tvFilmPlace)
        geojson.features.push(newFeature)
        uploadFileName.push(tvFilmPlace.picture)
    });


    for (let i = 0; i < uploadFileName.length; i++){
        const el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundImage = `url("./img/pin.png")`;
        el.style.width = geojson.features[i].properties.iconSize[0] + 'px';
        el.style.height = geojson.features[i].properties.iconSize[1] + 'px'

        const animalCreated = animalArray[i].createdAt;
        date = new Date(animalCreated);
        entireDateString = date.toDateString()

        const createHTML = `
        <div class="animal_popup">
            <h1>${animalArray[i].animal_species}</h1>
            <p>${animalArray[i].note}</p>
            <p>Found by: ${animalArray[i].foundByUser}</p>
            <p>Created: ${entireDateString}</p>
            <img src="https://wildlife-observations-img-db.s3-us-west-1.amazonaws.com/${animalArray[i].picture}" >
        </div>`

        new mapboxgl.Marker(el)
        .setLngLat(geojson.features[i].geometry.coordinates)
        .setPopup(new mapboxgl.Popup().setHTML(createHTML))
        .addTo(map);
    }
});