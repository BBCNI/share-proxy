import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>hello world {this.props.siteConfig}</h1>
      </div>
    );
  }
}
