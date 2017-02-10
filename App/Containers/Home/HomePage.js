import React, { Component } from 'react';
import {
  ScrollView
} from 'react-native';
import {
  NavigationBar, Icon, Title, Button, Tile, Image, Subtitle, Heading,
  Text, Screen, View, Divider, Caption, GridRow, ListView, Card
} from '@shoutem/ui';
import * as _ from 'lodash';
import products from '../Common/Mock/MockProducts';
import styles from './Style';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false, // Loading False
    };

    this.renderRow = this.renderRow.bind(this);
  }

  renderRow(data) {
    const cellViews = _.map(data, (item) => {
      console.log(item)
      return (
        <Card>
          <Image
            styleName="medium-wide"
            style={{ resizeMode: 'cover' }}
            source={{ uri: item.image }}
          />
          <View styleName="content">
            <Subtitle>{ item.name }</Subtitle>
            <View styleName="horizontal v-center space-between">
              <View styleName="horizontal">
                <Subtitle styleName="md-gutter-right">ksh {item.price}</Subtitle>
              </View>
              <Button styleName="tight clear"><Icon name="cart" style={{ color: '#FF4081' }} /></Button>
            </View>
          </View>
        </Card>
      );
    });
    return (
      <GridRow columns={2}>
        {cellViews}
      </GridRow>
    );
  }

  render() {
    const groupedData = GridRow.groupByRows(products, 2)

    return (
      <Screen>
        <ScrollView>
          <NavigationBar
            styleName="clear"
            leftComponent={(
              <Button>
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
              source={{ uri: 'http://shoutem.github.io/img/ui-toolkit/examples/image-9.png' }}
            >
              <Tile>
                <Title>COOL BLACK AND WHITE STYLISH WATCHES</Title>
                <Subtitle styleName="line-through sm-gutter-top">150.00</Subtitle>
                <Heading>99.99</Heading>
                <Button styleName="md-gutter-top clear" style={{ backgroundColor: '#03A9F4' }}>
                  <Text style={{ color: '#FFFFFF' }}>
                    CLAIM COUPON
                  </Text>
                </Button>
              </Tile>
            </Image>

            <Divider styleName="section-header">
              <Caption styleName="v-center" style={{ alignItems: 'center' }}>RECENT PRODUCTS</Caption>
            </Divider>
          </View>

          <View style={{ backgroundColor: '#00BBD3' }}>
            <ListView
              data={groupedData}
              renderRow={this.renderRow}
              style={{ backgroundColor: '#00BBD3' }}
            />
          </View>

        </ScrollView>
      </Screen>
    );
  }
}

export default HomePage;
