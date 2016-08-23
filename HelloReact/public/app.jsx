var GreeterMessage = React.createClass({
  render: function() {
    var name = this.props.name;
    var message = this.props.message;
    return(
      <div>
        <h1>Hi {name}!</h1>
        <p>{message}</p>
      </div>
    )
  }
});

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

var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React',
      message: 'No Message'
    };
  },
  
  getInitialState: function () {
    return {
      name: this.props.name,
      message: this.props.message
    }
  },

  handleUpdates: function (updates) {
    this.setState(updates);
  },

  render: function() {
    var name = this.state.name;
    var message = this.state.message;

    return (
      <div>
        <GreeterMessage name={name} message={message} />
        <GreeterForm onUpdates={this.handleUpdates} />
      </div>
    );
  }
});

var firstName = "Nick";
var message = "This is my message";

ReactDOM.render(
  <Greeter name={firstName} message={message} />,
  document.getElementById('app')
);