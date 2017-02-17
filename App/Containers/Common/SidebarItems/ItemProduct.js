import React, { PropTypes } from 'react';
import { Text, Icon, Button } from '@shoutem/ui';

export const ItemProductNormal = ({_redirect}) => {
  return (
    <Button onPress={_redirect} styleName="tight muted">
      <Icon name="web" style={{ fontSize: 20}} />
      <Text style={{ marginLeft: 5, fontSize: 16 }}>
        PRODUCTS
      </Text>
    </Button>
  );
};

export const ItemProductActive = ({_redirect}) => {
  return (
    <Button
      onPress={_redirect}
      styleName="tight muted"
      style={{ }}
    >
      <Icon name="web" style={{ fontSize: 20, color: '#FF4081'}} />
      <Text style={{ marginLeft: 5, fontSize: 16, color: '#FF4081' }}>
        PRODUCTS
      </Text>
    </Button>
  );
};

ItemProductNormal.propTypes = {
  _redirect: PropTypes.func.isRequired
};

ItemProductActive.propTypes = {
  _redirect: PropTypes.func.isRequired
};
