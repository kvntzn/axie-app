import { STATS } from '../constants/stats'
import { HP, MORALE, SKILL, SPEED } from '../styles/customColor'

export const determineStats = (stats: string) => {
  switch (stats) {
    case STATS.HP:
      return HP
    case STATS.SKILL:
      return SKILL
    case STATS.SPEED:
      return SPEED
    case STATS.MORALE:
      return MORALE
    default:
      return '#000'
  }
}
