import { Animated, Easing, Text, useWindowDimensions, View } from 'react-native';
import { useEffect, useRef } from 'react';

import { GardenIcon } from '@/game/components/GardenIcon';
import { OrderMemoryItem, OrderMemoryTheme } from '@/order-memory/types';

type MemorySequenceDisplayProps = {
  compact?: boolean;
  currentItem: OrderMemoryItem | null;
  currentStep: number;
  message: string;
  sequenceLength: number;
  theme: OrderMemoryTheme;
};

export function MemorySequenceDisplay({
  compact = false,
  currentItem,
  currentStep,
  message,
  sequenceLength,
  theme,
}: MemorySequenceDisplayProps) {
  const { width } = useWindowDimensions();
  const slideProgress = useRef(new Animated.Value(0)).current;
  const shellPadding = compact ? 'px-5 py-5' : 'px-8 py-6';
  const iconBox = compact ? 44 : 52;
  const iconSize = compact ? 40 : 48;
  const placeholderRadius = compact ? 16 : 18;
  const messageClass = compact ? 'mt-3 text-[15px] leading-5' : 'mt-4 text-[17px] leading-6';
  const dotsGap = compact ? 'gap-2' : 'gap-3';
  const dotsMargin = compact ? 'mt-3' : 'mt-4';
  const slideDistance = Math.min(Math.max(width - 72, 240), compact ? 340 : 380);

  useEffect(() => {
    if (!currentItem) {
      slideProgress.setValue(0);
      return;
    }

    slideProgress.setValue(0);
    Animated.timing(slideProgress, {
      toValue: 1,
      duration: 2200,
      easing: Easing.inOut(Easing.cubic),
      useNativeDriver: true,
    }).start();
  }, [currentItem, currentStep, slideProgress]);

  const iconTranslateX = slideProgress.interpolate({
    inputRange: [0, 1],
    outputRange: [-slideDistance / 2, slideDistance / 2],
  });
  const iconOpacity = slideProgress.interpolate({
    inputRange: [0, 0.12, 0.88, 1],
    outputRange: [0, 1, 1, 0],
  });

  return (
    <View
      className={`items-center rounded-[32px] border-2 ${shellPadding}`}
      style={{
        backgroundColor: theme.palette.panel,
        borderColor: 'rgba(195,198,214,0.2)',
        shadowColor: '#000000',
        shadowOpacity: 0.05,
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 1 },
        elevation: 2,
      }}>
      <View className="items-center justify-center overflow-hidden" style={{ width: '100%', height: iconBox }}>
        {currentItem ? (
          <Animated.View style={{ opacity: iconOpacity, transform: [{ translateX: iconTranslateX }] }}>
            <GardenIcon color={theme.palette.secondary} icon={currentItem} size={iconSize} />
          </Animated.View>
        ) : (
          <View
            className="items-center justify-center"
            style={{ width: iconBox, height: iconBox, borderRadius: placeholderRadius, backgroundColor: theme.palette.panelAlt }}>
            <Text className={`${compact ? 'text-[18px]' : 'text-[20px]'} font-bold`} style={{ color: theme.palette.secondary }}>
              ?
            </Text>
          </View>
        )}
      </View>

      <Text className={`${messageClass} text-center font-medium text-[#191C1D]`}>{message}</Text>

      <View className={`${dotsMargin} flex-row ${dotsGap}`}>
        {Array.from({ length: sequenceLength }).map((_, index) => {
          const isActive = index === Math.min(currentStep, Math.max(sequenceLength - 1, 0));
          const isCompleted = index < currentStep;

          return (
            <View
              key={`sequence-dot-${index}`}
              className={`${compact ? 'h-[10px] w-[10px]' : 'h-3 w-3'} rounded-full`}
              style={{
                backgroundColor: isCompleted || isActive ? theme.palette.secondary : '#E1E3E4',
              }}
            />
          );
        })}
      </View>
    </View>
  );
}
