import { MenuEntry } from '@becoswap-libs/uikit'

const config: MenuEntry[] = [
  
//   {
//     label: 'BIRDA Polygon',
//     icon: 'ChainIcon',
//     href: 'https://poly.birda.farm',
//   },
  
  
  {
    label: 'Dashboard',
    icon: 'HomeIcon',
    href: '/',
  },
 {
    label: 'Exchange',
    icon: 'NftIcon',
    href: 'https://pancakeswap.finance/swap?outputCurrency=',
  },
   {
    label: 'Liquidity',
    icon: 'SupplyChainIcon',
    href: 'https://pancakeswap.finance/add/BNB/',
  },
  {
    label: 'BiFarms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'BiPools',
    icon: 'PoolIcon',
    href: '/pools',
  },
//   {
//     label: 'Referrals',
//     icon: 'ReferralIcon',
//     href: '/referrals',
//   },
 
  {
    label: 'Analytics',
    icon: 'InfoIcon',
    items: [
      
      {
        label: 'Poocoin',
        href: 'https://poocoin.app/tokens/',
      },
      {
        label: 'BscScan',
        href: 'https://bscscan.com/token/0x109bc337779f2fc39dc0353e49c563969d15a647',
      },
      
    ],
  },

 
  {
    label: 'Community',
    icon: 'MoreIcon',
    items: [
      
      {
        label: 'Telegram Chat',
        href: 'https://t.me/BiYieldChat',
      },
      
      {
        label: 'Telegram Channel',
        href: 'https://t.me/BiYieldFarm',
      },
      {
        label: 'Twitter',
        href: 'https://twitter.com/BiYieldFarm',
      },
    ],
  },
  
    {
    label: 'Security',
    icon: 'NftIcon',
    items: [
      {
        label: 'Review by RugDoc',
        href: 'https://rugdoc.io/project/',
      },
     {
        label: 'Audits',
        href: '/',
      },
      
    ],
  },

  
  
   
]

export default config
