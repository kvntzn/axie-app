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
      <Stack.Navigator
        defaultScreenOptions={{
          cardStyleInterpolator: ({ current: { progress } }) => {
            return { cardStyle: { opacity: progress } }
          },
          cardStyle: { backgroundColor: 'transparent' },
        }}
      >
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
            headerShown: false,
          }}
          sharedElements={(route, otherRoute, showing) => {
            const { axie } = route.params
            return [
              {
                id: `item.${axie.id}.bg`,
              },
              {
                id: `general.bg`,
              },
              {
                id: `item.${axie.id}.class`,
              },
              {
                id: `item.${axie.id}.id`,
              },
              {
                id: `item.${axie.id}.name`,
              },
              {
                id: `item.${axie.id}.image`,
              },
            ]
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
