const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
  it('should exist', function() {
    expect(Countdown).toExist();
  });
});

describe('handleSetCountdown', () => {
  it('should set state to started and countdown', (done) => {
    const countdown = TestUtils.renderIntoDocument(<Countdown/>);
    countdown.handleSetCountdown(10);

    expect(countdown.state.count).toBe(10);
    expect(countdown.state.countDownStatus).toBe('started');

    setTimeout(() => {
      expect(countdown.state.count).toBe(9);
      done();
    }, 1100);
  });

  it('should never go below zero', (done) => {
    const countdown = TestUtils.renderIntoDocument(<Countdown/>);
    countdown.handleSetCountdown(1);

    setTimeout(() => {
      expect(countdown.state.count).toBe(0);
      done();
    }, 2001);
  });
});