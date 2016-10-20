var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-centered">About</h1>
      <p>Welcome to the about page for my React Weather App</p>
      <p>Tools and relevant links:</p>
      <ul>
        <li><a href="https://facebook.github.io/react">React</a></li>
        <li><a href="https://openweathermap.org">Open Weather Map API</a></li>
        <li><a href="https://github.com/Haydos585/Complete-React-Web-Developer">GitHub Repo</a></li>
      </ul>
    </div>
  )
};

module.exports = About;