const expect = require('expect');

const TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      let todos = [{
        id: 23,
        text: 'test all files',
        completed: false,
      }];
      TodoAPI.setTodos(todos);
      const actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
      let todos = {a: 'b'};
      TodoAPI.setTodos(todos);

      expect(localStorage.getItem('todos')).toBe(null);
    })
  });

  describe('getTodos', () => {
    it('should return empty array for bad localstorage data', () => {
      let actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('should return todos if valid array in local storage', () => {
      let todos = [{
        id: 23,
        text: 'test all files',
        completed: false,
      }];
      localStorage.setItem('todos', JSON.stringify(todos));

      let actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual(todos);
    });
  });

  describe('fitlerTodos', () => {
    let todos = [
      {
        id: 1,
        text: 'text 1',
        completed: true,
      },
      {
        id: 2,
        text: 'more text 2',
        completed: false,
      },
      {
        id: 3,
        text: 'more text 3',
        completed: true,
      }
    ];

    it('should return all items if show completed is true', () => {
      let filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });

    it('should return 1 items if show completed is false', () => {
      let filteredTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1);
    });

    it('should sort by completed status', () => {
      let filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos[0].completed).toBe(false);
    });

    it('should filter todos by searchText', () => {
      let filteredTodos = TodoAPI.filterTodos(todos, true, 'more');
      expect(filteredTodos.length).toBe(2);
    });

    it('should return all todos if searchText is empty', () => {
      let filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });
  })
});