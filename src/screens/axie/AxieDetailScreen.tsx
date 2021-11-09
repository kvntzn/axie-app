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

const DURATION = 400

type Props = StackScreenProps<RootStackParamList, 'AxieDetail'>

const TOP_HEADER_HEIGHT = Dimensions.get('window').height * 0.3

const BackIcon = (props) => <Icon {...props} name='arrow-back' />

const defaultValue = {
  id: '4038304',
  image:
    'https://storage.googleapis.com/assets.axieinfinity.com/axies/4038304/axie/axie-full-transparent.png',
  class: 'Beast',
  chain: 'ronin',
  name: 'Nut crack',
  genes: '0x11864440020200a002128020c622088004028040040080200a0280a',
  owner: '0xb7a5ff69a6467de3db2aa44c9670bd8c414c9b4e',
  birthDate: 1628751555,
  bodyShape: 'Fuzzy',
  sireId: 3652734,
  sireClass: 'Beast',
  matronId: 3652886,
  matronClass: 'Beast',
  stage: 4,
  title: '',
  breedCount: 0,
  level: 1,
  figure: {
    atlas:
      'https://storage.googleapis.com/assets.axieinfinity.com/axies/4038304/axie/axie.atlas',
    model:
      'https://storage.googleapis.com/assets.axieinfinity.com/axies/4038304/axie/axie.json',
    image:
      'https://storage.googleapis.com/assets.axieinfinity.com/axies/4038304/axie/axie.png',
    __typename: 'AxieFigure',
  },
  parts: [
    {
      id: 'eyes-zeal',
      name: 'Zeal',
      class: 'Beast',
      type: 'Eyes',
      specialGenes: null,
      stage: 1,
      abilities: [],
      __typename: 'AxiePart',
    },
    {
      id: 'ears-rosa',
      name: 'Rosa',
      class: 'Plant',
      type: 'Ears',
      specialGenes: null,
      stage: 1,
      abilities: [],
      __typename: 'AxiePart',
    },
    {
      id: 'back-hero',
      name: 'Hero',
      class: 'Beast',
      type: 'Back',
      specialGenes: null,
      stage: 1,
      abilities: [
        {
          id: 'beast-back-04',
          name: 'Heroic Reward',
          attack: 60,
          defense: 0,
          energy: 0,
          description:
            'Draw a card when attacking an Aquatic, Bird, or Dawn target.',
          backgroundUrl:
            'https://storage.googleapis.com/axie-cdn/game/cards/base/beast-back-04.png',
          effectIconUrl:
            'https://storage.googleapis.com/axie-cdn/game/cards/effect-icons/draw-card.png',
          __typename: 'AxieCardAbility',
        },
      ],
      __typename: 'AxiePart',
    },
    {
      id: 'mouth-nut-cracker',
      name: 'Nut Cracker',
      class: 'Beast',
      type: 'Mouth',
      specialGenes: null,
      stage: 1,
      abilities: [
        {
          id: 'beast-mouth-02',
          name: 'Nut Crack',
          attack: 105,
          defense: 30,
          energy: 1,
          description:
            "Deal 120% damage when comboed with another 'Nut Cracker' card.",
          backgroundUrl:
            'https://storage.googleapis.com/axie-cdn/game/cards/base/beast-mouth-02.png',
          effectIconUrl:
            'https://storage.googleapis.com/axie-cdn/game/cards/effect-icons/raise-damage.png',
          __typename: 'AxieCardAbility',
        },
      ],
      __typename: 'AxiePart',
    },
    {
      id: 'horn-imp',
      name: 'Imp',
      class: 'Beast',
      type: 'Horn',
      specialGenes: null,
      stage: 1,
      abilities: [
        {
          id: 'beast-horn-04',
          name: 'Ivory Stab',
          attack: 70,
          defense: 20,
          energy: 1,
          description:
            'Gain 1 energy per critical strike dealt by your team this round.',
          backgroundUrl:
            'https://storage.googleapis.com/axie-cdn/game/cards/base/beast-horn-04.png',
          effectIconUrl:
            'https://storage.googleapis.com/axie-cdn/game/cards/effect-icons/gain-energy.png',
          __typename: 'AxieCardAbility',
        },
      ],
      __typename: 'AxiePart',
    },
    {
      id: 'tail-nut-cracker',
      name: 'Nut Cracker',
      class: 'Beast',
      type: 'Tail',
      specialGenes: null,
      stage: 1,
      abilities: [
        {
          id: 'beast-tail-10',
          name: 'Nut Throw',
          attack: 105,
          defense: 30,
          energy: 1,
          description:
            "Deal 120% damage when comboed with another 'Nut Cracker' card.",
          backgroundUrl:
            'https://storage.googleapis.com/axie-cdn/game/cards/base/beast-tail-10.png',
          effectIconUrl:
            'https://storage.googleapis.com/axie-cdn/game/cards/effect-icons/raise-damage.png',
          __typename: 'AxieCardAbility',
        },
      ],
      __typename: 'AxiePart',
    },
  ],
  stats: {
    hp: 34,
    speed: 40,
    skill: 31,
    morale: 59,
    __typename: 'AxieStats',
  },
  auction: {
    startingPrice: '40000000000000000',
    endingPrice: '35000000000000000',
    startingTimestamp: '1636366016',
    endingTimestamp: '1636452416',
    duration: '86400',
    timeLeft: '72980',
    currentPrice: '39223379629629629',
    currentPriceUSD: '185.39',
    suggestedPrice: '39226851851851851',
    seller: '0xb7a5ff69a6467de3db2aa44c9670bd8c414c9b4e',
    listingIndex: 2336364,
    state:
      '64047651063618197644769014757672962284295281101065081106062628501314322996137',
    __typename: 'Auction',
  },
  ownerProfile: {
    name: 'SIOPAO 3',
    __typename: 'PublicProfile',
  },
  battleInfo: {
    banned: false,
    banUntil: null,
    level: 0,
    __typename: 'AxieBattleInfo',
  },
  children: [],
  __typename: 'Axie',
}

const AxieDetailScreen: React.FC<Props> = ({ route, navigation }) => {
  const item: AxiesSoldResult = route.params.axie
  const [axieDetail, setAxieDetail] = useState<Axie>(defaultValue)

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      // setIsLoading(true)
      const response = await GetAxieDetail(item.id)
      setAxieDetail(response.data.axie)
      // setIsLoading(false)
    }

    fetchData()
  }, [])

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
        <View style={styles.bg}>
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
                  <View>
                    <Text category={'label'}>Health</Text>
                    <View style={styles.statsValue}>
                      <Text category={'p2'}>{axieDetail?.stats.hp}</Text>
                    </View>
                  </View>

                  <View>
                    <Text category={'label'}>Speed</Text>
                    <View style={styles.statsValue}>
                      <Text category={'p2'}>{axieDetail?.stats.hp}</Text>
                    </View>
                  </View>

                  <View>
                    <Text category={'label'}>Skill</Text>
                    <View style={styles.statsValue}>
                      <Text category={'p2'}>{axieDetail?.stats.skill}</Text>
                    </View>
                  </View>

                  <View>
                    <Text category={'label'}>Morale</Text>
                    <View style={styles.statsValue}>
                      <Text category={'p2'}>{axieDetail?.stats.morale}</Text>
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
        </View>
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
  statsValue: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})
