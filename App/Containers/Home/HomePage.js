/* eslint-disable no-return-assign */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ScrollView, DrawerLayoutAndroid } from 'react-native';
import {
  Title, Button, Tile, Image, Subtitle, Heading, Text, View, Divider, Caption, Spinner
} from '@shoutem/ui';
import { ScrollDriver } from '@shoutem/animation';

import styles from '../Common/Style';
import SidebarView from '../Common/SidebarView';
import NavigationHeaderHomeBar from '../Common/NavigationHeaderHomeBar';
import GridListTwoItems from './GridListTwoItems';
// import products from '../Common/Mock/MockProducts';
import * as productsActions from '../Product/ProductActions';

const home = {
  title: 'COOL BLACK AND WHITE STYLISH WATCHES',
  subtitle: '150.00',
  price: '99.99',
}


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true, // Loading False
      loggedIn: false,
      products: [],
    };
    this._openDrawer = this._openDrawer.bind(this);
  }

  componentWillMount() {
    this.props.actions.loadProducts()
      .then(() => {
        this.setState({loading: false});
      })
      .catch((error) => {
        throw (error);
      });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.productsReducer !== nextProps.productsReducer) {
      this.setState({products: nextProps.productsReducer});
    }
  }

  _openDrawer() {
    this.drawer.openDrawer();
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
        <View style={{flex: 1, backgroundColor: '#bdc3c7'}}>
          <NavigationHeaderHomeBar
            openDrawer={this._openDrawer}
            title="Online Shop"
          />
            <ScrollView
              {...driver.scrollViewProps}
              showsVerticalScrollIndicator={false}
              style={styles.container}
            >
              <View styleName="vertical h-center" >
                <Image
                  styleName="featured"
                  style={{ resizeMode: 'cover' }}
                  source={require('../Common/Mock/breitling-watches-2016.jpg')}
                >
                  <Tile>
                    <Title>{home.title}</Title>
                    <Subtitle styleName="line-through sm-gutter-top">`ksh ${home.subtitle}`</Subtitle>
                    <Heading>`ksh ${home.price}`</Heading>
                    <Button
                      styleName="md-gutter-top clear"
                      style={{ backgroundColor: '#FF4081' }}
                    >
                      <Text style={{ color: '#FFFFFF' }}>
                        CLAIM OFFER
                      </Text>
                    </Button>
                  </Tile>
                </Image>

                <Divider styleName="section-header">
                  <Caption styleName="v-center" style={{ alignItems: 'center' }}>RECENT PRODUCTS</Caption>
                </Divider>
              </View>

              <View style={{ backgroundColor: '#349Bdb' }}>
                { this.state.products.length < 1 ? (
                  <Spinner style={{size: 'large'}} />
                ) : (
                  <GridListTwoItems products={this.state.products} />
                )}
              </View>
            </ScrollView>
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

HomePage.propTypes = {
  _handleNavigate: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
  productsReducer: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    productsReducer: state.productsReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
