const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');

const TodoApp = require('TodoApp');

$(document).foundation();

// App CSS
require('style!css!sass!ApplicationStyles');

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);