import FontAwesome from '@expo/vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Animated, Easing, Modal, Pressable, Text, View } from 'react-native';

import { GardenIcon } from '@/game/components/GardenIcon';
import { OrderMemoryTheme } from '@/order-memory/types';

type HowToPlayModalProps = {
  onPlayNow: () => void;
  theme: OrderMemoryTheme;
  visible: boolean;
};

export function HowToPlayModal({ onPlayNow, theme, visible }: HowToPlayModalProps) {
  const demoItems = useMemo(() => theme.items.slice(0, 4), [theme.items]);
  const sequenceItems = useMemo(() => demoItems.slice(0, 3), [demoItems]);
  const [demoMode, setDemoMode] = useState<'watch' | 'tap'>('watch');
  const [activeSequenceIndex, setActiveSequenceIndex] = useState(0);
  const handTranslateX = useRef(new Animated.Value(0)).current;
  const handTranslateY = useRef(new Animated.Value(0)).current;
  const handScale = useRef(new Animated.Value(1)).current;
  const iconOpacity = useRef(new Animated.Value(1)).current;
  const iconSlideProgress = useRef(new Animated.Value(0)).current;
  const demoWidth = 246;
  const buttonGap = 12;
  const buttonRowGap = 10;
  const buttonWidth = (demoWidth - buttonGap) / 2;
  const buttonHeight = 40;
  const handSize = 22;
  const iconSlideDistance = 330;
  const iconSlideDuration = 2200;
  const sequenceStepDuration = 2500;

  const getButtonPosition = (itemIndex: number) => {
    const column = itemIndex % 2;
    const row = Math.floor(itemIndex / 2);

    return {
      x: column * (buttonWidth + buttonGap) + buttonWidth * 0.84,
      y: row * (buttonHeight + buttonRowGap) + buttonHeight * 0.54,
    };
  };

  useEffect(() => {
    if (!visible || sequenceItems.length === 0) {
      return undefined;
    }

    let isMounted = true;
    const timers: ReturnType<typeof setTimeout>[] = [];

    const animateIconReveal = () => {
      iconSlideProgress.setValue(0);
      iconOpacity.setValue(0);
      Animated.parallel([
        Animated.timing(iconSlideProgress, {
          toValue: 1,
          duration: iconSlideDuration,
          easing: Easing.inOut(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.timing(iconOpacity, {
          toValue: 1,
          duration: 240,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }),
      ]).start();
    };

    const animateTap = (sequenceIndex: number, onComplete: () => void) => {
      const item = sequenceItems[sequenceIndex];
      const buttonIndex = demoItems.findIndex((demoItem) => demoItem.id === item.id);
      const position = getButtonPosition(Math.max(buttonIndex, 0));

      setDemoMode('tap');
      setActiveSequenceIndex(sequenceIndex);

      Animated.sequence([
        Animated.parallel([
          Animated.timing(handTranslateX, {
            toValue: position.x,
            duration: 560,
            easing: Easing.out(Easing.quad),
            useNativeDriver: true,
          }),
          Animated.timing(handTranslateY, {
            toValue: position.y,
            duration: 560,
            easing: Easing.out(Easing.quad),
            useNativeDriver: true,
          }),
        ]),
        Animated.timing(handScale, {
          toValue: 0.82,
          duration: 120,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(handScale, {
          toValue: 1,
          duration: 140,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }),
      ]).start(onComplete);
    };

    const runDemo = () => {
      if (!isMounted) {
        return;
      }

      setDemoMode('watch');
      sequenceItems.forEach((_, index) => {
        timers.push(
          setTimeout(() => {
            if (!isMounted) {
              return;
            }

            setActiveSequenceIndex(index);
            animateIconReveal();
          }, index * sequenceStepDuration)
        );
      });

      timers.push(
        setTimeout(() => {
          let tapIndex = 0;

          const tapNext = () => {
            if (!isMounted) {
              return;
            }

            if (tapIndex >= sequenceItems.length) {
              timers.push(setTimeout(runDemo, 850));
              return;
            }

            animateTap(tapIndex, () => {
              tapIndex += 1;
              timers.push(setTimeout(tapNext, 360));
            });
          };

          tapNext();
        }, sequenceItems.length * sequenceStepDuration + 240)
      );
    };

    const firstPosition = getButtonPosition(0);
    handTranslateX.setValue(firstPosition.x);
    handTranslateY.setValue(firstPosition.y);
    handScale.setValue(1);
    runDemo();

    return () => {
      isMounted = false;
      timers.forEach((timerId) => clearTimeout(timerId));
      handTranslateX.stopAnimation();
      handTranslateY.stopAnimation();
      handScale.stopAnimation();
      iconOpacity.stopAnimation();
      iconSlideProgress.stopAnimation();
    };
  }, [demoItems, handScale, handTranslateX, handTranslateY, iconOpacity, iconSlideProgress, sequenceItems, visible]);

  const iconTranslateX = iconSlideProgress.interpolate({
    inputRange: [0, 1],
    outputRange: [-iconSlideDistance / 2, iconSlideDistance / 2],
  });
  const movingIconOpacity = iconSlideProgress.interpolate({
    inputRange: [0, 0.12, 0.88, 1],
    outputRange: [0, 1, 1, 0],
  });

  return (
    <Modal animationType="fade" transparent visible={visible}>
      <View className="flex-1 items-center justify-center bg-[rgba(8,15,37,0.5)] px-6">
        <View
          className="w-full max-w-[360px] rounded-[32px] border px-7 py-5"
          style={{
            backgroundColor: theme.palette.panel,
            borderColor: 'rgba(255,255,255,0.6)',
            shadowColor: '#191C1D',
            shadowOpacity: 0.18,
            shadowRadius: 32,
            shadowOffset: { width: 0, height: 22 },
            elevation: 16,
          }}>
          <View className="mb-2 self-center rounded-full px-4 py-2" style={{ backgroundColor: 'rgba(15, 82, 186, 0.1)' }}>
            <Text className="text-[12px] font-bold uppercase tracking-[1.2px]" style={{ color: theme.palette.primary }}>
              Quick Guide
            </Text>
          </View>
          <Text className="text-[34px] font-black leading-[40px] text-[#0040A1] py-4">How To Play</Text>
          <Text className="py-2 text-[18px] font-semibold leading-[26px]" style={{ color: theme.palette.secondary }}>
            {theme.gameName}
          </Text>

          <Text className="py-2 text-[18px] leading-[30px]" style={{ color: theme.palette.text }}>
            Watch each symbol appear one by one. When the full sequence ends, tap the same symbols back in
            the exact order.
          </Text>

          <View className="mt-7 items-center rounded-[28px] px-4 py-4" style={{ backgroundColor: theme.palette.panelAlt }}>
            <View
              className="w-full items-center justify-center rounded-[24px] border bg-white px-4 py-4"
              style={{ borderColor: 'rgba(195,198,214,0.28)' }}>
              <View className="h-14 w-full items-center justify-center overflow-hidden">
                {demoMode === 'watch' ? (
                  <Animated.View
                    className="h-14 w-14 items-center justify-center rounded-[18px] bg-[#F2F4F5]"
                    style={{
                      opacity: movingIconOpacity,
                      transform: [{ translateX: iconTranslateX }],
                    }}>
                    {sequenceItems[activeSequenceIndex] ? (
                      <GardenIcon icon={sequenceItems[activeSequenceIndex]} size={32} />
                    ) : null}
                  </Animated.View>
                ) : (
                  <View className="h-14 w-14 items-center justify-center rounded-[18px] bg-[#F2F4F5]">
                    <Text className="text-[20px] font-bold" style={{ color: theme.palette.secondary }}>
                      ?
                    </Text>
                  </View>
                )}
              </View>

              <Text className="mt-3 text-center text-[15px] font-medium leading-5 text-[#191C1D]">
                {demoMode === 'watch' ? 'Remember this sequence' : 'Tap the sequence in order'}
              </Text>

              <View className="mt-3 flex-row gap-2">
                {sequenceItems.map((item, index) => (
                  <View
                    key={item.id}
                    className="h-[8px] w-[8px] rounded-full"
                    style={{
                      backgroundColor: index <= activeSequenceIndex ? theme.palette.secondary : '#E1E3E4',
                    }}
                  />
                ))}
              </View>
            </View>

            <View className="mt-4" style={{ width: demoWidth }}>
              <View className="flex-row flex-wrap justify-between" style={{ rowGap: buttonRowGap }}>
                {demoItems.map((item) => {
                  const activeItem = sequenceItems[activeSequenceIndex];
                  const isActiveTap = demoMode === 'tap' && activeItem?.id === item.id;

                  return (
                    <View
                      key={item.id}
                      className="items-center justify-center rounded-[16px] border bg-white px-2"
                      style={{
                        width: buttonWidth,
                        height: buttonHeight,
                        borderColor: isActiveTap ? theme.palette.primary : 'rgba(195,198,214,0.34)',
                        borderWidth: isActiveTap ? 2 : 1,
                      }}>
                      <Text className="text-center text-[13px] font-semibold" style={{ color: theme.palette.text }}>
                        {item.label}
                      </Text>
                    </View>
                  );
                })}
              </View>

              {demoMode === 'tap' ? (
                <Animated.View
                  pointerEvents="none"
                  style={{
                    position: 'absolute',
                    left: -handSize / 2,
                    top: -handSize / 2,
                    transform: [
                      { translateX: handTranslateX },
                      { translateY: handTranslateY },
                      { scale: handScale },
                    ],
                  }}>
                  <View
                    className="items-center justify-center rounded-full bg-white"
                    style={{
                      height: handSize + 12,
                      width: handSize + 12,
                      shadowColor: '#0F172A',
                      shadowOpacity: 0.18,
                      shadowRadius: 8,
                      shadowOffset: { width: 0, height: 4 },
                      elevation: 6,
                    }}>
                    <FontAwesome color={theme.palette.primary} name="hand-o-up" size={handSize} />
                  </View>
                </Animated.View>
              ) : null}
            </View>

            <Text className="mt-4 text-center text-[14px] font-medium leading-5" style={{ color: theme.palette.text }}>
              Watch the sequence, then tap the names back in the same order.
            </Text>
          </View>

          <Pressable accessibilityRole="button" className="mt-8 overflow-hidden rounded-[22px]" onPress={onPlayNow}>
            <LinearGradient
              className="min-h-[58px] items-center justify-center"
              colors={['#0040A1', '#0056D2']}
              end={{ x: 1, y: 0.5 }}
              start={{ x: 0, y: 0.5 }}>
              <Text className="text-[20px] font-extrabold text-white">Play Now</Text>
            </LinearGradient>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
