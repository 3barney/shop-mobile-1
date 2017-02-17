import React, { PropTypes } from 'react';
import {
  Title, Button, NavigationBar, Icon
} from '@shoutem/ui';
import * as _ from 'lodash';

const NavigationHeaderHomeBar = ({openDrawer, title}) => {
  return (
    <NavigationBar
      styleName="clear"
      leftComponent={(
        <Button
          onPress={openDrawer}
        >
          <Icon name="sidebar" />
        </Button>
      )}
      centerComponent={
        <Title styleName="bright">
          {_.toUpper(title)}
        </Title>
      }
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
  );
};

NavigationHeaderHomeBar.propTypes = {
  openDrawer: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default NavigationHeaderHomeBar;
