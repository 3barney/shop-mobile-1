// @flow

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../App/Store/configureStore';
import NavContainer from '../App/Navigator/NavContainer';

function setup(): React.Component {
  class Root extends Component {

    constructor() {
      super();
      this.state = {
        isLoading: false,
        store: configureStore(() => {
          this.setState({ isLoading: false });
        }),
      };
    }

    render() {
      return (
        <Provider store={this.state.store}>
          <NavContainer />
        </Provider>
      );
    }
  }
  return Root;
}

export default setup;
