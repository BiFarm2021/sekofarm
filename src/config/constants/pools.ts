import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.seko,
    earningToken: tokens.seko,
    contractAddress: {
      56: '', 
      137: '',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.005',
    sortOrder: 1,
    isFinished: false,
  },
  
//    {
//     sousId: 6,
//     stakingToken: tokens.wbnb,
//     earningToken: tokens.biyield,
//     contractAddress: {
//       56: '',
//       137: '',
//     },
//     poolCategory: PoolCategory.COMMUNITY,
//     harvest: true,
//     tokenPerBlock: '0.000025',
//     sortOrder: 1,
//     isFinished: false,
//   },
]

export default pools
