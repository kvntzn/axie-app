export interface FromProfile {
  name: string
  __typename: string
}

export interface ToProfile {
  name: string
  __typename: string
}

export interface Result2 {
  from: string
  to: string
  txHash: string
  timestamp: number
  withPrice: string
  withPriceUsd: string
  fromProfile: FromProfile
  toProfile: ToProfile
  __typename: string
}

export interface TransferHistory {
  total: number
  results: Result2[]
  __typename: string
}

export interface AxiesSoldResult {
  id: string
  name: string
  image: string
  class: string
  breedCount: number
  __typename: string
  transferHistory: TransferHistory
}

export interface Axies {
  total: number
  results: AxiesSoldResult[]
  __typename: string
}

export interface SettledAuctions {
  axies: Axies
  __typename: string
}

export interface IRecentlyAxiesSoldData {
  settledAuctions: SettledAuctions
}
