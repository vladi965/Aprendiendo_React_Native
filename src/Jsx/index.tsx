import React from 'react';
import {Text} from 'react-native';

const getFullName = (
  firstName: string,
  secondName: string,
  thirdName: string,
) => {
  return firstName + ' ' + secondName + ' ' + thirdName;
};

const Home = () => {
  return <Text>Hola, Me llamo {getFullName('Vladimir', 'Hener', 'Steve')}!</Text>;
};

export default Home;
