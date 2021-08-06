import { MenuEntry } from '@becoswap-libs/uikit'

const config: MenuEntry[] = [
  
//   {
//     label: 'BIRDA Polygon',
//     icon: 'ChainIcon',
//     href: 'https://poly.birda.farm',
//   },
  
  
  {
    label: 'Homepage',
    icon: 'HomeIcon',
    href: '/',
  },
 {
    label: 'Exchange',
    icon: 'TradeIcon',
    href: 'https://pancakeswap.finance/swap?outputCurrency=',
  },
   {
    label: 'Liquidity',
    icon: 'SupplyChainIcon',
    href: 'https://pancakeswap.finance/add/BNB/',
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Referrals',
    icon: 'ReferralIcon',
    href: '/referrals',
  },
 
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
        href: 'https://bscscan.com/token/',
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
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Docs',
        href: 'https://sekofarm.gitbook.io/sekofarm-live/',
      },
      {
        label: 'Telegram Chat',
        href: 'https://t.me/joinchat/YSuwNwKs6kowMmNl',
      },
      
      {
        label: 'Telegram Channel',
        href: 'https://t.me/SekoFarm',
      },
      {
        label: 'Twitter',
        href: 'https://twitter.com/SekoFarmLive',
      },
    ],
  },
  
   

  
  
   
]

export default config
