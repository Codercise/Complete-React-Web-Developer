const React = require('react');
const Navigation = require('Navigation');

const TodoForm = require('TodoForm');
const TodoList = require('TodoList');
const TodoSearch = require('TodoSearch');

const Main = React.createClass({
  getInitialState: function() {
    return {
      todoList: JSON.parse(localStorage.getItem('todolist')) || []
    }
  },
  updateTodoList: function(todoName) {
    const currentList = this.state.todoList;
    currentList.push({name: todoName, completed: false});
    this.setState({
      todoList: currentList
    });

    localStorage.setItem('todolist', JSON.stringify(this.state.todoList));
  },
  searchTodoList: function(e) {
    let todoList = this.state.todoList;
    let searchTerm = e.currentTarget.value;
    let searchChecked = jQuery('#searchCompleted')[0].checked;

    if (searchTerm.length >= 1) {
      jQuery('.todo-list ul li').hide();
    } else {
      jQuery('.todo-list ul li').show();
    }

    for(var i = 0; i < todoList.length; i++) {
      var itemIndex = i + 1;
      var listItem = jQuery('.todo-list ul li:nth-child('+itemIndex+')');

      if (todoList[i]['name'].includes(searchTerm)) {
        if (todoList[i]['completed'] === false) {
          jQuery(listItem).show();
        }
        if (todoList[i]['completed'] === true && searchChecked === true) {
          jQuery(listItem).show();
        }
      }
    }
  },
  render: function() {
    return (
      <div>
        <Navigation />
        <div className="row">
          <div className="column small-centered medium-6 large-6">
            <h1 className='page-title'>Todo App</h1>
            <div className="todo-container small-centered small-12 column">
              <TodoSearch searchTodos={this.searchTodoList} />
              <TodoList todoList={this.state.todoList} />
              <TodoForm updateTodoList={this.updateTodoList} />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Main;