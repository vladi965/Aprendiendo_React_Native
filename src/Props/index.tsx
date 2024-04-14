import React from 'react'
import { Text, View, Image } from 'react-native'

type CatProps = {
    name: string;
};

const Cat = (props: CatProps) => {
    return (
        <Text>Hola, Me llamo {props.name}</Text>
    )
}

const Cafe = () => {
  return (
    <View>
      <Cat name="Vladimir" />
      <Cat name="Hener" />
      <Cat name="Carlos" />
    </View>
  )
}

export default Cafe
