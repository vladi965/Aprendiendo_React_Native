import {View} from 'react-native';
import React from 'react';

const FixedDimensionsBasics = () => {
  return (
    <View>
      <View
        style={{width: 50, height: 50, backgroundColor: 'powderblue'}}></View>
      <View
        style={{width: 100, height: 100, backgroundColor: 'skyblue'}}></View>
      <View
        style={{width: 150, height: 150, backgroundColor: 'steelblue'}}></View>
    </View>
  );
};

export default FixedDimensionsBasics;