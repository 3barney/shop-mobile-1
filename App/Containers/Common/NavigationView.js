import React from 'react';
import { View, Text} from '@shoutem/ui';

const NavigationView = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 16}}>
      <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I in the Drawer!</Text>
      <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Me too!</Text>
    </View>
  );
};

export default NavigationView;
