import { IRecentlyAxiesSoldData } from '../../interface'
import { instance } from '../index'

const GET_RECENTLY_AXIES_SOLD =
  'query GetRecentlyAxiesSold($from: Int, $size: Int) {\n  settledAuctions {\n    axies(from: $from, size: $size) {\n      total\n      results {\n        ...AxieSettledBrief\n        transferHistory {\n          ...TransferHistoryInSettledAuction\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment AxieSettledBrief on Axie {\n  id\n  name\n  image\n  class\n  breedCount\n  __typename\n}\n\nfragment TransferHistoryInSettledAuction on TransferRecords {\n  total\n  results {\n    ...TransferRecordInSettledAuction\n    __typename\n  }\n  __typename\n}\n\nfragment TransferRecordInSettledAuction on TransferRecord {\n  from\n  to\n  txHash\n  timestamp\n  withPrice\n  withPriceUsd\n  fromProfile {\n    name\n    __typename\n  }\n  toProfile {\n    name\n    __typename\n  }\n  __typename\n}\n'

export const GetRecentlyAxiesSold =
  async (): Promise<IRecentlyAxiesSoldData> => {
    try {
      const response = await instance.post('', {
        operationName: 'GetRecentlyAxiesSold',
        variables: {
          from: 0,
          size: 10,
        },
        query: GET_RECENTLY_AXIES_SOLD,
      })

      return response.data.data
    } catch (error) {
      throw error
    }
  }
