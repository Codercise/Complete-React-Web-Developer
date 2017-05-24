const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-dom/test-utils');
const expect = require('expect');
const $ = require('jQuery');
const AddTodo = require('AddTodo');

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should call on addTodo prop with valid data', () => {
    let todoText = 'Todo value';
    let spy = expect.createSpy();
    let addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);
    let $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(todoText);
  });

  it('should not call on addTodo prop with invalid data', () => {
    let todoText = '';
    let spy = expect.createSpy();
    let addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);
    let $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});