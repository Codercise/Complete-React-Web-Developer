const React = require('react');

const TodoSearch = React.createClass({
  render: function() {
    return(
      <div>
        <input onChange={this.props.searchTodos} type="text" ref="todoName" placeholder="Search todos..." />
        <input id="searchCompleted" type="checkbox" /><label htmlFor="searchCompleted">Search completed todos</label>
      </div>
    );
  }
});

module.exports = TodoSearch;