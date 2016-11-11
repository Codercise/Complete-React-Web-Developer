const React = require('react');
const Clock = require('Clock');
const CountdownForm = require('CountdownForm');

const Countdown = React.createClass({
  getInitialState: function() {
    return { 
      count: 0,
      countDownStatus: 'stopped'
    };
  },
  handleSetCountdown: function(seconds) {
    this.setState({
      count: seconds,
      countDownStatus: 'started'
    });
  },
  componentDidUpdate: function(prevProps, prevState) {
    if (this.state.countDownStatus !== prevState.countDownStatus) {
      switch(this.state.countDownStatus) {
        case 'started':
          this.startTimer();
          break;
      }
    }
  },
  startTimer: function() {
    this.timer = setInterval(() => {
      let newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
    }, 1000)
  },
  render: function() {
    var {count} = this.state;
    return(
      <div>
        <Clock totalSeconds={count} />
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    )
  }
});

module.exports = Countdown;