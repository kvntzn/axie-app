import React from 'react'
import { Icon, Text } from '@ui-kitten/components'
import { StyleSheet, View, FlatList, Image } from 'react-native'
import { Child } from '../../../interface/IAxieDetail'
import { determineBackground } from '../../../util/classSelector'
import { AxieClassIcon } from '../../../components'

interface IFamilyProps {
  data: Child[]
}

const Family: React.FC<IFamilyProps> = ({ data }) => {
  const renderItem = ({ item }: { item: Child }) => {
    return (
      <View
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
        <Text style={{ color: '#fff' }} category={'label'} numberOfLines={1}>
          #{item.id}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            // marginHorizontal: 8,
          }}
        >
          <AxieClassIcon
            element={item.class}
            opacity={'1'}
            color={'#fff'}
            style={{ height: 20, width: 20, marginRight: 4 }}
          />
          <Text
            style={{ color: '#fff', flexShrink: 1 }}
            category={'c1'}
            numberOfLines={1}
          >
            {item.name}
          </Text>
        </View>
        <Image
          source={{ uri: item.image }}
          style={{ height: 100, width: 100, alignSelf: 'center' }}
          resizeMode={'cover'}
        />
      </View>
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
