/* eslint-disable no-use-before-define */
import React, { PropTypes} from 'react';
import { Row, Image, View, Subtitle, Caption, Button, Icon, Text } from '@shoutem/ui';
import { TouchableOpacity } from 'react-native';

const ProductListRow = ({singleProduct, onProductPress}) => {
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        onPress={onProductPress}>
        <Row>
          <Image
            styleName="small rounded-corners"
            source={{ uri: singleProduct.image}} />
          <View styleName="vertical stretch space-between">
            <Subtitle>{singleProduct.name}</Subtitle>
            <Text numberOfLines={1}>{singleProduct.descriprion}</Text>
            <View styleName="horizontal">
              <Subtitle styleName="md-gutter-right">
                ksh { Math.floor(singleProduct.price) - 100}
              </Subtitle>
              <Caption styleName="line-through">ksh {singleProduct.price}</Caption>
            </View>
          </View>
          <Button styleName="right-icon" onPress={() => console.log(singleProduct)}>
            <Icon name="add-to-cart" />
          </Button>
        </Row>
      </TouchableOpacity>
    </View>
  );
};

ProductListRow.propTypes = {
  singleProduct: PropTypes.object.isRequired,
  onProductPress: PropTypes.func.isRequired
};

export default ProductListRow;
