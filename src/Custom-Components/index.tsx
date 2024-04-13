import {Text, View, TextInput} from 'react-native';
import React from 'react';

const Cat = () => {
    return (
        <View>
            <Text>Hola me llamo Tom</Text>
        </View>
    )
}

const CustomComponent = () => {
  return (
    <View>
      <Text>Bienvenido!!</Text>
      <Cat />
      <Cat />
      <Cat />
    </View>
  );
};

export default CustomComponent;
