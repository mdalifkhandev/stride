import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Pressable, Text, View } from 'react-native';

import { TIME_ACCURACY_THEME } from '@/time-accuracy/config';

type GameChromeProps = {
  onBack: () => void;
  title?: string;
};

export function TopBar({ onBack, title = 'Time Accuracy Check' }: GameChromeProps) {
  return (
    <View
      className="flex-row items-center px-6 pt-3 pb-4 "
      style={{ backgroundColor: 'rgba(248,250,251,0.92)' }}>
      <Pressable
        accessibilityLabel="Go back"
        accessibilityRole="button"
        className="h-8 w-8 items-center justify-center rounded-full"
        onPress={onBack}>
        <MaterialCommunityIcons color={TIME_ACCURACY_THEME.primary} name="arrow-left" size={22} />
      </Pressable>
      <Text className="ml-4 text-[20px] font-bold tracking-[-0.5px]" style={{ color: TIME_ACCURACY_THEME.blue }}>
        {title}
      </Text>
    </View>
  );
}
