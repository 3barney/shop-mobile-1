/*eslint-disable*/
import React from 'react';
import { DrawerLayoutAndroid, View, Text, TouchableHighlight } from 'react-native';

class HomeDrawerLayout extends React.Component {
  constructor(props) {
    super(props);
    this.openDrawer = this.openDrawer.bind(this);
    console.log("Am hit")
  }

  openDrawer() {
    this.drawer.openDrawer();
  }

  render() {
    const navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I in the Drawer!</Text>
      </View>
    );
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        ref={_drawer => this.drawer = _drawer}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}
        openDrawer={this.props.openDrawer}
      >
      </DrawerLayoutAndroid>
    );
  }
}

export default HomeDrawerLayout;
/*

<View style={{flex: 1, alignItems: 'center'}}>
  <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
  <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
  <TouchableHighlight onPress={this.openDrawer}>
    <Text>{'Open Drawer'}</Text>
  </TouchableHighlight>
</View>


constructor() {
  super();
  this.openDrawer = this.openDrawer.bind(this);
}



render() {


}
*/
