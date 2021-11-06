import React from 'react'
import { StyleSheet, View, Image, FlatList } from 'react-native'
import { Layout, Text, Input } from '@ui-kitten/components'
import { Selection } from './components'
import { LAYOUT_SHADOW } from '../../styles/misc'

const HomeScreen = () => {
  const renderItem = ({ item }: { item: any }) => {
    return (
      <Layout
        level={'1'}
        style={{
          margin: 16,
          borderRadius: 25,
          ...LAYOUT_SHADOW,
          padding: 16,
        }}
      >
        <Text category={'s1'}>{item.id}</Text>

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
              <Text>={item.price}</Text>
            </Layout>

            <Layout
              style={{
                borderRadius: 20,
                marginVertical: 4,
                padding: 4,
              }}
              level={'3'}
            >
              <Text>={item.price}</Text>
            </Layout>
          </View>

          <Image
            source={require('../../../assets/axie.png')}
            style={{ height: 50, width: 50 }}
          />
        </View>
      </Layout>
    )
  }

  return (
    <Layout
      style={{
        flex: 1,
      }}
      level={'3'}
    >
      <Layout style={styles.top}>
        <Text style={{ marginBottom: 16 }} category={'h4'}>
          What are you looking for?
        </Text>

        <Input
          placeholder='Search Axie'
          style={{ borderRadius: 20 }}
          // value={value}
          // onChangeText={(nextValue) => setValue(nextValue)}
        />

        <View style={styles.selectionRow}>
          <Selection
            image={require('../../../assets/axie.png')}
            color={'#50C1A6'}
          />

          <Selection
            image={require('../../../assets/axie.png')}
            color={'#F7786B'}
          />
        </View>

        <View style={styles.selectionRow}>
          <Selection
            image={require('../../../assets/axie.png')}
            color={'#58AAF6'}
          />

          <Selection
            image={require('../../../assets/axie.png')}
            color={'#FFCE4C'}
          />
        </View>

        <View style={styles.selectionRow}>
          <Selection
            image={require('../../../assets/axie.png')}
            color={'#7C538C'}
          />

          <Selection
            image={require('../../../assets/axie.png')}
            color={'#B1736D'}
          />
        </View>
      </Layout>

      <View style={{ flex: 1 }}>
        <Text style={{ margin: 16, marginBottom: 0 }} category={'h6'}>
          Recently listed
        </Text>

        <FlatList
          data={[
            {
              id: '#4383758',
              breedcount: 0,
              price: 0.82,
              amount: 194.31,
            },
          ]}
          renderItem={renderItem}
        />
      </View>
    </Layout>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  top: {
    padding: 16,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  selectionRow: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})
