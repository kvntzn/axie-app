import { AXIE_CLASS } from '../constants/axieClass'
import {
  AQUA,
  BEAST,
  BIRD,
  BUG,
  DAWN,
  DUSK,
  MECH,
  PLANT,
  REPTILE,
} from '../styles/customColor'

export const determineBackground = (element: string) => {
  switch (element) {
    case AXIE_CLASS.PLANT:
      return PLANT
    case AXIE_CLASS.AQUA:
      return AQUA
    case AXIE_CLASS.BEAST:
      return BEAST
    case AXIE_CLASS.BIRD:
      return BIRD
    case AXIE_CLASS.BUG:
      return BUG
    case AXIE_CLASS.REPTILE:
      return REPTILE
    case AXIE_CLASS.MECH:
      return MECH
    case AXIE_CLASS.DAWN:
      return DAWN
    case AXIE_CLASS.DUSK:
      return DUSK
  }
}
