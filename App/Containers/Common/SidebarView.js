import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import { View, Text, Image, Icon, Button } from '@shoutem/ui';
import { categories, cart, orders, settings, products } from '../../Actions/routeConstants';

class SidebarView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cat: false, prod: false, cart: false, order: false, set: false
    };
    this._redirect = this._redirect.bind(this);
  }

  // TODO: Not yet working at all
  componentWillReceiveProps(nextProps) {
    if (this.props.navReducer !== nextProps.navReducer) {
      const navRoute = _.last(nextProps.navReducer.routes);
      if (navRoute.key === categories.route.key) {
        this.setState({active: true});
      }
    }
  }

  _redirect(routeToNavTo) {
    const route = routeToNavTo.route.key;
    switch (route) {
      case ('categories'):
        this.setState({cat: true});
        break;
      case ('products'):
        this.setState({prod: true});
        break;
      case ('cart'):
        this.setState({cart: true});
        break;
      case ('orders'):
        this.setState({order: true});
        break;
      case ('settings'):
        this.setState({set: true});
        break;
      default:
        break;
    }
    this.props._handleNavigate(routeToNavTo);
  }

  render() {
    const { loggedIn } = this.props;
    // console.log(this.props.navReducer);
    if (loggedIn) {
      // Return View with user data from Reducer
      return (
        <View style={{flex: 1}}>
          <Image
            style={{ height: 200, width: 300, resizeMode: 'cover' }}
            source={require('../Common/Mock/nav_header_background.png')}
          >
            <Text style={{margin: 10, fontSize: 15, textAlign: 'left', alignSelf: 'flex-start'}}>Hi Guest</Text>
          </Image>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I in the Drawer!</Text>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Me too!</Text>
        </View>
      );
    }
    return (
      <View style={{flex: 1}}>
        <Image style={{ height: 200, width: 300, resizeMode: 'cover' }} source={require('../Common/Mock/nav_header_background.png')}>
          <View styleName="content" style={{position: 'absolute', left: 0, right: 0, bottom: 8, flexDirection: 'row', marginLeft: 16}}>
            <View style={{flex: 1, alignItems: 'flex-start', flexDirection: 'column' }} >
              <Icon name="add-friend" style={{ color: '#FFFFFF', fontSize: 48 }} />
              <Text style={{color: '#FFFFFF', textAlign: 'left', fontSize: 18 }}>
                Welcome Guest
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 16 }}>
              <Button styleName="dark" style={{ alignSelf: 'flex-end', marginTop: 20 }}>
                <Text style={{ color: '#FFFFFF' }}>LOGIN</Text>
              </Button>
            </View>
          </View>
        </Image>

        <View styleName="vertical" style={{marginLeft: 16, flexDirection: 'column'}}>
          <View styleName="horizontal" style={{flexDirection: 'row'}}>
            { this.state.cat === false ? (
              <Button onPress={() => this._redirect(categories)} styleName="tight muted">
                <Icon name="ic_restaurant_menu" style={{fontSize: 20}} />
                <Text style={{marginLeft: 5, fontSize: 16}}>CATEGORIES</Text>
              </Button>
            ) : (
              <Button onPress={() => this._redirect(categories)} styleName="tight muted">
                <Icon name="ic_restaurant_menu" style={{fontSize: 20, color: '#FF4081'}} />
                <Text style={{marginLeft: 5, fontSize: 16, color: '#FF4081'}}>CATEGORIES</Text>
              </Button>
            )}
          </View>

          <View styleName="horizontal" style={{ flexDirection: 'row' }}>
            {this.state.prod === false ? (
              <Button onPress={() => this._redirect(products)} styleName="tight muted">
                <Icon name="web" style={{ fontSize: 20}} />
                <Text style={{ marginLeft: 5, fontSize: 16 }}>PRODUCTS</Text>
              </Button>
            ) : (
              <Button onPress={() => this._redirect(products)} styleName="tight muted">
                <Icon name="web" style={{ fontSize: 20, color: '#FF4081'}} />
                <Text style={{ marginLeft: 5, fontSize: 16, color: '#FF4081' }}>PRODUCTS</Text>
              </Button>
            )}
          </View>

          <View styleName="horizontal" style={{flexDirection: 'row'}}>
            {this.state.cart === false ? (
              <View>
                <Button styleName="tight muted" style={{ }}>
                  <Icon name="cart" style={{ fontSize: 20}} />
                  <Text style={{ marginLeft: 10, fontSize: 16}}>CART</Text>
                </Button>
                <Text style={{alignSelf: 'flex-end', left: 250, right: 0, position: 'absolute', marginTop: 15}}>0</Text>
              </View>
            ) : (
              <View>
                <Button styleName="tight muted" style={{ }}>
                  <Icon name="cart" style={{ fontSize: 20, color: '#FF4081'}} />
                  <Text style={{ marginLeft: 10, fontSize: 16, color: '#FF4081'}}>CART</Text>
                </Button>
                <Text style={{color: '#FF4081', alignSelf: 'flex-end', left: 250, right: 0, position: 'absolute', marginTop: 15}}>0</Text>
              </View>
            )}
          </View>

          <View styleName="horizontal" style={{flexDirection: 'row'}}>
            {this.state.order === false ? (
              <Button styleName="tight muted" style={{ }}>
                <Icon name="news" style={{ fontSize: 20}} />
                <Text style={{ marginLeft: 10, fontSize: 16 }}>ORDERS</Text>
              </Button>
            ) : (
              <Button styleName="tight muted" style={{ }}>
                <Icon name="news" style={{color: '#FF4081', fontSize: 20}} />
                <Text style={{color: '#FF4081', marginLeft: 10, fontSize: 16 }}>ORDERS</Text>
              </Button>
            )}
          </View>

          <View styleName="horizontal" style={{flexDirection: 'row'}}>
            {this.state.set === false ? (
              <Button styleName="tight muted" style={{ }}>
                <Icon name="settings" style={{ fontSize: 20}} />
                <Text style={{ marginLeft: 10, fontSize: 16 }}>SETTINGS</Text>
              </Button>
            ) : (
              <Button styleName="tight muted" style={{ }}>
                <Icon name="settings" style={{ color: '#FF4081', fontSize: 20}} />
                <Text style={{color: '#FF4081', marginLeft: 10, fontSize: 16 }}>SETTINGS</Text>
              </Button>
            )}
          </View>
        </View>

      </View>
    );
  }
}

SidebarView.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  _handleNavigate: PropTypes.func.isRequired,
  navReducer: PropTypes.shape({
    index: PropTypes.number.isRequired,
    key: PropTypes.string.isRequired,
    routes: PropTypes.array.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    navReducer: state.navReducer,
  };
}


export default connect(mapStateToProps, null)(SidebarView);
