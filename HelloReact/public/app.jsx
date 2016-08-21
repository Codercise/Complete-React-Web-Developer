var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React',
      message: 'No Message'
    };
  },
  render: function() {
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}</h1>
        <p>{message}</p>
      </div>
    );
  }
});

var firstName = "Nick";
var message1 = "This is my message";

ReactDOM.render(
  <Greeter name={firstName} message={message1}/>,
  document.getElementById('app')
);