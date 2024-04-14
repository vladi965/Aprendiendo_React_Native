import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';

type CatProps = {
  name: string;
};

const Cat = (props: CatProps) => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View style={{marginTop: 30}}>
      <Text>
        Me llamo {props.name}, y {isHungry ? 'tengo hungry' : 'estoy satisfecho'}
      </Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? 'de pollo a la brasa, porfavor!' : 'Muchas gracias'}
      />
    </View>
  );
};

const StateCat = () => {
  return (
    <View>
      <Cat name="Tom" />
      <Cat name="Fano" />
    </View>
  );
};

export default StateCat;
