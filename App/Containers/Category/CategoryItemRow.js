/* eslint-disable no-use-before-define */
import React, {PropTypes} from 'react';
import { TouchableOpacity } from 'react-native';
import {
  View, Text, Icon
} from '@shoutem/ui';
import * as color from 'randomcolor';

const CategoryItemRow = ({singleCategory, onCategoryPress}) => {
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        style={rowStyle()}
        onPress={onCategoryPress}
      >
        <View style={{justifyContent: 'center', width: 50}}>
          <Icon
            name="web"
            style={{ alignSelf: 'flex-start', paddingLeft: 10, fontSize: 32, color: 'white'}}
          />
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center', paddingLeft: 10}}>
          <Text style={{color: 'white', fontSize: 16}}>
            {singleCategory.categoryName}
          </Text>
        </View>
        <View style={{ justifyContent: 'center', alignSelf: 'center'}}>
          <Icon
            styleName="disclosure"
            name="right-arrow"
            style={{color: 'white', alignSelf: 'center', justifyContent: 'center', right: 10, fontSize: 32}}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

function rowStyle() {
  return {
    backgroundColor: color.randomColor({hue: 'purple', luminosity: 'dark'}),
    height: 70,
    flexDirection: 'row',
  };
}

CategoryItemRow.propTypes = {
  singleCategory: PropTypes.object.isRequired,
  onCategoryPress: PropTypes.func.isRequired
};

export default CategoryItemRow;
