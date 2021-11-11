import React, { memo } from 'react'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { Layout, Text, Card } from '@ui-kitten/components'
import { LAYOUT_SHADOW } from '../../../styles/misc'
import { AxiesSoldResult } from '../../../interface'
import { determineBackground } from '../../../util/classSelector'
import moment from 'moment'
import { AxieClassIcon } from '../../../components'
import { AXIE_CLASS } from '../../../constants/axieClass'
import { SharedElement } from 'react-navigation-shared-element'
import { useNavigation } from '@react-navigation/core'

const AxiesSoldCard: React.FC<{ item: AxiesSoldResult }> = ({ item }) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('AxieDetail', {
          id: item.id,
          class: item.class,
          name: item.name,
          image: item.image,
        })
      }}
      style={{
        margin: 16,
        marginVertical: 8,
        padding: 16,
      }}
    >
      <SharedElement id={`item.${item.id}.class`}>
        <AxieClassIcon
          element={item.class}
          opacity={'0.2'}
          color={'#fff'}
          style={styles.classBG}
        />
      </SharedElement>

      <SharedElement
        id={`item.${item.id}.bg`}
        style={[
          StyleSheet.absoluteFillObject,
          {
            zIndex: -1,
          },
        ]}
      >
        <View
          style={[
            StyleSheet.absoluteFillObject,
            {
              borderRadius: 25,
              backgroundColor: `${determineBackground(item.class)}B3`,
            },
          ]}
        />
      </SharedElement>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 4,
        }}
      >
        <SharedElement id={`item.${item.id}.name`} style={{ flexShrink: 1 }}>
          <Text style={{ color: '#fff' }} category={'s1'} numberOfLines={1}>
            {item.name}
          </Text>
        </SharedElement>

        <SharedElement id={`item.${item.id}.id`}>
          <Text style={{ color: '#fff' }} category={'s1'}>
            #{item.id}
          </Text>
        </SharedElement>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <View>
          <View
            style={{
              borderRadius: 20,
              marginVertical: 4,
              padding: 4,
              backgroundColor: `${determineBackground(item.class)}99`,
            }}
          >
            <Text style={{ color: '#fff' }} category={'p1'}>
              =
              {(
                Number(item.transferHistory.results[0].withPrice) *
                0.000000000000000001
              ).toFixed(3)}
            </Text>
          </View>

          <View
            style={{
              borderRadius: 20,
              marginVertical: 4,
              padding: 4,
              backgroundColor: `${determineBackground(item.class)}99`,
            }}
          >
            <Text style={{ color: '#fff' }} category={'p1'}>
              ${Number(item.transferHistory.results[0].withPriceUsd).toFixed(2)}
            </Text>
          </View>
        </View>

        <View style={{ alignSelf: 'flex-start', flex: 0.3 }}>
          <Text style={{ color: '#fff' }} category={'s1'}>
            Buyer
          </Text>
          <Text style={{ color: '#fff' }} category={'p2'} numberOfLines={2}>
            {item.transferHistory.results[0].toProfile.name}
          </Text>
        </View>

        <View style={{ alignSelf: 'flex-start', flex: 0.3 }}>
          <Text style={{ color: '#fff' }} category={'s1'}>
            Seller
          </Text>
          <Text
            style={{ color: '#fff', flex: 0.1 }}
            category={'p2'}
            numberOfLines={2}
          >
            {item.transferHistory.results[0].fromProfile.name}
          </Text>
        </View>

        <SharedElement id={`item.${item.id}.image`}>
          <Image
            source={{ uri: item.image }}
            style={{ height: 60, width: 60 }}
          />
        </SharedElement>
      </View>

      <Text style={{ color: '#fff', alignSelf: 'flex-end' }} category={'label'}>
        {moment(
          new Date(item.transferHistory.results[0].timestamp * 1000)
        ).fromNow()}
      </Text>
    </TouchableOpacity>
  )
}

export default memo(AxiesSoldCard)

const styles = StyleSheet.create({
  classBG: {
    position: 'absolute',
    right: 10,
    bottom: 0,
    top: 10,
    // zIndex: 1,
    height: 100,
    width: 100,
  },
})
