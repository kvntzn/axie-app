import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Image, Dimensions } from 'react-native'
import { Icon, Text, TopNavigationAction } from '@ui-kitten/components'

import { SharedElement } from 'react-navigation-shared-element'

import { RootStackParamList } from '../../type/RootStackParamList'
import { StackScreenProps } from '@react-navigation/stack'
import { AxiesSoldResult } from '../../interface'
import { determineBackground } from '../../util/classSelector'
import { AxieClassIcon } from '../../components'

import * as Animatable from 'react-native-animatable'
import { GetAxieDetail } from '../../api/axie'
import { Axie } from '../../interface/IAxieDetail'
import { determineStats } from '../../util/statsColor'
import { STATS } from '../../constants/stats'
import { FontAwesome5 } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'
import { useQuery } from 'react-query'

const DURATION = 400

type Props = StackScreenProps<RootStackParamList, 'AxieDetail'>

const TOP_HEADER_HEIGHT = Dimensions.get('window').height * 0.3

const BackIcon = (props) => <Icon {...props} name='arrow-back' />

const defaultValue = {
  id: '',
  image: '',
  class: '',
  chain: '',
  name: '',
  genes: '',
  owner: '',
  birthDate: null,
  bodyShape: '',
  sireId: null,
  sireClass: '',
  matronId: null,
  matronClass: '',
  stage: 0,
  title: '',
  breedCount: 0,
  level: 0,
  figure: {
    atlas: '',
    model: '',
    image: '',
    __typename: '',
  },
  parts: [
    {
      id: '1',
      name: '',
      class: '',
      type: '',
      specialGenes: null,
      stage: 0,
      abilities: [],
      __typename: '',
    },
    {
      id: '2',
      name: '',
      class: '',
      type: '',
      specialGenes: null,
      stage: 1,
      abilities: [],
      __typename: '',
    },
    {
      id: '4',
      name: '',
      class: '',
      type: '',
      specialGenes: null,
      stage: 0,
      abilities: [],
      __typename: '',
    },
    {
      id: '3',
      name: '',
      class: '',
      type: '',
      specialGenes: null,
      stage: 0,
      abilities: [],
      __typename: '',
    },
    {
      id: '5',
      name: '',
      class: '',
      type: '',
      specialGenes: null,
      stage: 0,
      abilities: [],
      __typename: '',
    },
    {
      id: '6',
      name: '',
      class: '',
      type: '',
      specialGenes: null,
      stage: 0,
      abilities: [],
      __typename: '',
    },
  ],
  stats: {
    hp: 0,
    speed: 0,
    skill: 0,
    morale: 0,
    __typename: '',
  },
  auction: {
    startingPrice: '',
    endingPrice: '',
    startingTimestamp: '',
    endingTimestamp: '',
    duration: '',
    timeLeft: '',
    currentPrice: '',
    currentPriceUSD: '',
    suggestedPrice: '',
    seller: '',
    listingIndex: 0,
    state: '',
    __typename: '',
  },
  ownerProfile: {
    name: '',
    __typename: '',
  },
  battleInfo: {
    banned: false,
    banUntil: null,
    level: 0,
    __typename: '',
  },
  children: [],
  __typename: '',
}

