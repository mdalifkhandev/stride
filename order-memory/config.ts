import { gardeningTheme } from '@/game/config/themes';
import { ThemeIcon } from '@/game/types';

import { OrderMemoryTheme } from '@/order-memory/types';

const fallbackOrderMemoryItems: ThemeIcon[] = [
  ...gardeningTheme.icons,
  {
    id: 'watering',
    label: 'Watering Can',
    shortLabel: 'WATR',
    iconName: 'watering-can-outline',
    accent: '#4B6958',
  },
];

const orderMemoryItems: ThemeIcon[] =
  gardeningTheme.icons.length >= 9
    ? gardeningTheme.icons
    : fallbackOrderMemoryItems;

export const orderMemoryTheme: OrderMemoryTheme = {
  id: 'gardening-order-memory',
  gameName: 'Order Memory',
  themeName: 'Gardening',
  palette: gardeningTheme.palette,
  promptTitle: 'Memorize the shown sequence',
  promptBody:
    'Watch the gardening symbols one by one, then tap them back in the same order from the answer grid.',
  items: orderMemoryItems,
};

export const ORDER_MEMORY_RULES = {
  answerPoolSize: 9,
  failOnMistake: true,
  maxRounds: 8,
  readyDelayMs: 700,
  roundBasePoints: 100,
  showResultDelayMs: 600,
} as const;
