/* eslint-disable no-return-assign */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { ScrollView, DrawerLayoutAndroid } from 'react-native';
import { ScrollDriver } from '@shoutem/animation';
import { Screen, View, TextInput } from '@shoutem/ui';

import SidebarView from '../Common/SidebarView';
import NavigationHeaderOtherPages from '../Common/NavigationHeaderOtherPages';
import styles from '../Common/Style';
import products from '../Common/Mock/MockProducts';

// import CategoryList from './CategoryList'; TODO: Be product List

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
    this._openDrawer = this._openDrawer.bind(this);
    this._onProductPress = this._onProductPress.bind(this);
  }

  _openDrawer() {
    this.drawer.openDrawer();
  }

  _onProductPress() {
    console.log('product pressed');
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
        <ScrollView
          {...driver.scrollViewProps}
          showsVerticalScrollIndicator={false}
          style={styles.container}
        >
          <Screen>
            <NavigationHeaderOtherPages
              _handleBackAction={this.props._handleBackAction}
              title="Products"
            />
            <View>
              <TextInput
                placeholder={'Search For Products'} />
            </View>
          </Screen>
        </ScrollView>
      </DrawerLayoutAndroid>
    );
  }
}

ProductPage.propTypes = {
  _handleNavigate: PropTypes.func.isRequired,
  _handleBackAction: PropTypes.func.isRequired,
};

export default connect(null, null)(ProductPage);
