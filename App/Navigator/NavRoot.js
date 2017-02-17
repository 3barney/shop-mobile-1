/* eslint-disable react/require-default-props, react/no-unused-prop-types, no-console, global-require */
import React, { Component, PropTypes } from 'react';
import {
  BackAndroid,
  NavigationExperimental
} from 'react-native';

import HomePage from '../Containers/Home/HomePage';
import CategoryPage from '../Containers/Category/CategoryPage';
import ProductPage from '../Containers/Product/ProductPage';
import SingleCategoryPage from '../Containers/Category/SingleCategoryPage';
import ItemView from '../Containers/Item/ItemView';

const {
  CardStack: NavigationCardStack,
} = NavigationExperimental;

export default class NavRoot extends Component {

  constructor(props) {
    super(props);
    this.state = {
      token: '',
      loggedIn: false,
      categoryName: '',
      item: null,
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

  _handleBackAction() {
    if (this.props.navigation.index === 0) {
      return false;
    }
    this.props.popRoute();
    return true;
  }

  _handleNavigate(action, item) {
    if (typeof item === 'undefined') {
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
    switch (action && action.type) {
      case 'push':
        if (typeof item === 'string') {
          this.setState({categoryName: item});
        }
        this.setState({item});
        this.props.pushRoute(action.route);
        return true;
      case 'back':
      case 'pop':
        return this._handleBackAction();
      default:
        return false;
    }
  }

  _renderScene(props) {
    const { route } = props.scene;
    // console.log(route);

    if (route.key === 'home') {
      return <HomePage _handleNavigate={this._handleNavigate} />;
    }
    if (route.key === 'categories') {
      return <CategoryPage _handleNavigate={this._handleNavigate} _handleBackAction={this._handleBackAction} />;
    }
    if (route.key === 'products') {
      return <ProductPage _handleNavigate={this._handleNavigate} _handleBackAction={this._handleBackAction} />;
    }
    if (route.key === 'categories.single') {
      return (<SingleCategoryPage
        _handleNavigate={this._handleNavigate}
        _handleBackAction={this._handleBackAction}
        categoryName={this.state.categoryName}
      />);
    }
    if (route.key === 'item') {
      return (<ItemView
        _handleNavigate={this._handleNavigate}
        _handleBackAction={this._handleBackAction}
        item={this.state.item}
      />);
    }

    return <HomePage />;
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
