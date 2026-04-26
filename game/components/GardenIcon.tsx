import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { View } from 'react-native';

import { ThemeIcon } from '@/game/types';

type GardenIconProps = {
  color?: string;
  icon: ThemeIcon;
  size?: number;
};

export function GardenIcon({ color, icon, size = 28 }: GardenIconProps) {
  if (icon.SvgIcon) {
    const SvgIcon = icon.SvgIcon;

    return (
      <View style={{ height: size, width: size }}>
        <SvgIcon height={size} width={size} />
      </View>
    );
  }

  if (!icon.iconName) {
    return null;
  }

  return <MaterialCommunityIcons color={color ?? icon.accent} name={icon.iconName as never} size={size} />;
}
