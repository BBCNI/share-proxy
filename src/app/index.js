import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <a href={this.props.redirect}>Continue to Site</a>
      </div>
    );
  }
}
