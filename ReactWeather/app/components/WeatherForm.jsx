var React = require('react');

var WeatherForm = React.createClass({
  render: function() {
    return (
      <form>
        <input type="text" placeholder="Enter city name" />
        <button>Get weather</button>
      </form>
    )
  }
});

module.exports = WeatherForm;