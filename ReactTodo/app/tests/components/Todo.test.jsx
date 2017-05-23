const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const Todo = require('Todo');

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });
});