import { ThemeConfig } from '@/game/types';
import CookingBowlIcon from '@/assets/cooking/Icon-10.svg';
import CookingClocheIcon from '@/assets/cooking/Icon-11.svg';
import CookingCupIcon from '@/assets/cooking/Icon-12.svg';
import CookingChefIcon from '@/assets/cooking/Icon-13.svg';
import CookingPanIcon from '@/assets/cooking/Icon-14.svg';
import CookingPotIcon from '@/assets/cooking/Icon-15.svg';
import CookingForkIcon from '@/assets/cooking/Icon-8.svg';
import CookingSpoonIcon from '@/assets/cooking/Icon-9.svg';
import GardenBloomIcon from '@/assets/Garden/Icon-16.svg';
import GardenLeafIcon from '@/assets/Garden/Icon-17.svg';
import GardenSproutIcon from '@/assets/Garden/Icon-18.svg';
import GardenSunIcon from '@/assets/Garden/Icon-19.svg';
import GardenPotIcon from '@/assets/Garden/Icon-20.svg';
import GardenWaterIcon from '@/assets/Garden/Icon-21.svg';
import GardenSeedIcon from '@/assets/Garden/Icon-22.svg';
import GardenTreeIcon from '@/assets/Garden/Icon-23.svg';

export const gardeningTheme: ThemeConfig = {
  id: 'gardening',
  gameName: 'Symbol Tap',
  themeName: 'Gardening',
  promptTitle: 'Train quick garden matching',
  promptBody:
    'Spot the garden symbols shown at the top, then tap every matching tile in the grid as quickly and accurately as you can.',
  icons: [
    { id: 'garden-bloom', label: 'Bloom', shortLabel: 'BLOOM', SvgIcon: GardenBloomIcon, stage: 'normal', accent: '#003A7B' },
    { id: 'garden-leaf', label: 'Leaf', shortLabel: 'LEAF', SvgIcon: GardenLeafIcon, stage: 'normal', accent: '#003A7B' },
    { id: 'garden-sprout', label: 'Sprout', shortLabel: 'SPRT', SvgIcon: GardenSproutIcon, stage: 'normal', accent: '#003A7B' },
    { id: 'garden-sun', label: 'Sunlight', shortLabel: 'SUN', SvgIcon: GardenSunIcon, stage: 'normal', accent: '#003A7B' },
    { id: 'garden-pot', label: 'Plant Pot', shortLabel: 'POT', SvgIcon: GardenPotIcon, stage: 'normal', accent: '#003A7B' },
    { id: 'garden-water', label: 'Water Drop', shortLabel: 'DROP', SvgIcon: GardenWaterIcon, stage: 'normal', accent: '#003A7B' },
    { id: 'garden-seed', label: 'Seed', shortLabel: 'SEED', SvgIcon: GardenSeedIcon, stage: 'normal', accent: '#003A7B' },
    { id: 'garden-tree', label: 'Garden Tree', shortLabel: 'TREE', SvgIcon: GardenTreeIcon, stage: 'normal', accent: '#003A7B' },
    { id: 'cooking-fork', label: 'Fork', shortLabel: 'FORK', SvgIcon: CookingForkIcon, stage: 'hard', accent: '#003A7B' },
    { id: 'cooking-spoon', label: 'Spoon', shortLabel: 'SPOON', SvgIcon: CookingSpoonIcon, stage: 'hard', accent: '#003A7B' },
    { id: 'cooking-bowl', label: 'Bowl', shortLabel: 'BOWL', SvgIcon: CookingBowlIcon, stage: 'hard', accent: '#003A7B' },
    { id: 'cooking-cloche', label: 'Cloche', shortLabel: 'CLOCH', SvgIcon: CookingClocheIcon, stage: 'hard', accent: '#003A7B' },
    { id: 'cooking-cup', label: 'Cup', shortLabel: 'CUP', SvgIcon: CookingCupIcon, stage: 'hard', accent: '#003A7B' },
    { id: 'cooking-chef', label: 'Chef Hat', shortLabel: 'CHEF', SvgIcon: CookingChefIcon, stage: 'hard', accent: '#003A7B' },
    { id: 'cooking-pan', label: 'Pan', shortLabel: 'PAN', SvgIcon: CookingPanIcon, stage: 'hard', accent: '#003A7B' },
    { id: 'cooking-pot', label: 'Pot', shortLabel: 'POT', SvgIcon: CookingPotIcon, stage: 'hard', accent: '#003A7B' },
  ],
  palette: {
    background: '#F8FAFB',
    panel: '#FFFFFF',
    panelAlt: '#F2F4F5',
    primary: '#0F52BA',
    secondary: '#476554',
    text: '#424654',
    mutedText: '#64748B',
    success: '#C6E8D2',
    danger: '#FFDAD6',
    shadow: 'rgba(25, 28, 29, 0.08)',
  },
  gridColumns: 4,
  gridCellCount: 16,
  targetRange: {
    min: 2,
    max: 4,
  },
  requiredMatchesRange: {
    min: 2,
    max: 3,
  },
  mistakeLimit: 3,
  comboWindowMs: 2600,
  roundTimeRange: {
    min: 20,
    max: 30,
  },
};
