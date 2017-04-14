const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');

const Main = require('Main');

$(document).foundation();

// App CSS
require('style!css!sass!ApplicationStyles');

ReactDOM.render(
  <Main />,
  document.getElementById('app')
);