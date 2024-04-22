import React from 'react'
import { View } from 'react-native'
import Home from './src/Jsx'
import CustomComponent from './src/Custom-Components'
import Props from "./src/Props"
import PropsImage from './src/Props/indexImage'
import StateCat from './src/State'
import HandlingTextInput from './src/Handling_Text_Input'
import ScrollViewPage from './src/ScrollView'
import ListViews from './src/List_Views'
import SectionListPage from './src/List_Views/indexTwo'
import PlatformCode from './src/Platform-Specific-Code'
import LotsOfStyles from "./src/UI-Interaction/LotsOfStyles"
import FixedDimensionsBasics from './src/UI-Interaction/FixedDimensionsBasics'
import Flex from './src/UI-Interaction/Flex'
import FlexDirectionBasics from './src/UI-Interaction/FlexDirectionBasics'

const App = () => {
  return (
    <View>
        <FlexDirectionBasics />
    </View>
  )
}

export default App
