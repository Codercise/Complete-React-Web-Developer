var React = require('react');

var WeatherMessage = ({temp, location}) => {
    return (
      <h3>The weather is currently {temp} degrees in {location}.</h3>
    )
};

module.exports = WeatherMessage;