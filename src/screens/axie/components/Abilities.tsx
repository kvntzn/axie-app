import React from 'react'
import { Icon, Text } from '@ui-kitten/components'
import { StyleSheet, View, FlatList, Image } from 'react-native'
import { Part } from '../../../interface/IAxieDetail'

interface IAbilitiesProps {
  data: Part[]
}

const Abilities: React.FC<IAbilitiesProps> = ({ data }) => {
  const renderItem = ({ item }: { item: Part }) => {
    return item.abilities.length ? (
      <View
        style={{
          margin: 4,
          alignItems: 'center',
          // backgroundColor: 'red',
          padding: 0,
        }}
      >
        <Text category={'s2'}>{item.name}</Text>
        <View>
          <Text
            category={'label'}
            style={{
              color: '#fff',
              fontSize: 9,
              position: 'absolute',
              zIndex: 1,
              left: 60,
              top: 13,
            }}
          >
            {item.abilities[0].name}
          </Text>
          <Image
            source={{ uri: item.abilities[0].backgroundUrl }}
            style={{ height: 180, width: 180 }}
            resizeMode={'contain'}
          />

          <Text
            category={'c1'}
            style={{
              color: '#fff',
              fontSize: 9,
              position: 'absolute',
              zIndex: 1,
              left: 10,
              top: 120,
              right: 0,
              // bottom: 10,
              // flexShrink: 1,
              marginHorizontal: 24,
            }}
          >
            {item.abilities[0].description}
          </Text>
        </View>
      </View>
    ) : null
  }
  return (
    <View>
      <Text category={'h6'}>Abilities</Text>

      <FlatList
        contentContainerStyle={{ alignItems: 'center' }}
        numColumns={2}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default Abilities

const styles = StyleSheet.create({})
