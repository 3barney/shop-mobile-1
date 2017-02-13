import React, { Component } from 'react';
import {
  ScrollView
} from 'react-native';
import {
  Title, Button, Tile, Image, Subtitle, Heading, Text, Screen, View, Divider, Caption,
} from '@shoutem/ui';
import NavigationHeader from './HomeNavbar';
import GridListTwoItems from '../Common/GridListTwoItems';

import products from '../Common/Mock/MockProducts';


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false, // Loading False
    };
  }

  render() {
    return (
      <Screen>
        <ScrollView>
          <NavigationHeader />

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
                <Button styleName="md-gutter-top clear" style={{ backgroundColor: '#03A9F4' }}>
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

        </ScrollView>
      </Screen>
    );
  }
}

export default HomePage;
// uri: 'http://shoutem.github.io/img/ui-toolkit/examples/image-9.png'
