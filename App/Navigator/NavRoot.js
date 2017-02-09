/* eslint-disable react/forbid-prop-types, react/require-default-props,
 react/no-unused-prop-types */
/* eslint-disable no-console, global-require, class-methods-use-this, no-useless-escape */
import React, { Component, PropTypes } from 'react';
import {
  BackAndroid,
  NavigationExperimental,
  Text,
} from 'react-native';

// import HomePage from '../Containers/Home/HomePage';

const {
  CardStack: NavigationCardStack,
} = NavigationExperimental;

export default class NavRoot extends Component {

  constructor(props) {
    super(props);
    this.state = {
      token: '',
      loggedIn: false,
    };
    this._renderScene = this._renderScene.bind(this);
    this._handleBackAction = this._handleBackAction.bind(this);
    this._handleNavigate = this._handleNavigate.bind(this);
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this._handleBackAction);
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this._handleBackAction);
  }

  _renderScene(props) {
    console.log(props);
    const { route } = props.scene;
    console.log(route);

    if (route.key === 'home') {
      // return <HomePage />;
      return <Text>Am home</Text>;
    }
  }

  _handleBackAction() {
    if (this.props.navigation.index === 0) {
      return false;
    }
    this.props.popRoute();
    return true;
  }

  _handleNavigate(action) {
    switch (action && action.type) {
      case 'push':
        this.props.pushRoute(action.route);
        return true;
      case 'back':
      case 'pop':
        return this._handleBackAction();
      default:
        return false;
    }
  }

  render() {
    return (
      <NavigationCardStack
        direction="vertical"
        navigationState={this.props.navigation}
        onNavigate={this._handleNavigate()}
        renderScene={this._renderScene}
      />
    );
  }
}

NavRoot.propTypes = {
  navigation: PropTypes.object.isRequired,
  popRoute: PropTypes.func,
  pushRoute: PropTypes.func,
  scene: PropTypes.shape({
    route: PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  }),
};
