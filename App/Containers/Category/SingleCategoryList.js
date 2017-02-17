import React, { Component, PropTypes } from 'react';
import { GridRow, ListView } from '@shoutem/ui';
import * as _ from 'lodash';

class SingleCategoryList extends Component {

}

SingleCategoryList.propTypes = {
  items: PropTypes.array.isRequired,
  redirectToItemView: PropTypes.func.isRequired
};

export default SingleCategoryList;
