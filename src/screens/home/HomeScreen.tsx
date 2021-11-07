import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Image, FlatList, ScrollView } from 'react-native'
import { Layout, Text, Input } from '@ui-kitten/components'
import { AxiesSoldCard, Selection } from './components'
import { LAYOUT_SHADOW } from '../../styles/misc'
import { GetRecentlyAxiesSold } from '../../api/recently'
import { AxiesSoldResult } from '../../interface'

const HomeScreen = () => {
  const [recentAxies, setRecentAxies] = useState<AxiesSoldResult[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetRecentlyAxiesSold()
      setRecentAxies(data.settledAuctions.axies.results)
    }

    fetchData()
  }, [])

  return (
    <ScrollView>
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
            Recently sold
          </Text>

          {recentAxies.map((data) => (
            <AxiesSoldCard item={data} />
          ))}
        </View>
      </Layout>
    </ScrollView>
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
