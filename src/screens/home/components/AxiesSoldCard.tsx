import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { Layout, Text, Card } from '@ui-kitten/components'
import { LAYOUT_SHADOW } from '../../../styles/misc'
import { AxiesSoldResult } from '../../../interface'
import { determineBackground } from '../../../util/classSelector'

const AxiesSoldCard: React.FC<{ item: AxiesSoldResult }> = ({ item }) => {
  return (
    <TouchableOpacity
      style={{
        margin: 16,
        marginVertical: 8,
        borderRadius: 25,
        padding: 16,
        backgroundColor: `${determineBackground(item.class)}80`,
      }}
    >
      <Text style={{color: '#fff'}} category={'s1'}>#{item.id}</Text>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <View>
          <Layout
            style={{
              borderRadius: 20,
              marginVertical: 4,
              padding: 4,
            }}
            level={'3'}
          >
            <Text>={item.name}</Text>
          </Layout>

          <Layout
            style={{
              borderRadius: 20,
              marginVertical: 4,
              padding: 4,
            }}
            level={'3'}
          >
            <Text>={item.breedCount}</Text>
          </Layout>
        </View>

        <Image source={{ uri: item.image }} style={{ height: 50, width: 50 }} />
      </View>
    </TouchableOpacity>
  )
}

export default AxiesSoldCard

const styles = StyleSheet.create({})
