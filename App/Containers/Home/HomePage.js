/* eslint-disable no-return-assign */
import React, { Component } from 'react';
import { ScrollView, DrawerLayoutAndroid } from 'react-native';
import {
  Title, Button, Tile, Image, Subtitle, Heading, Text, Screen, View, Divider, Caption,
  NavigationBar, Icon
} from '@shoutem/ui';
import { ScrollDriver } from '@shoutem/animation';

import styles from './Style';
import NavigationView from '../Common/NavigationView';
import GridListTwoItems from '../Common/GridListTwoItems';
import products from '../Common/Mock/MockProducts';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false, // Loading False
    };
    this.openDrawer = this.openDrawer.bind(this);
  }

  openDrawer() {
    this.drawer.openDrawer();
  }

  render() {
    const driver = new ScrollDriver();

    return (
      <DrawerLayoutAndroid
        drawerWidth={200}
        ref={_drawer => this.drawer = _drawer}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => <NavigationView />}
      >
        <ScrollView
          {...driver.scrollViewProps}
          showsVerticalScrollIndicator={false}
          style={styles.container}
        >
          <Screen>
            <NavigationBar
              styleName="clear"
              leftComponent={(
                <Button
                  onPress={this.openDrawer}
                >
                  <Icon name="sidebar" />
                </Button>
              )}
              centerComponent={<Title styleName="bright">ONLINE SHOP</Title>}
              rightComponent={(
                <Button styleName="clear">
                  <Icon name="cart" />
                </Button>
              )}
              style={{
                container: {
                  backgroundColor: '#0288D1', //  673AB7
                  alignItems: 'center',
                  position: 'relative',
                },
                leftComponent: {
                  paddingTop: 20,
                  alignSelf: 'center',
                },
                rightComponent: {
                  paddingTop: 20,
                  alignSelf: 'center',
                },
              }}
            />

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
}

export default HomePage;
// uri: 'http://shoutem.github.io/img/ui-toolkit/examples/image-9.png'
