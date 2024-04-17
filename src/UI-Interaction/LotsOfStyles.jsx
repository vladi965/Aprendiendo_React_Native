import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const LotsOfStyles = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.red}>LotsOfStyles</Text>
      <Text style={styles.bigblue}>LotsOfStyles</Text>
      <Text style={[styles.bigblue, styles.red]}>bigBlue, then red</Text>
      <Text style={[styles.red, styles.bigblue]}>red, then bigBlue</Text>
    </View>
  );
};

export default LotsOfStyles;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
