var $ = require('jquery');

module.exports = {
  setTodos: (todos) => {
    if($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: () => {
    let stringTodos = localStorage.getItem('todos');
    let todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch(e) {
    }

    return $.isArray(todos) ? todos : [];
  },

  filterTodos: function(todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    // filter by search text
    filteredTodos = filteredTodos.filter((todo) => {
      const text = todo.text.toLowerCase();

      return searchText.length === 0 || text.indexOf(searchText) > -1;
    });

    // sort by uncompleted first
    filteredTodos.sort((a, b) => {
      if(a.completed === false && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });
    return filteredTodos;
  }
}