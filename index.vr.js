import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class WelcomeToVR extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('TEST2.jpg')}/>
        {/* <Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
          Van Gogh
        </Text> */}
        {/* <View style={{
          flex: 1,
          flexDirection: 'column',
          width: 2,
          alignItems: 'stretch',
          transform: [{translate: [-1, 1, -5]}],
        }}>

        <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'red'}}>
          <Text style={{fontSize: 0.2, textAlign: 'center'}}>Red</Text>
        </View>
        <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'orange'}}>
          <Text style={{fontSize: 0.2, textAlign: 'center'}}>Orange</Text>
        </View>
        <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'yellow'}}>
          <Text style={{fontSize: 0.2, textAlign: 'center'}}>Yellow</Text>
        </View>
        <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'green'}}>
          <Text style={{fontSize: 0.2, textAlign: 'center'}}>Green</Text>
        </View>
        <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'blue'}}>
          <Text style={{fontSize: 0.2, textAlign: 'center'}}>Blue</Text>
        </View>

      </View> */}
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
