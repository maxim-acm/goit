function Weather() {
    this.findCity = function(name) {
    };

    this.getWeather = function(lat, lon) {
    };
}

var Templates = {
    Cities: Hogan.compile(document.querySelector('.templates__city').innerHTML),
    Weather: Hogan.compile(document.querySelector('.templates__weather').innerHTML)
};

var Ajax = {
    getJSON: function(url, callback) {

    }
};
