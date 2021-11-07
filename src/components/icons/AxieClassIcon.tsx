import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
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
} from '..'
import { AXIE_CLASS } from '../../constants/axieClass'

const AxieClassIcon: React.FC<{
  element: string
  opacity: string
  color: string
  style: any
}> = ({ element, opacity, color, style }) => {
  switch (element) {
    case AXIE_CLASS.AQUA:
      return <AquaIcon opacity={opacity} color={color} style={style} />
    case AXIE_CLASS.BEAST:
      return <BeastIcon opacity={opacity} color={color} style={style} />
    case AXIE_CLASS.PLANT:
      return <PlantIcon opacity={opacity} color={color} style={style} />
    case AXIE_CLASS.BIRD:
      return <BirdIcon opacity={opacity} color={color} style={style} />
    case AXIE_CLASS.BUG:
      return <BugIcon opacity={opacity} color={color} style={style} />
    case AXIE_CLASS.REPTILE:
      return <ReptileIcon opacity={opacity} color={color} style={style} />
    case AXIE_CLASS.MECH:
      return <MechIcon opacity={opacity} color={color} style={style} />
    case AXIE_CLASS.DAWN:
      return <DawnIcon opacity={opacity} color={color} style={style} />
    case AXIE_CLASS.DUSK:
      return <DuskIcon opacity={opacity} color={color} style={style} />
    default:
      return null
  }
}

export default AxieClassIcon
