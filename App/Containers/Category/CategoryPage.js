/* eslint-disable no-return-assign */
import React, {Component, PropTypes} from 'react';
import { ScrollView, DrawerLayoutAndroid } from 'react-native';
import { ScrollDriver } from '@shoutem/animation';
import { Screen } from '@shoutem/ui';

import SidebarView from '../Common/SidebarView';
import NavigationHeaderBar from '../Common/NavigationHeaderBar';
import styles from '../Common/Style';

class CategoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
    this._openDrawer = this._openDrawer.bind(this);
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
          </Screen>

        </ScrollView>
      </DrawerLayoutAndroid>
    );
  }
}

CategoryPage.propTypes = {
  _handleNavigate: PropTypes.func.isRequired
};

export default CategoryPage;

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
