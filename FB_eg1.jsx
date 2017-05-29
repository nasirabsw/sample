import React from 'react';

class Square extends React.component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}