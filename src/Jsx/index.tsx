import {Text} from 'react-native';
import React from 'react';

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
