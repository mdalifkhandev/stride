import { gardeningTheme } from '@/game/config/themes';
import { ThemeIcon } from '@/game/types';
import SportsBallIcon from '@/assets/Sports/Icon.svg';
import SportsIcon1 from '@/assets/Sports/Icon-1.svg';
import SportsIcon2 from '@/assets/Sports/Icon-2.svg';
import SportsIcon3 from '@/assets/Sports/Icon-3.svg';
import SportsIcon4 from '@/assets/Sports/Icon-4.svg';
import SportsIcon5 from '@/assets/Sports/Icon-5.svg';
import SportsIcon6 from '@/assets/Sports/Icon-6.svg';
import SportsIcon7 from '@/assets/Sports/Icon-7.svg';

import { OrderMemoryTheme } from '@/order-memory/types';

const orderMemoryItems: ThemeIcon[] = [
  { id: 'sports-ball', label: 'basketball', shortLabel: 'BALL', SvgIcon: SportsBallIcon, accent: '#003A7B' },
  { id: 'sports-1', label: 'Soccer', shortLabel: 'SP1', SvgIcon: SportsIcon1, accent: '#003A7B' },
  { id: 'sports-2', label: 'Tennis', shortLabel: 'SP2', SvgIcon: SportsIcon2, accent: '#003A7B' },
  { id: 'sports-3', label: 'Football', shortLabel: 'SP3', SvgIcon: SportsIcon3, accent: '#003A7B' },
  { id: 'sports-4', label: 'Baseball', shortLabel: 'SP4', SvgIcon: SportsIcon4, accent: '#003A7B' },
  { id: 'sports-5', label: 'Swimming', shortLabel: 'SP5', SvgIcon: SportsIcon5, accent: '#003A7B' },
  { id: 'sports-6', label: 'Cycling', shortLabel: 'SP6', SvgIcon: SportsIcon6, accent: '#003A7B' },
  { id: 'sports-7', label: 'Yoga', shortLabel: 'SP7', SvgIcon: SportsIcon7, accent: '#003A7B' },
];

export const orderMemoryTheme: OrderMemoryTheme = {
  id: 'sports-order-memory',
  gameName: 'Order Memory',
  themeName: 'Sports',
  palette: gardeningTheme.palette,
  promptTitle: 'Memorize the shown sequence',
  promptBody:
    'Watch the sports symbols one by one, then tap them back in the same order from the answer grid.',
  items: orderMemoryItems,
};

export const ORDER_MEMORY_RULES = {
  answerPoolSize: 8,
  failOnMistake: true,
  maxRounds: 8,
  readyDelayMs: 700,
  roundBasePoints: 100,
  showResultDelayMs: 600,
} as const;
