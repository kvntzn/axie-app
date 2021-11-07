import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, View, Image, Dimensions } from 'react-native'
import { Icon, Text, TopNavigationAction } from '@ui-kitten/components'

import { SharedElement } from 'react-navigation-shared-element'

import { RootStackParamList } from '../../type/RootStackParamList'
import { StackScreenProps } from '@react-navigation/stack'
import { AxiesSoldResult } from '../../interface'
import { determineBackground } from '../../util/classSelector'
import { AxieClassIcon } from '../../components'

import * as Animatable from 'react-native-animatable'
const DURATION = 400

type Props = StackScreenProps<RootStackParamList, 'AxieDetail'>

const TOP_HEADER_HEIGHT = Dimensions.get('window').height * 0.3

const BackIcon = (props) => <Icon {...props} name='arrow-back' />

const AxieDetailScreen: React.FC<Props> = ({ route, navigation }) => {
  const item: AxiesSoldResult = route.params.axie

  return (
    <View style={{ flex: 1 }}>
      <TopNavigationAction
        icon={BackIcon}
        onPress={() => navigation.goBack()}
        style={{
          //   position: 'absolute',
          marginTop: 40,
          //   left: 20,
          zIndex: 99,
        }}
      />

      <SharedElement
        id={`item.${item.id}.bg`}
        style={[StyleSheet.absoluteFillObject]}
      >
        <View
          style={[
            StyleSheet.absoluteFillObject,
            {
              backgroundColor: `${determineBackground(item.class)}B3`,
              height: TOP_HEADER_HEIGHT + 100,
            },
          ]}
        />
      </SharedElement>

      <View style={styles.headerText}>
        <SharedElement id={`item.${item.id}.name`} style={{ flexShrink: 1 }}>
          <Text style={{ color: '#fff' }} category={'h4'} numberOfLines={1}>
            {item.name}
          </Text>
        </SharedElement>

        <SharedElement id={`item.${item.id}.id`}>
          <Text style={{ color: '#fff' }} category={'label'}>
            #{item.id}
          </Text>
        </SharedElement>
      </View>

      <View style={styles.classBG}>
        <SharedElement id={`item.${item.id}.class`}>
          <AxieClassIcon
            element={item.class}
            opacity={'0.2'}
            color={'#000'}
            style={styles.class}
          />
        </SharedElement>
      </View>

      <View style={styles.image}>
        <SharedElement id={`item.${item.id}.image`}>
          <Image
            source={{ uri: item.image }}
            style={{
              height: 200,
              width: 200,
            }}
          />
        </SharedElement>
      </View>

      <SharedElement id={`general.bg`} style={[StyleSheet.absoluteFillObject]}>
        <View style={styles.bg}>
          <Text>Content</Text>
        </View>
      </SharedElement>
    </View>
  )
}

export default AxieDetailScreen

const styles = StyleSheet.create({
  headerText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    top: 0,
    bottom: 300,
    left: 0,
    right: 0,
    //   backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  bg: {
    flex: 1,
    padding: 16,
    paddingTop: 48,
    backgroundColor: '#fff',
    borderRadius: 32,
    transform: [{ translateY: Dimensions.get('window').height * 0.38 }],
  },
  classBG: {
    position: 'absolute',
    top: 0,
    bottom: 450,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  class: {
    height: 300,
    width: 300,
    // transform: [{ rotate: '310deg' }],
  },
})
