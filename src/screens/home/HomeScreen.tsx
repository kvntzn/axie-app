import React, { useEffect, useState } from 'react'
import { StyleSheet, View, ScrollView, SafeAreaView } from 'react-native'
import { Layout, Text, Input, useTheme } from '@ui-kitten/components'
import { AxiesSoldCard, Selection } from './components'
import { GetRecentlyAxiesSold } from '../../api/recently'
import { AxiesSoldResult } from '../../interface'
import RecentlySoldTab from './components/RecentlySoldTab'
import { SharedElement } from 'react-navigation-shared-element'
import { StatusBar } from 'expo-status-bar'

const HomeScreen = () => {
  const theme = useTheme()

  const [recentAxies, setRecentAxies] = useState<AxiesSoldResult[]>([])

  const [selectSoldIndex, setSelectSoldIndex] = useState<number>(0)

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetRecentlyAxiesSold()
      setRecentAxies(data.settledAuctions.axies.results)
    }

    fetchData()
  }, [])

  return (
    <View style={{ backgroundColor: '#fff' }}>
      <StatusBar style='dark' />
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
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
                placeholder='Search for Axie, Lands, Item, Bundles, Players'
                style={{ borderRadius: 20 }}
                // value={value}
                // onChangeText={(nextValue) => setValue(nextValue)}
              />

              <View style={styles.selectionRow}>
                <Selection
                  image={require('../../../assets/axie.png')}
                  color={'#3EEBD8B3'}
                  title={'Axies'}
                />

                <Selection
                  image={require('../../../assets/land.png')}
                  color={'#B9DD2AB3'}
                  title={'Lands'}
                />
              </View>

              <View style={styles.selectionRow}>
                <Selection
                  image={require('../../../assets/item.png')}
                  color={'#FBA781B3'}
                  title={'Items'}
                />

                <Selection
                  image={require('../../../assets/bundle.png')}
                  color={'#006AE8B3'}
                  title={'Bundles'}
                />
              </View>
            </Layout>

            <View style={{ flex: 1 }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Text style={{ margin: 16, marginBottom: 0 }} category={'h6'}>
                  Recently sold
                </Text>
                <Text
                  style={{
                    margin: 16,
                    marginBottom: 0,
                    color: theme['color-primary-default'],
                  }}
                  category={'s2'}
                >
                  View All
                </Text>
              </View>

              <RecentlySoldTab
                value={selectSoldIndex}
                onChangeItem={(index: number) => setSelectSoldIndex(index)}
              />

              {recentAxies.map((data) => (
                <AxiesSoldCard item={data} key={data.id} />
              ))}
            </View>
          </Layout>
        </ScrollView>
        <SharedElement id={`general.bg`}>
          <View style={{ backgroundColor: '#fff', height: 1 }} />
        </SharedElement>
      </SafeAreaView>
    </View>
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
