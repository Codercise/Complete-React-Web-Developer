const React = require('react');

const Controls = React.createClass({
  propTypes: {
    timerCountdownStatus: React.PropTypes.string.isRequired,
    timer: React.PropTypes.bool,
    onStatusChange: React.PropTypes.func.isRequired
  },
  onStatusChange: function(newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    };
  },
  render: function() {
    let {timerCountdownStatus, isTimer} = this.props;
    const renderStartStopButton = () => {
      if (timerCountdownStatus === 'started') {
        return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
      } else if (timerCountdownStatus === 'paused' || isTimer === true) {
        return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
      }
    };
    
    return(
      <div className="controls">
        {renderStartStopButton()}
        <button className="button hollow alert" onClick={this.onStatusChange('stopped')}>
          Clear
        </button>
      </div> 
    )
  }
});

module.exports = Controls;