import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 1,
    lpSymbol: 'BiYield-BNB LP',
    lpAddresses: {
      56: '',
      137: '',
    },
    token: tokens.biyield,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'BiYield-BUSD LP',
    lpAddresses: {
      56: '',
      137: '',
    },
    token: tokens.biyield,
    quoteToken: tokens.busd,
  },
 
  {
    pid: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      56: '0x58f876857a02d6762e0101bb5c46a8c1ed44dc16', // WBNB-BUSD
      137: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827', // WMATIC-USDC
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
   {
    pid: 4,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      56: '0x58f876857a02d6762e0101bb5c46a8c1ed44dc16',
      137: '',
    },
    token: tokens.busd,
    quoteToken: tokens.usdt,
  },
  
  {
    pid: 5,
    lpSymbol: 'BTCB-BNB LP',
    lpAddresses: {
      56: '0x61eb789d75a95caa3ff50ed7e47b96c132fec082',
      137: '0xadbf1854e5883eb8aa7baf50705338739e558e5b', // WMATIC-WETH
    },
    token: tokens.btcb,
    quoteToken: tokens.wbnb,
  },
]

export default farms
