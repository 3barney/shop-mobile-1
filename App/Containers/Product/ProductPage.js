/* eslint-disable no-return-assign */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { ScrollView, DrawerLayoutAndroid } from 'react-native';
import { ScrollDriver } from '@shoutem/animation';
import { Screen, View } from '@shoutem/ui';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Makiko } from 'react-native-textinput-effects';

import SidebarView from '../Common/SidebarView';
import NavigationHeaderOtherPages from '../Common/NavigationHeaderOtherPages';
import styles from '../Common/Style';
import ProductList from './ProductList';
import products from '../Common/Mock/MockProducts';

// import CategoryList from './CategoryList'; TODO: Be product List

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
    this._openDrawer = this._openDrawer.bind(this);
    this._redirectToItemView = this._redirectToItemView.bind(this);
  }

  _openDrawer() {
    this.drawer.openDrawer();
  }

  _redirectToItemView(routeToNavTo, singleItem) {
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
        <Screen>
          <NavigationHeaderOtherPages
            _handleBackAction={this.props._handleBackAction}
            title="Products"
          />
          <ScrollView
            {...driver.scrollViewProps}
            showsVerticalScrollIndicator={false}
            style={styles.container}
          >
            <View style={{justifyContent: 'center', padding: 16, position: 'relative'}}>
              <Makiko
                style={{top: 0, bottom: 10}}
                label={'SEARCH PRODUCTS'}
                labelStyle={{paddingLeft: 10, fontWeight: 'normal'}}
                iconClass={FontAwesomeIcon}
                iconName={'search'}
                iconColor={'#FF4081'}
                inputStyle={{ color: '#FF4081', paddingLeft: 70 }}
              />
            </View>
            <ProductList products={products} redirectToItemView={this._redirectToItemView} />
          </ScrollView>
        </Screen>
      </DrawerLayoutAndroid>
    );
  }
}

ProductPage.propTypes = {
  _handleNavigate: PropTypes.func.isRequired,
  _handleBackAction: PropTypes.func.isRequired,
};

export default connect(null, null)(ProductPage);
