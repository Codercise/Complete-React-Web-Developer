var axios = require('axios');

// 23cb1e80b779bf22f2382d01ddbba032
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=23cb1e80b779bf22f2382d01ddbba032&units=metric';

module.exports = {
  getTemp: function(location) {
    var encoded_location = encodeURIComponent(location);
    var request_url = `${OPEN_WEATHER_MAP_URL}&q=${encoded_location}`;

    return axios.get(request_url).then(function(res) {
      if(res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function(res) {
      throw new Error(res.data.message);
    });
  }
}