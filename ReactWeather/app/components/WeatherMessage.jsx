var React = require('react');

var WeatherMessage = React.createClass({
  render: function() {
    return (
      <p>The weather is currently 23 degrees in {this.props.city}.</p>
    )
  }
});

module.exports = WeatherMessage;