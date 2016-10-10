var React = require('react');
var OpenWeatherMap = require('OpenWeatherMap');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      location: 'Miami',
      temp: 38
    }
  },
  handleSearch: function(location) {
    var that = this // change
    OpenWeatherMap.getTemp(location).then(function(temp) {
      that.setState({
        location: location,
        temp: temp
      });
    }, function(message) {
      alert("Error: "+message);
    });
  },
  render: function() {
    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch} />
        <WeatherMessage location={this.state.location} temp={this.state.temp} />
      </div>
    )
  }
});

module.exports = Weather;