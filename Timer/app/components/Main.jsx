const React = require('react');
const Navigation = require('Navigation');

const Main = (props) => {
  return (
    <div>
      <Navigation />
      <div className="row">
        <div className="column small-centered medium-6 large-4">
          <p>Main.jsx rendered</p>
          {props.children}
        </div>
      </div>
    </div>
  );
};

module.exports = Main;