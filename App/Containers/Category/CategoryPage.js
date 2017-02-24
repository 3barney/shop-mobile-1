/* eslint-disable no-return-assign */
import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { ScrollView, DrawerLayoutAndroid } from 'react-native';
import { ScrollDriver } from '@shoutem/animation';
import { View } from '@shoutem/ui';

import SidebarView from '../Common/SidebarView';
import NavigationHeaderOtherPages from '../Common/NavigationHeaderOtherPages';
import styles from '../Common/Style';
// import products from '../Common/Mock/MockProducts';
import CategoryList from './CategoryList';

class CategoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      products: [],
    };
    this._openDrawer = this._openDrawer.bind(this);
    this._redirectOnCategoryPress = this._redirectOnCategoryPress.bind(this);
  }

  componentWillMount() {
    this.setState({products: this.props.productsReducer});
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.productsReducer !== nextProps.productsReducer) {
      this.setState({products: nextProps.productsReducer});
    }
  }

  _openDrawer() {
    this.drawer.openDrawer();
  }

  _redirectOnCategoryPress(routeToNavTo, singleItem) {
    this.props._handleNavigate(routeToNavTo, singleItem);
  }

  render() {
    const driver = new ScrollDriver();

    return (
      <DrawerLayoutAndroid
        drawerBackgroundColor="#FFFFFF"
        drawerWidth={300}
        ref={_drawer => this.drawer = _drawer}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() =>
          <SidebarView
            loggedIn={this.state.loggedIn}
            _handleNavigate={this.props._handleNavigate}
          />
        }
      >

      <View style={{flex: 1, backgroundColor: '#29B6F6'}}>
        <NavigationHeaderOtherPages
          _handleBackAction={this.props._handleBackAction}
          title="Categories"
        />
        <ScrollView
          {...driver.scrollViewProps}
          showsVerticalScrollIndicator={false}
          style={styles.container}
        >
          <CategoryList
            products={this.state.products}
            redirectOnCategoryPress={this._redirectOnCategoryPress}
          />

        </ScrollView>
      </View>


      </DrawerLayoutAndroid>
    );
  }
}

CategoryPage.propTypes = {
  _handleNavigate: PropTypes.func.isRequired,
  _handleBackAction: PropTypes.func.isRequired,
  productsReducer: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    productsReducer: state.productsReducer
  };
}

export default connect(mapStateToProps, null)(CategoryPage);
