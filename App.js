import React, { Component } from 'react';

import { AsyncSetup } from './src/boot/AsyncSetup';

export default class App extends Component {
  render() {

    //Calls Setup:
    return <AsyncSetup />
  }
}