const AxieDetailScreen: React.FC<Props> = ({ route, navigation }) => {
  const item: AxiesSoldResult = route.params.axie

  const {
    data: axieDetail,
    isLoading,
    isError,
    isSuccess,
    refetch,
  } = useQuery(['axiedetails', item.id], async ({ queryKey }) => {
    const response = await GetAxieDetail(queryKey[1])
    return response.data.axie
  })

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
            color={'#fff'}
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
        <ScrollView style={styles.bg}>
          {/* About */}
          <View>
            <Text category={'h6'}>About</Text>

            <View style={{ flexDirection: 'row', marginTop: 16 }}>
              <View style={{ flex: 0.5 }}>
                <Text category={'label'}>Class</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <AxieClassIcon
                    element={item.class}
                    opacity={'1'}
                    color={determineBackground(item.class)}
                    style={{
                      height: 40,
                      width: 40,
                      marginRight: 8,
                      // backgroundColor: 'red',
                    }}
                  />
                  <Text category={'p2'}>{item.class}</Text>
                </View>
              </View>

              <View style={{ flex: 0.5 }}>
                <Text category={'label'}>Breed Count:</Text>
                <Text category={'p1'} style={{ marginTop: 4 }}>
                  {item.breedCount}/7
                </Text>
              </View>
            </View>

            <View style={{ marginTop: 8 }}>
              <Text category={'label'}>Owner</Text>

              <Text category={'s1'}>
                {item.transferHistory.results[0].fromProfile.name}{' '}
                <Text category={'p2'}>
                  (ronin:{item.transferHistory.results[0].from})
                </Text>
              </Text>
            </View>
          </View>

          {/* Stats */}
          {!isLoading && (
            <>
              <View style={{ marginTop: 16 }}>
                <Text category={'h6'}>Stats</Text>

                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 16,
                    justifyContent: 'space-evenly',
                  }}
                >
                  <View style={styles.statsContainer}>
                    <Icon
                      style={styles.statsIcon}
                      fill={determineStats(STATS.HP)}
                      name='heart'
                    />
                    <View>
                      <Text category={'label'}>Health</Text>
                      <View style={styles.statsValue}>
                        <Text category={'p2'}>{axieDetail?.stats.hp}</Text>
                      </View>
                    </View>
                  </View>

                  <View style={styles.statsContainer}>
                    <Icon
                      style={styles.statsIcon}
                      fill={determineStats(STATS.SPEED)}
                      name='flash'
                    />
                    <View>
                      <Text category={'label'}>Speed</Text>
                      <View style={styles.statsValue}>
                        <Text category={'p2'}>{axieDetail?.stats.hp}</Text>
                      </View>
                    </View>
                  </View>

                  <View style={styles.statsContainer}>
                    <Icon
                      style={styles.statsIcon}
                      fill={determineStats(STATS.SKILL)}
                      name='star'
                    />
                    <View>
                      <Text category={'label'}>Skill</Text>
                      <View style={styles.statsValue}>
                        <Text category={'p2'}>{axieDetail?.stats.skill}</Text>
                      </View>
                    </View>
                  </View>

                  <View style={styles.statsContainer}>
                    <FontAwesome5
                      name='fire'
                      size={18}
                      style={{ marginRight: 8 }}
                      color={determineStats(STATS.MORALE)}
                    />
                    <View>
                      <Text category={'label'}>Morale</Text>
                      <View style={styles.statsValue}>
                        <Text category={'p2'}>{axieDetail?.stats.morale}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>

              <View style={{ marginTop: 16 }}>
                <Text category={'h6'}>Body Parts</Text>

                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 16,
                    justifyContent: 'space-evenly',
                  }}
                >
                  <View>
                    {axieDetail.parts.slice(0, 2).map((part) => (
                      <View key={part.id} style={{ marginBottom: 8 }}>
                        <Text category={'label'}>{part.type}</Text>
                        <Text category={'p1'} style={{ marginTop: 4 }}>
                          {part.name}
                        </Text>
                      </View>
                    ))}
                  </View>

                  <View>
                    {axieDetail.parts.slice(2, 4).map((part) => (
                      <View key={part.id} style={{ marginBottom: 8 }}>
                        <Text category={'label'}>{part.type}</Text>
                        <Text category={'p1'} style={{ marginTop: 4 }}>
                          {part.name}
                        </Text>
                      </View>
                    ))}
                  </View>

                  <View>
                    {axieDetail.parts.slice(4, 6).map((part) => (
                      <View key={part.id} style={{ marginBottom: 8 }}>
                        <Text category={'label'}>{part.type}</Text>
                        <Text category={'p1'} style={{ marginTop: 4 }}>
                          {part.name}
                        </Text>
                      </View>
                    ))}
                  </View>
                </View>
              </View>
            </>
          )}
        </ScrollView>
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
  statsContainer: { flexDirection: 'row', alignItems: 'center' },
  statsValue: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statsIcon: { height: 20, width: 20, marginRight: 8 },
})
