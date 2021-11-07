import 'react-native-gesture-handler'
import Routes from './src/navigation/Routes'
import React from 'react'
import * as eva from '@eva-design/eva'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { default as theme } from './src/styles/custom-theme.json'
import { EvaIconsPack } from '@ui-kitten/eva-icons'

export default function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <Routes />
      </ApplicationProvider>
    </>
  )
}
