var React = require('react');

var WeatherMessage = React.createClass({
  render: function() {
    var {location, temp} = this.props;
    return (
      <p>The weather is currently {temp} degrees in {location}.</p>
    )
  }
});

module.exports = WeatherMessage;