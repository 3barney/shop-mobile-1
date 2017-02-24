import React, { Component, PropTypes } from 'react';
import { GridRow, ListView, View} from '@shoutem/ui';
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
          redirectOnCategoryPress={this.props.redirectOnCategoryPress} />
      );
    });
    return (
      <GridRow columns={1} style={{backgroundColor: 'transparent'}}>
        {cellView}
      </GridRow>
    );
  }

  render() {
    const { products } = this.props;
    const filteredProducts = _.uniqBy(products, 'cat_id');
    const groupProducts = GridRow.groupByRows(filteredProducts, 1);

    return (
      <View>
        <ListView
          data={groupProducts}
          renderRow={this._renderRow}
        />
      </View>
    );
  }
}

CategoryList.propTypes = {
  products: PropTypes.array.isRequired,
  redirectOnCategoryPress: PropTypes.func.isRequired,
};

export default CategoryList;
