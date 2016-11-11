const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const Controls = require('Controls');

describe('Controls', () => {
  it('should exist', function() {
    expect(Controls).toExist();
  });
});

describe('Render', () => {
  it('should render pause when started', () => {
    const controls = TestUtils.renderIntoDocument(<Controls countdownStatus={'started'}/>);
    const $el = $(ReactDOM.findDOMNode(controls));

    const pauseButton = $el.find('button:contains(Pause)');
    expect(pauseButton.length).toBe(1);
  });

  it('should render start when paused', () => {
    const controls = TestUtils.renderIntoDocument(<Controls countdownStatus={'paused'}/>);
    const $el = $(ReactDOM.findDOMNode(controls));

    const startButton = $el.find('button:contains(Start)');
    expect(startButton.length).toBe(1);
  });
});