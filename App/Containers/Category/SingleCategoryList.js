import React, { Component, PropTypes } from 'react';
import { GridRow, ListView, View, Card, Subtitle, Image, Button, Icon, Caption, Text } from '@shoutem/ui';
import * as _ from 'lodash';

class SingleCategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
    };
    this._renderRow = this._renderRow.bind(this);
  }

  _renderRow(data) {
    const cellView = _.map(data, (single) => {
      return (
        <View key={single.id}>
          <Card>
            <Image
              styleName="medium-wide"
              style={{ resizeMode: 'cover' }}
              source={{ uri: single.image }}
            />
            <View styleName="content">
              <Subtitle>{ single.name }</Subtitle>
              <Text numberOfLines={1}>{single.descriprion}</Text>
              <View styleName="horizontal v-center space-between">
                <View styleName="horizontal">
                  <Subtitle styleName="md-gutter-right">
                    ksh {Math.floor(single.price - 100)}
                  </Subtitle>
                </View>
                <Button styleName="tight clear"><Icon name="cart" style={{ color: '#FF4081' }} /></Button>
              </View>
              <View>
                <View styleName="horizontal">
                    <Caption styleName="line-through">ksh {single.price}</Caption>
                </View>
              </View>
            </View>
          </Card>
        </View>
      );
    });
    return (
      <GridRow columns={2}>
        {cellView}
      </GridRow>
    );
  }

  render() {
    const groupedData = GridRow.groupByRows(this.state.items, 2);
    return (
      <ListView
        data={groupedData}
        renderRow={this._renderRow} />
    );
  }
}

SingleCategoryList.propTypes = {
  items: PropTypes.array.isRequired,
  redirectToItemView: PropTypes.func.isRequired
};

export default SingleCategoryList;
