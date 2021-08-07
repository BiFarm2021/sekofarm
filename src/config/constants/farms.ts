import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 1,
    lpSymbol: 'SEKO-MATIC LP',
    lpAddresses: {
      56: '',
      137: '',
    },
    token: tokens.seko,
    quoteToken: tokens.wmatic,
  },
  {
    pid: 2,
    lpSymbol: 'WETH-MATIC LP',
    lpAddresses: {
      56: '',
      137: '0xadbf1854e5883eb8aa7baf50705338739e558e5b',
    },
    token: tokens.weth,
    quoteToken: tokens.wmatic,
  },
 
  {
    pid: 3,
    lpSymbol: 'MATIC-USDC LP',
    lpAddresses: {
      56: '0x58f876857a02d6762e0101bb5c46a8c1ed44dc16', // WBNB-BUSD
      137: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827', // WMATIC-USDC
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
//   {
//     pid: 12,
//     lpSymbol: 'USDT-BUSD LP',
//     lpAddresses: {
//       56: '0x7efaef62fddcca950418312c6c91aef321375a00',
//       137: '',
//     },
//     token: tokens.busd,
//     quoteToken: tokens.usdt,
//   },
  
//   {
//     pid: 5,
//     lpSymbol: 'BTCB-BNB LP',
//     lpAddresses: {
//       56: '0x61eb789d75a95caa3ff50ed7e47b96c132fec082', // BTCB-WBNB
//       137: '0xdC9232E2Df177d7a12FdFf6EcBAb114E2231198D', // WBTC-WETH
//     },
//     token: tokens.btcb,
//     quoteToken: tokens.wbnb,
//   },
  
//   {
//     pid: 6,
//     lpSymbol: 'ETH-BNB LP',
//     lpAddresses: {
//       56: '0x74e4716e431f45807dcf19f284c7aa99f18a4fbc', // ETH-WBNB
//       137: '0xadbf1854e5883eb8aa7baf50705338739e558e5b', // WMATIC-WETH
//     },
//     token: tokens.eth,
//     quoteToken: tokens.wbnb,
//   },
 ]

export default farms
