import React, { Component, PropTypes } from 'react';
import {
  GridRow, ListView,
} from '@shoutem/ui';
import * as _ from 'lodash';
import GridCardItem from './GridCardItem';

class GridListTwoItems extends Component {
  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
  }

  renderRow(data) {
    const cellViews = _.map(data, (singleProduct) => {
      return (
        <GridCardItem key={singleProduct.id} singleProduct={singleProduct} />
      );
    });
    return (
      <GridRow columns={2}>
        {cellViews}
      </GridRow>
    );
  }

  render() {
    // In Future Products will be picked from State Reducer
    const groupedData = GridRow.groupByRows(this.props.products, 2);

    return (
      <ListView
        data={groupedData}
        renderRow={this.renderRow}
        style={{ backgroundColor: '#00BBD3' }}
      />
    );
  }
}
GridListTwoItems.propTypes = {
  products: PropTypes.array.isRequired
};

export default GridListTwoItems;
