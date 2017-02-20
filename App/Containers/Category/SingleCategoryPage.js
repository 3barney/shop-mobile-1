import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import {DrawerLayoutAndroid, ScrollView, Text} from 'react-native';
import {Screen} from '@shoutem/ui';
import { ScrollDriver } from '@shoutem/animation';
import * as _ from 'lodash';

import SidebarView from '../Common/SidebarView';
import NavigationHeaderOtherPages from '../Common/NavigationHeaderOtherPages';
import styles from '../Common/Style';
import products from '../Common/Mock/MockProducts';
import SingleCategoryList from './SingleCategoryList';

class SingleCategoryPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categoryName: this.props.categoryName, // TODO: Should be _id once hooked To Mongo
      items: [],
      loggedIn: false,
    };
    this._redirectToItemView = this._redirectToItemView.bind(this);
  }

  componentWillMount() {
    const catItems = _.filter(products, {categoryName: this.state.categoryName});
    return this.setState({items: catItems});
  }

  _redirectToItemView(routeToNavTo, item) {
    this.props._handleNavigate(routeToNavTo, item);
  }

  render() {
    console.log(this.props);
    console.log(this.state);
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
          title={this.state.categoryName}
        />
        <ScrollView
          {...driver.scrollViewProps}
          showsVerticalScrollIndicator={false}
          style={styles.container}
        >
          <SingleCategoryList items={this.state.items} redirectToItemView={this._redirectToItemView} />
        </ScrollView>
      </Screen>


      </DrawerLayoutAndroid>
    );
  }
}

SingleCategoryPage.propTypes = {
  _handleNavigate: PropTypes.func.isRequired,
  _handleBackAction: PropTypes.func.isRequired,
  categoryName: PropTypes.string.isRequired
};

export default connect(null, null)(SingleCategoryPage);
