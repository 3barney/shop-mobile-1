import React, {Component} from 'react';
import {Text} from 'react-native';

class ItemView extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    return (
      <Text>Hello </Text>
    );
  }
}

export default ItemView;
