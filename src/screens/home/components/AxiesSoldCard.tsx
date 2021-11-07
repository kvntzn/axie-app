import React, { memo } from 'react'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { Layout, Text, Card } from '@ui-kitten/components'
import { LAYOUT_SHADOW } from '../../../styles/misc'
import { AxiesSoldResult } from '../../../interface'
import { determineBackground } from '../../../util/classSelector'
import moment from 'moment'
import {
  AquaIcon,
  BeastIcon,
  BirdIcon,
  BugIcon,
  DawnIcon,
  DuskIcon,
  MechIcon,
  PlantIcon,
  ReptileIcon,
} from '../../../components'
import { AXIE_CLASS } from '../../../constants/axieClass'
import { SharedElement } from 'react-navigation-shared-element'
import { useNavigation } from '@react-navigation/core'

const AxiesSoldCard: React.FC<{ item: AxiesSoldResult }> = ({ item }) => {
  const { navigate } = useNavigation()

  const renderClassBackground = (element: string) => {
    switch (element) {
      case AXIE_CLASS.AQUA:
        return <AquaIcon style={styles.classBG} />
      case AXIE_CLASS.BEAST:
        return <BeastIcon style={styles.classBG} />
      case AXIE_CLASS.PLANT:
        return <PlantIcon style={styles.classBG} />
      case AXIE_CLASS.BIRD:
        return <BirdIcon style={styles.classBG} />
      case AXIE_CLASS.BUG:
        return <BugIcon style={styles.classBG} />
      case AXIE_CLASS.REPTILE:
        return <ReptileIcon style={styles.classBG} />
      case AXIE_CLASS.MECH:
        return <MechIcon style={styles.classBG} />
      case AXIE_CLASS.DAWN:
        return <DawnIcon style={styles.classBG} />
      case AXIE_CLASS.DUSK:
        return <DuskIcon style={styles.classBG} />
      default:
        return null
    }
  }

  return (
    <TouchableOpacity
      onPress={() => {
        navigate('AxieDetail', { axie: item })
      }}
      style={{
        margin: 16,
        marginVertical: 8,
        borderRadius: 25,
        padding: 16,
        backgroundColor: `${determineBackground(item.class)}B3`,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 4,
        }}
      >
        <Text style={{ color: '#fff' }} category={'s1'}>
          #{item.id}
        </Text>

        <Text style={{ color: '#fff' }} category={'s1'}>
          {moment(
            new Date(item.transferHistory.results[0].timestamp * 1000)
          ).fromNow()}
        </Text>
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

        <SharedElement id={item.id}>
          <Image
            source={{ uri: item.image }}
            style={{ height: 60, width: 60 }}
          />
        </SharedElement>
      </View>

      {renderClassBackground(item.class)}
    </TouchableOpacity>
  )
}

export default memo(AxiesSoldCard)

const styles = StyleSheet.create({
  classBG: {
    position: 'absolute',
    right: 10,
    bottom: 0,
    zIndex: -1,
    height: 100,
    width: 100,
  },
})
