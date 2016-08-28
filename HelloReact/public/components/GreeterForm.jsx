var React = require('react');

var GreeterForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();
    
    var updates = {};
  
    var name = this.refs.name.value;
    if (name.length > 0) {
      this.refs.name.value = '';
      updates.name = name;
    }

    var message = this.refs.message.value;
    if (message.length > 0) {
      this.refs.message.value = '';
      updates.message = message;
    }

    this.props.onUpdates(updates);
  },
  render: function() {
    return(
        <form onSubmit={this.onFormSubmit}>
          <div>
            <input type="text" ref="name" placeholder="Enter name"/>
          </div>
          <div>
            <textarea ref="message" placeholder="Enter message"></textarea>
          </div>
          <div>
            <button>Submit Updates</button>
          </div>
        </form>
    )
  }
});

module.exports = GreeterForm;