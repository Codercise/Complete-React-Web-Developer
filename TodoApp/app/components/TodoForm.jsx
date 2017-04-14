const React = require('react');

const TodoForm = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();
    const todoName = this.refs.todoName.value;
    this.props.updateTodoList(todoName);

    this.refs.todoName.value = '';
  },
  render: function() {
    return(
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="todo-form">
          <input type="text" ref="todoName" placeholder="What is there todo?"/>
          <button type="submit" className="button expanded">Start</button>
        </form>
      </div>
    );
  }
});

module.exports = TodoForm;