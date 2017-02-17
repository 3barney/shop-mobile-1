import React, { PropTypes } from 'react';
import {
  Title, Button, NavigationBar, Icon
} from '@shoutem/ui';
import * as _ from 'lodash';

/*
<NavigationBar
  hasHistory
  title="TITLE"
  rightComponent={(
    <Button styleName="clear">
      <Text>Report</Text>
    </Button>
  )}
/>
*/
const NavigationHeaderOtherPages = ({title, _handleBackAction}) => {
  return (
    <NavigationBar
      styleName="clear"
      hasHistory
      navigateBack={_handleBackAction}
      centerComponent={
        <Title styleName="bright">
          {_.toUpper(title)}
        </Title>
      }
      rightComponent={(
        <Button styleName="clear">
          <Icon name="cart" />
        </Button>
      )}
      style={{
        container: {
          backgroundColor: '#0288D1', //  673AB7
          alignItems: 'center',
          position: 'relative',
        },
        leftComponent: {
          paddingTop: 20,
          alignSelf: 'center',
        },
        rightComponent: {
          paddingTop: 20,
          alignSelf: 'center',
        },
      }}
    />
  );
};

NavigationHeaderOtherPages.propTypes = {
  title: PropTypes.string.isRequired,
  _handleBackAction: PropTypes.func.isRequired,
};

export default NavigationHeaderOtherPages;
