import 'react-native-gesture-handler'
import Routes from './src/navigation/Routes'
import React from 'react'
import * as eva from '@eva-design/eva'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { default as theme } from './src/styles/custom-theme.json'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { QueryClient, QueryClientProvider } from 'react-query'

export default function App() {
  const queryClient = new QueryClient()

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <QueryClientProvider client={queryClient}>
        <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
          <Routes />
        </ApplicationProvider>
      </QueryClientProvider>
    </>
  )
}
