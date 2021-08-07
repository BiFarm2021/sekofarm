import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.seko,
    earningToken: tokens.seko,
    contractAddress: {
      56: '0x833b967526e35dfb3a0a8c31f12881963e7983f8', 
      137: '0xc664d756899fceAc63213b07ceb3dE6024175843',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.005',
    sortOrder: 1,
    isFinished: false,
  },
  
//    {
//     sousId: 7,
//     stakingToken: tokens.wbnb,
//     earningToken: tokens.seko,
//     contractAddress: {
//       56: '0x833b967526e35dfb3a0a8c31f12881963e7983f8',
//       137: '',
//     },
//     poolCategory: PoolCategory.COMMUNITY,
//     harvest: true,
//     tokenPerBlock: '0.000025',
//     sortOrder: 1,
//     isFinished: false,
//   },
//   {
//     sousId: 8,
//     stakingToken: tokens.cake,
//     earningToken: tokens.seko,
//     contractAddress: {
//       56: '0x833b967526e35dfb3a0a8c31f12881963e7983f8',
//       137: '',
//     },
//     poolCategory: PoolCategory.COMMUNITY,
//     harvest: true,
//     tokenPerBlock: '0.000025',
//     sortOrder: 1,
//     isFinished: false,
//   },
//   {
//     sousId: 9,
//     stakingToken: tokens.btcb,
//     earningToken: tokens.seko,
//     contractAddress: {
//       56: '0x833b967526e35dfb3a0a8c31f12881963e7983f8',
//       137: '',
//     },
//     poolCategory: PoolCategory.COMMUNITY,
//     harvest: true,
//     tokenPerBlock: '0.000025',
//     sortOrder: 1,
//     isFinished: false,
//   },
//   {
//     sousId: 13,
//     stakingToken: tokens.eth,
//     earningToken: tokens.seko,
//     contractAddress: {
//       56: '0x833b967526e35dfb3a0a8c31f12881963e7983f8',
//       137: '',
//     },
//     poolCategory: PoolCategory.COMMUNITY,
//     harvest: true,
//     tokenPerBlock: '0.000025',
//     sortOrder: 1,
//     isFinished: false,
//   },
//   {
//     sousId: 10,
//     stakingToken: tokens.busd,
//     earningToken: tokens.seko,
//     contractAddress: {
//       56: '0x833b967526e35dfb3a0a8c31f12881963e7983f8',
//       137: '',
//     },
//     poolCategory: PoolCategory.COMMUNITY,
//     harvest: true,
//     tokenPerBlock: '0.000025',
//     sortOrder: 1,
//     isFinished: false,
//   },
//   {
//     sousId: 11,
//     stakingToken: tokens.usdt,
//     earningToken: tokens.seko,
//     contractAddress: {
//       56: '0x833b967526e35dfb3a0a8c31f12881963e7983f8',
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
