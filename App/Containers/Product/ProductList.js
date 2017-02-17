import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { ListView, GridRow} from '@shoutem/ui';
import * as _ from 'lodash';
import ProductListRow from './ProductListRow';

class ProductList extends Component {

  constructor(props) {
    super(props);
    this._renderRow = this._renderRow.bind(this);
  }

  _renderRow(data) {
    const cellView = _.map(data, (singleProduct) => {
      return (
        <ProductListRow
          key={singleProduct.id}
          singleProduct={singleProduct}
          onProductPress={this.props.onProductPress} />
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
  products: PropTypes.array.isRequired,
  onProductPress: PropTypes.func.isRequired
};

export default connect(null, null)(ProductList);
