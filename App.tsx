
import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './src/navigation/StackNavigator'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { COLORS } from './src/utils/constants'
import DrawerNavigator from './src/navigation/DrawerNavigator'

export default function App () {
  return (

    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar backgroundColor={ COLORS.PRIMARY }/>
        <StackNavigator />
        { /* <DrawerNavigator /> */ }
      </NavigationContainer>
    </SafeAreaProvider>

  )
}

const styles = StyleSheet.create({

})
