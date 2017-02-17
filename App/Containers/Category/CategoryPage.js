/* eslint-disable no-return-assign */
import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { ScrollView, DrawerLayoutAndroid } from 'react-native';
import { ScrollDriver } from '@shoutem/animation';
import { Screen } from '@shoutem/ui';

import SidebarView from '../Common/SidebarView';
import NavigationHeaderBar from '../Common/NavigationHeaderBar';
import styles from '../Common/Style';
import products from '../Common/Mock/MockProducts';
import CategoryList from './CategoryList';

class CategoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
    this._openDrawer = this._openDrawer.bind(this);
    this._onCategoryPress = this._onCategoryPress.bind(this);
  }

  _openDrawer() {
    this.drawer.openDrawer();
  }

  _onCategoryPress() {
    console.log(this.state);
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
            <NavigationHeaderBar
              openDrawer={this._openDrawer}
              title="Categories"
            />
          <CategoryList products={products} onCategoryPress={this._onCategoryPress} />
          </Screen>

        </ScrollView>
      </DrawerLayoutAndroid>
    );
  }
}

CategoryPage.propTypes = {
  _handleNavigate: PropTypes.func.isRequired
};

export default connect(null, null)(CategoryPage);
