import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'BiYield',
  description:
    'BiYield is The First Multichain Yield Farming Platform With High APR incomes.',
  
}

export const customMeta: { [key: string]: PageMeta } = {
  '/': {
    title: 'Home | BiYield',
  },
  '/competition': {
    title: 'Trading Battle | BiYield',
  },
  '/prediction': {
    title: 'Prediction | BiYield',
  },
  '/farms': {
    title: 'BiYield | Farms',
  },
  '/pools': {
    title: 'BiYield | Pools',
  },
  '/lottery': {
    title: 'Lottery | BiYield',
  },
  '/collectibles': {
    title: 'Collectibles | BiYield',
  },
  '/ifo': {
    title: 'Initial Farm Offering | BiYield',
  },
  '/teams': {
    title: 'Leaderboard | BiYield',
  },
  '/profile/tasks': {
    title: 'Task Center | BiYield',
  },
  '/profile': {
    title: 'Your Profile | BiYield',
  },
}
