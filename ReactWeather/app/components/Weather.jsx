var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
  render: function() {
    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm />
        <WeatherMessage city={"Tokyo"} />
      </div>
    )
  }
});

module.exports = Weather;