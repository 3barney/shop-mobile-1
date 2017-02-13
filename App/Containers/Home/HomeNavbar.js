import React, { Component } from 'react'
import {
  NavigationBar, Icon, Title, Button,
} from '@shoutem/ui'

const NavigationHeader = () => {
  return(
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
  )
}

export default NavigationHeader
