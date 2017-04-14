const React = require('react');
const {Link, IndexLink} = require('react-router');

const Navigation = () => {
  return (
    <div className="top-bar dark">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">React ToDo App</li>
          <li>
            <IndexLink to="/" activeClassName="active-link">Todo</IndexLink>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">Created by <a href="#">Nick Hayden</a></li>
        </ul>
      </div>
    </div>
  )
}

module.exports = Navigation;