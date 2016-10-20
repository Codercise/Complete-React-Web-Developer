var React = require('react');
var OpenWeatherMap = require('OpenWeatherMap');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleSearch: function(location) {
    var that = this // change

    this.setState({isLoading: true});

    OpenWeatherMap.getTemp(location).then(function(temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(message) {
      alert("Error: "+message);
      that.setState({isLoading: false});
    });
  },
  render: function() {
    var {isLoading, location, temp} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-centered">Fetching weather...</h3>
      } else if(temp && location) {
        return <WeatherMessage location={location} temp={temp} />
      }
    }

    return (
      <div>
        <h1 className="text-centered">Weather Component</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
      </div>
    )
  }
});

module.exports = Weather;