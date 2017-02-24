/* eslint-disable no-use-before-define */
import React, {PropTypes} from 'react';
import { TouchableOpacity } from 'react-native';
import {
  View, Text, Icon
} from '@shoutem/ui';
import * as color from 'randomcolor';
import { singleCategoryItemRoute } from '../../Actions/routeConstants';

const CategoryItemRow = ({singleCategory, redirectOnCategoryPress}) => {
  return (
    <View style={{ flex: 1}}>
      <TouchableOpacity
        style={rowStyle()}
        onPress={() => redirectOnCategoryPress(singleCategoryItemRoute, singleCategory.categoryName)}
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
    backgroundColor: color.randomColor({
      hue: 'purple', luminosity: 'dark',
    }),
    height: 60,
    flexDirection: 'row',
  };
}

CategoryItemRow.propTypes = {
  singleCategory: PropTypes.object.isRequired,
  redirectOnCategoryPress: PropTypes.func.isRequired
};

export default CategoryItemRow;
