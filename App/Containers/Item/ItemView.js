import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { ScrollView, DrawerLayoutAndroid } from 'react-native';
import { ScrollDriver } from '@shoutem/animation';
import { Screen, View, Text, Image } from '@shoutem/ui';

import SidebarView from '../Common/SidebarView';
import NavigationHeaderOtherPages from '../Common/NavigationHeaderOtherPages';
import styles from '../Common/Style';

class ItemView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      item: Object.assign({}, this.props.item)
    };
    this._openDrawer = this._openDrawer.bind(this);
  }

  _openDrawer() {
    this.drawer.openDrawer();
  }

  render() {
    return (
      <View>
        <NavigationHeaderOtherPages
          _handleBackAction={this.props._handleBackAction}
          title={this.state.item.name}
        />
        <Image
          style={{bottom: 0, top: 0, opacity: 2}}
          styleName="large-portrait"
          source={require('../Common/Mock/cat-back.jpg')}
        >
          <View>
            <Text>Data iko hapa sasa</Text>
          </View>
        </Image>
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
