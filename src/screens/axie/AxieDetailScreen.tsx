import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { SharedElement } from 'react-navigation-shared-element'

import { RootStackParamList } from '../../type/RootStackParamList'
import { StackScreenProps } from '@react-navigation/stack'
import { AxiesSoldResult } from '../../interface'

type Props = StackScreenProps<RootStackParamList, 'AxieDetail'>

const AxieDetailScreen: React.FC<Props> = ({ route }) => {
  const item: AxiesSoldResult = route.params.axie

  return (
    <SharedElement id={item.id}>
      <Image source={{ uri: item.image }} style={{ height: 200, width: 200 }} />
    </SharedElement>
  )
}

export default AxieDetailScreen

const styles = StyleSheet.create({})
