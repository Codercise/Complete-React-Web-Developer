const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');

const Main = require('Main');
const Timer = require('Timer');
const Countdown = require('Countdown');

require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// App CSS
require('style!css!sass!ApplicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Timer}> </IndexRoute>
      <Route path="/countdown" component={Countdown}></Route>
    </Route>
  </Router>,
  document.getElementById('app')
);