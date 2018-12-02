import React, { Component } from 'react';

import { AsyncSetup } from './src/boot/AsyncSetup';

export default class App extends Component {
  render() {
    return <AsyncSetup /> //Calls setup first
  }
}
