/**
 * THIS IS USED BY GRID LIST TWO ITEM TO RENDER CARD VIEW
 */
import React, { PropTypes } from 'react';
import {
 Button, Card, View, Image, Subtitle, Icon,
} from '@shoutem/ui';

const GridCardItem = ({singleProduct}) => {
  return (
    <Card>
      <Image
        styleName="medium-wide"
        style={{ resizeMode: 'cover' }}
        source={{ uri: singleProduct.image }}
      />
      <View styleName="content">
        <Subtitle>{ singleProduct.name }</Subtitle>
        <View styleName="horizontal v-center space-between">
          <View styleName="horizontal">
            <Subtitle styleName="md-gutter-right">ksh {singleProduct.price}</Subtitle>
          </View>
          <Button styleName="tight clear"><Icon name="cart" style={{ color: '#FF4081' }} /></Button>
        </View>
      </View>
    </Card>
  );
};

GridCardItem.propTypes = {
  singleProduct: PropTypes.object.isRequired
};

export default GridCardItem;
