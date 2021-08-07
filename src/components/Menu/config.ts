import { MenuEntry } from '@becoswap-libs/uikit'

const config: MenuEntry[] = [
  
  {
    label: 'Polygon',
    icon: 'ChainIcon',
    href: 'https://poly.sekofarm.live/',
  },
  
  
  {
    label: 'Homepage',
    icon: 'HomeIcon',
    href: '/',
  },
 {
    label: 'Exchange',
    icon: 'TradeIcon',
    href: 'https://pancakeswap.finance/swap?outputCurrency=0x8e71c4b127b3e07918add7641c53036d00e31546',
  },
   {
    label: 'Liquidity',
    icon: 'SupplyChainIcon',
    href: 'https://pancakeswap.finance/add/BNB/0x8e71c4b127b3e07918add7641c53036d00e31546',
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
        href: 'https://poocoin.app/tokens/0x8e71c4b127b3e07918add7641c53036d00e31546',
      },
      {
        label: 'BscScan',
        href: 'https://bscscan.com/token/0x8e71c4b127b3e07918add7641c53036d00e31546',
      },
      
    ],
  },

  {
    label: 'Security',
    icon: 'NftIcon',
    items: [
      {
        label: 'Review by RugDoc',
        href: 'https://rugdoc.io/project/zekofarm/',
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
