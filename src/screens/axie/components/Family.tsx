import React from 'react'
import { Icon, Text } from '@ui-kitten/components'
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native'
import { Child } from '../../../interface/IAxieDetail'
import { determineBackground } from '../../../util/classSelector'
import { AxieClassIcon } from '../../../components'
import { useNavigation } from '@react-navigation/core'

import { StackActions } from '@react-navigation/native'
import { SharedElement } from 'react-navigation-shared-element'

interface IFamilyProps {
  data: Child[]
}

const Family: React.FC<IFamilyProps> = ({ data }) => {
  const navigation = useNavigation()

  const renderItem = ({ item }: { item: Child }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.push('AxieDetail', {
            id: item.id,
            class: item.class,
            name: item.name,
            image: item.image,
          })
          //   const pushaction = StackActions.push('AxieDetail', {
          //     id: item.id,
          //     class: item.class,
          //     name: item.name,
          //     image: item.image,
          //   })

          //   navigation.dispatch(pushaction)
        }}
        style={{
          padding: 8,
          paddingTop: 16,
          marginRight: 4,
          backgroundColor: `${determineBackground(item.class)}B3`,
          borderRadius: 10,
          width: 150,
          height: 175,
          //   alignItems: 'center',
        }}
      >
        <SharedElement id={`item.${item.id}.id`}>
          <Text style={{ color: '#fff' }} category={'label'} numberOfLines={1}>
            #{item.id}
          </Text>
        </SharedElement>
        <View
          style={{
            flexDirection: 'row',
            // marginHorizontal: 8,
          }}
        >
          <SharedElement id={`item.${item.id}.class`}>
            <AxieClassIcon
              element={item.class}
              opacity={'1'}
              color={'#fff'}
              style={{ height: 20, width: 20, marginRight: 4 }}
            />
          </SharedElement>
          <SharedElement id={`item.${item.id}.name`}>
            <Text
              style={{ color: '#fff', flexShrink: 1 }}
              category={'c1'}
              numberOfLines={1}
            >
              {item.name}
            </Text>
          </SharedElement>
        </View>
        <SharedElement id={`item.${item.id}.image`}>
          <Image
            source={{ uri: item.image }}
            style={{ height: 100, width: 100, alignSelf: 'center' }}
            resizeMode={'cover'}
          />
        </SharedElement>
      </TouchableOpacity>
    )
  }

  return (
    <View>
      <Text category={'h6'}>Children</Text>

      <FlatList
        contentContainerStyle={{ alignItems: 'center', marginTop: 8 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default Family

const styles = StyleSheet.create({})
