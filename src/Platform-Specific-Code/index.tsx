import React from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'

const PlatformCode = () => {
  return (
    <View style={styles.container}>
      <Text>HELLO</Text>
    </View>
  )
}

export default PlatformCode

const styles = StyleSheet.create({
    container: {
        height: '100%',
        ...Platform.select({
            ios: {
                backgroundColor: 'red',
            },
            android: {
                backgroundColor: 'green',
            },
            default: {
                // other platform, web for example
                backgroundColor: 'blue'
            }
        })
    }
})
