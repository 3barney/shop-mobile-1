/* eslint-disable no-return-assign, no-use-before-define */
import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { ScrollView, DrawerLayoutAndroid, TouchableOpacity } from 'react-native';
import { ScrollDriver } from '@shoutem/animation';
import { Screen, ListView, View, Text, GridRow, Icon, Caption } from '@shoutem/ui';
import * as _ from 'lodash';
import * as color from 'randomcolor';

import SidebarView from '../Common/SidebarView';
import NavigationHeaderBar from '../Common/NavigationHeaderBar';
import styles from '../Common/Style';
import products from '../Common/Mock/MockProducts';

class CategoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
    this._openDrawer = this._openDrawer.bind(this);
    this._renderRow = this._renderRow.bind(this);
  }

  _openDrawer() {
    this.drawer.openDrawer();
  }

  _renderRow(data) {
    const cellView = _.map(data, (singleCategory) => {
      return (
        <View key={singleCategory.id} style={{ flex: 1 }}>
          <TouchableOpacity
            style={rowStyle()}
          >
            <View style={{justifyContent: 'center', width: 50}}>
              <Icon
                name="web"
                style={{ alignSelf: 'flex-start', paddingLeft: 10, fontSize: 32, color: 'white'}}
              />
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center', paddingLeft: 10}}>
              <Text style={{color: 'white', fontSize: 16}}>
                {singleCategory.categoryName}
              </Text>
            </View>
            <View style={{ justifyContent: 'center', alignSelf: 'center'}}>
              <Icon
                styleName="disclosure"
                name="right-arrow"
                style={{color: 'white', alignSelf: 'center', justifyContent: 'center', right: 10, fontSize: 32}}
              />
            </View>
          </TouchableOpacity>
        </View>
      );
    });
    return (
      <GridRow columns={1}>
        {cellView}
      </GridRow>
    );
  }
  /*
  <Row>
  <Image
    styleName="small rounded-corners"
    source={{ uri: 'http://shoutem.github.io/img/ui-toolkit/examples/image-3.png' }}
  />
  <View styleName="vertical stretch space-between">
    <Subtitle>Wilco Cover David Bowie&#39;s "Space Oddity"</Subtitle>
    <Caption>June 21  ·  20:00</Caption>
  </View>
  <Button styleName="right-icon"><Icon name="add-event" /></Button>
</Row>
  */
  render() {
    const driver = new ScrollDriver();
    // console.log(this.state)
    const filteredProducts = _.uniqBy(products, 'cat_id');
    const groupProducts = GridRow.groupByRows(filteredProducts, 1);

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
            <ListView
              data={groupProducts}
              renderRow={this._renderRow}
            />
          </Screen>

        </ScrollView>
      </DrawerLayoutAndroid>
    );
  }
}

CategoryPage.propTypes = {
  _handleNavigate: PropTypes.func.isRequired
};

function rowStyle() {
  return {
    backgroundColor: color.randomColor({hue: 'purple', luminosity: 'dark'}),
    height: 70,
    flexDirection: 'row',
  };
}

export default connect(null, null)(CategoryPage);

/*

return (

    <ScrollView
      {...driver.scrollViewProps}
      showsVerticalScrollIndicator={false}
      style={styles.container}
    >
      <Screen>


        <View styleName="vertical h-center" >
          <Image
            styleName="featured"
            style={{ resizeMode: 'cover' }}
            source={require('../Common/Mock/breitling-watches-2016.jpg')}
          >
            <Tile>
              <Title>COOL BLACK AND WHITE STYLISH WATCHES</Title>
              <Subtitle styleName="line-through sm-gutter-top">150.00</Subtitle>
              <Heading>99.99</Heading>
              <Button
                styleName="md-gutter-top clear"
                style={{ backgroundColor: '#03A9F4' }}
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

        <View style={{ backgroundColor: '#00BBD3' }}>
          <GridListTwoItems products={products} />
        </View>
      </Screen>
    </ScrollView>
  </DrawerLayoutAndroid>
);
}
*/
