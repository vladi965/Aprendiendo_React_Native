import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Home from './src/Jsx'
import CustomComponent from './src/Custom-Components'
import Props from "./src/Props"
import PropsImage from './src/Props/indexImage'
import StateCat from './src/State'
import HandlingTextInput from './src/Handling_Text_Input'
import ScrollViewPage from './src/ScrollView'

const App = () => {
  return (
    <View>
        <ScrollViewPage />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
