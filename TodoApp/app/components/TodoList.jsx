const React = require('react');

const TodoList = React.createClass({
  completeTask: function(taskName, taskId, taskCompleted) {
    const todoItem = this.props.todoList[taskId];
    if (taskCompleted === false) {
      todoItem.completed = true;
    } else {
      todoItem.completed = false;
    }
    localStorage.setItem('todolist', JSON.stringify(this.props.todoList));
    this.forceUpdate();
  },
  printList: function() {
    if (this.props.todoList === null || this.props.todoList.length < 1) {
      return;
    } else {
      return(
        this.props.todoList.map(({ name, completed }, i) => (
          <li key={name +"-"+ i} className={`task-completed-`+completed.toString()}><input onClick={() => {this.completeTask(name, i, completed)}} id={name} type="checkbox" defaultChecked={completed}/><label htmlFor={name}>{name}</label></li>
        ), this)
      );
    }
  },
  render: function() {
    return(
      <div className="todo-list">
        <ul>
          {
            this.printList()
          }
        </ul>
      </div>
    );
  }
});

module.exports = TodoList;