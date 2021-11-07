import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import HomeScreen from '../screens/home/HomeScreen'
import AxieDetailScreen from '../screens/axie/AxieDetailScreen'

const Stack = createSharedElementStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='AxieDetail'
          component={AxieDetailScreen}
          options={{
            headerTitle: '',
          }}
          sharedElements={(route, otherRoute, showing) => {
            const { axie } = route.params
            return [axie.id]
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
