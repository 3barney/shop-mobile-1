import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { ListView, Row, GridRow, Image, View, Subtitle, Caption, Button, Icon, Text} from '@shoutem/ui';
import * as _ from 'lodash';

class ProductList extends Component {

  constructor(props) {
    super(props);
    this._renderRow = this._renderRow.bind(this);
  }

  _renderRow(data) {
    const cellView = _.map(data, (singleProduct) => {
      return (
        <View key={singleProduct.id}>
          <Row>
            <Image
              styleName="small rounded-corners"
              source={{ uri: singleProduct.image}} />
            <View styleName="vertical stretch space-between">
              <Subtitle>{singleProduct.name}</Subtitle>
              <Text numberOfLines={1}>{singleProduct.descriprion}</Text>
              <View styleName="horizontal">
                <Subtitle styleName="md-gutter-right">ksh {singleProduct.price}</Subtitle>
                <Caption styleName="line-through">
                  ksh { Math.floor(singleProduct.price) - 100}
                </Caption>
              </View>
            </View>
            <Button styleName="right-icon"><Icon name="add-to-cart" /></Button>
          </Row>
        </View>
      );
    });
    return (
      <GridRow columns={1}>
        {cellView}
      </GridRow>
    );
  }

  render() {
    const { products } = this.props;
    const groupProducts = GridRow.groupByRows(products, 1);

    return (
      <ListView
        data={groupProducts}
        renderRow={this._renderRow}
      />
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired
};

export default connect(null, null)(ProductList);
