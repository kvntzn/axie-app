import { AxiesSoldResult } from '../interface'

export type RootStackParamList = {
  Home: undefined
  AxieDetail: { id: string; name: string; class: string; image: string }
}
