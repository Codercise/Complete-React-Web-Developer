const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');

$(document).foundation();

// App CSS
require('style!css!sass!ApplicationStyles');

ReactDOM.render(
  <p>BoilerPlate3 Project</p>,
  document.getElementById('app')
);