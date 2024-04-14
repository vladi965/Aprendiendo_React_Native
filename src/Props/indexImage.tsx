import React from 'react';
import {Text, View, Image} from 'react-native';

const PropsImage = () => {
  return (
    <View>
      <Image
        source={{uri: 'https://reactnative.dev/docs/assets/p_cat1.png'}}
        style={{width: 200, height: 200}}
      />
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Hola Soy un Gato</Text>
    </View>
  );
};

export default PropsImage;
