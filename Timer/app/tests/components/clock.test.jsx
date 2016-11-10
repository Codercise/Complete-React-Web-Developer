const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock', () => {
  it('should exist', function() {
    expect(Clock).toExist();
  });

  describe('Format Seconds', () => {
    it('should format seconds', () => {
      const clock = TestUtils.renderIntoDocument(<Clock/>);
      const seconds = 615;
      const expected = "10:15";
      const actual = clock.formatSeconds(seconds);
      expect(actual).toBe(expected);
    });

    it('should format seconds when min/sec are less than 10', () => {
      const clock = TestUtils.renderIntoDocument(<Clock/>);
      const seconds = 61;
      const expected = "01:01";
      const actual = clock.formatSeconds(seconds);
      expect(actual).toBe(expected);
    });
  });

  describe('Render', () => {
    it('should render clock to output', () => {
      const clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62} />);
      var $el = $(ReactDOM.findDOMNode(clock));
      var actualText = $el.find(".clock-text").text();

      expect(actualText).toBe("01:02");
    });
  })
});