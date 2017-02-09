import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Examples } from '@shoutem/ui';

class Shop extends Component {
  render() {
    return (
      <Examples />
    );
  }
}

AppRegistry.registerComponent('Shop', () => Shop);
