export interface Figure {
  atlas: string
  model: string
  image: string
  __typename: string
}

export interface Ability {
  id: string
  name: string
  attack: number
  defense: number
  energy: number
  description: string
  backgroundUrl: string
  effectIconUrl: string
  __typename: string
}

export interface Part {
  id: string
  name: string
  class: string
  type: string
  specialGenes?: any
  stage: number
  abilities: Ability[]
  __typename: string
}

export interface Stats {
  hp: number
  speed: number
  skill: number
  morale: number
  __typename: string
}

export interface Auction {
  startingPrice: string
  endingPrice: string
  startingTimestamp: string
  endingTimestamp: string
  duration: string
  timeLeft: string
  currentPrice: string
  currentPriceUSD: string
  suggestedPrice: string
  seller: string
  listingIndex: number
  state: string
  __typename: string
}

export interface OwnerProfile {
  name: string
  __typename: string
}

export interface BattleInfo {
  banned: boolean
  banUntil?: any
  level: number
  __typename: string
}

export interface Axie {
  id: string
  image: string
  class: string
  chain: string
  name: string
  genes: string
  owner: string
  birthDate: number
  bodyShape: string
  sireId: number
  sireClass: string
  matronId: number
  matronClass: string
  stage: number
  title: string
  breedCount: number
  level: number
  figure: Figure
  parts: Part[]
  stats: Stats
  auction: Auction
  ownerProfile: OwnerProfile
  battleInfo: BattleInfo
  children: any[]
  __typename: string
}

export interface Data {
  axie: Axie
}

export interface IAxieDetail {
  data: Data
}
