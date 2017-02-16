import React, { Component, PropTypes } from 'react';
import { GridRow, ListView } from '@shoutem/ui';
import * as _ from 'lodash';
import CategoryItemRow from './CategoryItemRow';


class CategoryList extends Component {

  constructor(props) {
    super(props);
    this._renderRow = this._renderRow.bind(this);
  }

  _renderRow(data) {
    const cellView = _.map(data, (singleCategory) => {
      return (
        <CategoryItemRow
          key={singleCategory.id}
          singleCategory={singleCategory}
          onCategoryPress={this.props.onCategoryPress} />
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
    const filteredProducts = _.uniqBy(products, 'cat_id');
    const groupProducts = GridRow.groupByRows(filteredProducts, 1);

    return (
      <ListView
        data={groupProducts}
        renderRow={this._renderRow}
      />
    );
  }
}

CategoryList.propTypes = {
  products: PropTypes.array.isRequired,
  onCategoryPress: PropTypes.func.isRequired,
};

export default CategoryList;
