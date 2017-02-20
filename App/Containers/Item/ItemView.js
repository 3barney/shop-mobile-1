/* eslint-disable no-multi-spaces*/
import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import * as _ from 'lodash';
import { Screen, Caption, View, Divider, Text, Subtitle, Image, Button, Icon, Title, Tile, Heading } from '@shoutem/ui';
import NavigationHeaderOtherPages from '../Common/NavigationHeaderOtherPages';
import styles from '../Common/Style';

class ItemView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      item: Object.assign({}, this.props.item),
      buttonState: 'Save'
    };
    this._openDrawer = this._openDrawer.bind(this);
  }

  _openDrawer() {
    this.drawer.openDrawer();
  }

  render() {
    // cor1:6-7
    return (
      <View style={{flex: 1}}>
        <NavigationHeaderOtherPages
          _handleBackAction={this.props._handleBackAction}
          title={this.state.item.name}
        />
      <Screen style={{flex: 1}}>
          <View>
            <View styleName="horizontal">
              <Button
                styleName="md-gutter full-width border"
                style={{backgroundColor: '#03A9F4'}}
                onPress={() => console.log(this.state.item)}
              >
                <Icon name="cart" style={{fontSize: 18, color: '#FFFFFF'}} />
                <Text style={{fontSize: 16, color: '#FFFFFF'}}>ADD TO CART</Text>
              </Button>
            </View>

            <View styleName="horizontal">
              <Image
                styleName="large-banner md-gutter-top md-gutter-right md-gutter-left"
                style={{flex: 1, resizeMode: 'cover'}}
                source={{ uri: this.state.item.image }}>
                  <Tile>
                    <Heading
                      style={{paddingTop: 70}}
                      styleName="md-gutter"
                    >
                      {_.toUpper(this.state.item.name)}
                    </Heading>
                    <Title>Price: ksh {Math.floor(this.state.item.price - 100)}</Title>
                    <Subtitle style={{ color: '#FF4081', opacity: 1 }} styleName="line-through">From : ksh {this.state.item.price}</Subtitle>
                  </Tile>
              </Image>
            </View>

            <Divider styleName="section-header">
              <Caption style={{color: '#03A9F4'}}>DESCRIPTION</Caption>
            </Divider>

            <View styleName="horizontal md-gutter-left md-gutter-right md-gutter-bottom">
              <View styleName="vertical">
                <Title>{this.state.item.categoryName}</Title>
                <Text styleName="multiline">
                  {this.state.item.descriprion}
                </Text>
              </View>
            </View>

            <View styleName="horizontal md-gutter-left md-gutter-bottom md-gutter-right">
              <View styleName="vertical">
                { (this.state.item.qunatity === 0) ? (
                  <Title>Quantity:    OUT OF STOCK</Title>
                ) : (
                  <Subtitle>Quantity:    {this.state.item.quantity}</Subtitle>
                )}
              </View>
            </View>

            <View styleName="horizontal md-gutter-left md-gutter-bottom">
              <View styleName="vertical">
                { (this.state.item.size === 0) ? (
                  <Subtitle>Size:    No Size provided</Subtitle>
                ) : (
                  <Subtitle>Size:    {this.state.item.size}</Subtitle>
                )}
              </View>
            </View>
          </View>
        </Screen>
      </View>
    );
  }
}

ItemView.propTypes = {
  _handleBackAction: PropTypes.func.isRequired,
  _handleNavigate: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

export default connect(null, null)(ItemView);

/*

<Image
  style={{justifyContent: 'center'}}
  source={require('../Common/Mock/cat-back.jpg')}
>
  <View styleName="">
    <View styleName="horizontal">
      <Button styleName="dark full-width">
        <Text>Me here</Text>
      </Button>
    </View>
    <Text>Data iko hapa sasa</Text>
  </View>
</Image>
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

</DrawerLayoutAndroid>
*/
