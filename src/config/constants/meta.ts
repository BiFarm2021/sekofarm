import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'SekoFarm',
  description:
    'SekoFarm benefits from velociraptor fast and prehistorically cheap transaction capabilities on Polygon & BSC.',
  
}

export const customMeta: { [key: string]: PageMeta } = {
  '/': {
    title: 'Home | SekoFarm',
  },
  '/competition': {
    title: 'Trading Battle | SekoFarm',
  },
  '/prediction': {
    title: 'Prediction | SekoFarm',
  },
  '/farms': {
    title: 'SekoFarms',
  },
  '/pools': {
    title: 'SekoPools',
  },
  '/lottery': {
    title: 'Lottery | SekoFarm',
  },
  '/collectibles': {
    title: 'Collectibles | SekoFarm',
  },
  '/ifo': {
    title: 'Initial Farm Offering | SekoFarm',
  },
  '/teams': {
    title: 'Leaderboard | SekoFarm',
  },
  '/profile/tasks': {
    title: 'Task Center | SekoFarm',
  },
  '/profile': {
    title: 'Your Profile | SekoFarm',
  },
}
