import React, { PropTypes } from 'react';
import { View, Text, Image, Icon, Button } from '@shoutem/ui';
import { categories, cart, orders, settings } from '../../Actions/routeConstants';

const NavigationView = ({loggedIn, _handleNavigate}) => {
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
      <Image
        style={{ height: 200, width: 300, resizeMode: 'cover' }}
        source={require('../Common/Mock/nav_header_background.png')}
      >

        <View
          styleName="content"
          style={{
            position: 'absolute', left: 0, right: 0, bottom: 8, flexDirection: 'row', marginLeft: 16
          }}
        >
          <View style={{flex: 1, alignItems: 'flex-start', flexDirection: 'column' }} >
            <Icon name="add-friend" style={{ color: '#FFFFFF', fontSize: 48 }} />
            <Text style={{color: '#FFFFFF', textAlign: 'left', fontSize: 18 }}>
              Welcome Guest
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 16 }}>
            <Button
              styleName="dark"
              style={{ alignSelf: 'flex-end', marginTop: 20 }}
            >
              <Text style={{ color: '#FFFFFF' }}>
                 LOGIN
              </Text>
            </Button>
          </View>

        </View>
      </Image>

      <View
        styleName="vertical"
        style={{marginLeft: 16, flexDirection: 'column'}}
      >
        <View styleName="horizontal" style={{flexDirection: 'row'}}>
          <Button
            onPress={() => _handleNavigate(categories)}
            styleName="tight muted"
            style={{ }}
          >
            <Icon name="ic_restaurant_menu" style={{ fontSize: 20}} />
            <Text style={{ marginLeft: 5, fontSize: 16 }}>
              Categories
            </Text>
          </Button>
        </View>

        <View styleName="horizontal" style={{flexDirection: 'row'}}>
          <Button styleName="tight muted" style={{ }}>
            <Icon name="cart" style={{ fontSize: 20}} />
            <Text style={{ marginLeft: 10, fontSize: 16}}>
              Cart
            </Text>
          </Button>
          <Text style={{alignSelf: 'flex-end', left: 250, right: 0, position: 'absolute', marginTop: 15}}>0</Text>
        </View>

        <View styleName="horizontal" style={{flexDirection: 'row'}}>
          <Button styleName="tight muted" style={{ }}>
            <Icon name="news" style={{ fontSize: 20}} />
            <Text style={{ marginLeft: 10, fontSize: 16 }}>
              Orders
            </Text>
          </Button>
        </View>

        <View styleName="horizontal" style={{flexDirection: 'row'}}>
          <Button styleName="tight muted" style={{ }}>
            <Icon name="settings" style={{ fontSize: 20}} />
            <Text style={{ marginLeft: 10, fontSize: 16 }}>
              Settings
            </Text>
          </Button>
        </View>
      </View>

    </View>
  );
};

NavigationView.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  _handleNavigate: PropTypes.func.isRequired
};

export default NavigationView;
/*
<View styleName="horizontal space-between">
  <Caption style={{alignSelf: 'flex-start'}}>
    Login First
  </Caption>
  <Button styleName="md-gutter-top clear" style={{ backgroundColor: '#03A9F4' }}>

  </Button>
</View>
*/
