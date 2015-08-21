function Weather() {
    this.findCity = function(name) {
        Ajax.getJSON('https://geocode-maps.yandex.ru/1.x/?format=json&geocode=' + name, function(geoData) {
            //console.log(geoData);
            var objects = geoData.response.GeoObjectCollection.featureMember.map(function(fm) {
                var go = fm.GeoObject,
                    coordinates = go.Point.pos.split(' ');
                return {
                    name: go.name,
                    description: go.description,
                    kind: go.metaDataProperty.GeocoderMetaData.kind,
                    longitude: coordinates[0],
                    latitude: coordinates[1]
                };
            }).filter(function(o) {
                return o.kind === 'locality';
            });

            document.querySelector('.weather__cities').innerHTML = Templates.Cities.render({
                cities: objects
            });
        });
    };

    this.getWeather = function(lat, lon) {
        Ajax.getJSON('SOME_URL', function(weatherData) {

        });
    };
}

var Templates = {
    Cities: Hogan.compile($('.templates__city').innerHTML),
    Weather: Hogan.compile($('.templates__weather').innerHTML)
};

var Ajax = {
    getJSON: function(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.send();
        xhr.onreadystatechange = function() {
            if (xhr.readyState != 4) return;
            callback(JSON.parse(xhr.responseText))
        };
    }
};
