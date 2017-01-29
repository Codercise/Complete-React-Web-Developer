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
    expect(countdown.state.countdownStatus).toBe('started');

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

  it('should pause countdown on paused status', () => {
    const countdown = TestUtils.renderIntoDocument(<Countdown />);
    countdown.handleSetCountdown(3);
    countdown.handleStatusChange('paused');
    setTimeout(() => {
      expect(countdown.state.count).toBe(3);
      expect(countdown.state.countdownStatus).toBe('paused');
      done();
    }, 1001);
  });

  it('should pause countdown on stopped status', () => {
    const countdown = TestUtils.renderIntoDocument(<Countdown />);
    countdown.handleSetCountdown(3);
    countdown.handleStatusChange('stopped');
    setTimeout(() => {
      expect(countdown.state.count).toBe(0);
      expect(countdown.state.countdownStatus).toBe('stopped');
      done();
    }, 3001);
  });
});