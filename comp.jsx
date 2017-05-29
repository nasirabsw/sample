import React from 'react';

const NameInput = React.createClass({
  render() {
    return (
      <div className="form-group">
        <label for="name">Name</label>
        <input id="name" value={this.props.name} onChange={this.props.onChange} />
      </div>
    );
  },
});
const DisplayName = React.createClass({
  render() {
    return (
      <p>My name is {this.props.name}.</p>
    );
  },
});
const App = React.createClass({
  getInitialState() {
    return {
      name: this.props.name,
    };
  },
  
  changeName() {
    this.setState({ name: event.target.value });
  },
  
  render() {
    return (
      <div>
        <NameInput name={this.state.name} onChange={this.changeName} />
        <DisplayName name={this.state.name} />
      </div>
    );
  },
});

export default NameInput;
