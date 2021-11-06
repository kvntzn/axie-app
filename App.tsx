import { StatusBar } from 'expo-status-bar'
import Routes from './src/navigation/Routes'
import React from 'react'
import * as eva from '@eva-design/eva'
import { ApplicationProvider } from '@ui-kitten/components'
import { default as theme } from './src/styles/custom-theme.json'

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <Routes />
    </ApplicationProvider>
  )
}
