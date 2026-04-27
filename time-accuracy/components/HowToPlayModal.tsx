import FontAwesome from '@expo/vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useRef, useState } from 'react';
import { Animated, Easing, Modal, Pressable, Text, View } from 'react-native';

import { TIME_ACCURACY_THEME } from '@/time-accuracy/config';

type HowToPlayModalProps = {
  onPlayNow: () => void;
  visible: boolean;
};

export function HowToPlayModal({ onPlayNow, visible }: HowToPlayModalProps) {
  const leftBlueAngle = useRef(new Animated.Value(0)).current;
  const rightBlueAngle = useRef(new Animated.Value(0)).current;
  const leftHandTranslateX = useRef(new Animated.Value(0)).current;
  const leftHandTranslateY = useRef(new Animated.Value(0)).current;
  const leftHandScale = useRef(new Animated.Value(1)).current;
  const rightHandTranslateX = useRef(new Animated.Value(0)).current;
  const rightHandTranslateY = useRef(new Animated.Value(0)).current;
  const rightHandScale = useRef(new Animated.Value(1)).current;
  const [activeTargetIndex, setActiveTargetIndex] = useState(0);
  const demoWidth = 230;
  const targetSize = 82;
  const targetGap = 26;
  const handSize = 22;
  const leftBlueRotate = leftBlueAngle.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  const rightBlueRotate = rightBlueAngle.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  useEffect(() => {
    if (!visible) {
      return undefined;
    }

    let isMounted = true;
    const timers: ReturnType<typeof setTimeout>[] = [];

    const tapTarget = (targetIndex: number, onComplete?: () => void) => {
      if (!isMounted) {
        return;
      }

      const targetScale = targetIndex === 0 ? leftHandScale : rightHandScale;
      const targetTranslateX = targetIndex === 0 ? leftHandTranslateX : rightHandTranslateX;
      const targetTranslateY = targetIndex === 0 ? leftHandTranslateY : rightHandTranslateY;
      setActiveTargetIndex(targetIndex);

      Animated.sequence([
        Animated.parallel([
          Animated.timing(targetTranslateX, {
            toValue: -18,
            duration: 220,
            easing: Easing.out(Easing.quad),
            useNativeDriver: true,
          }),
          Animated.timing(targetTranslateY, {
            toValue: -18,
            duration: 220,
            easing: Easing.out(Easing.quad),
            useNativeDriver: true,
          }),
          Animated.timing(targetScale, {
            toValue: 1.12,
            duration: 220,
            easing: Easing.out(Easing.quad),
            useNativeDriver: true,
          }),
        ]),
        Animated.timing(targetScale, {
          toValue: 0.82,
          duration: 120,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(targetScale, {
          toValue: 1.08,
          duration: 140,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.parallel([
          Animated.timing(targetTranslateX, {
            toValue: 0,
            duration: 240,
            easing: Easing.out(Easing.quad),
            useNativeDriver: true,
          }),
          Animated.timing(targetTranslateY, {
            toValue: 0,
            duration: 240,
            easing: Easing.out(Easing.quad),
            useNativeDriver: true,
          }),
          Animated.timing(targetScale, {
            toValue: 1,
            duration: 240,
            easing: Easing.out(Easing.quad),
            useNativeDriver: true,
          }),
        ]),
      ]).start(onComplete);
    };

    const animateBlueDot = (
      angle: Animated.Value,
      duration: number,
      targetIndex: number,
      startOffset: number,
      delay = 0
    ) => {
      const startAnimation = () => {
        if (!isMounted) {
          return;
        }

        angle.setValue(startOffset);
        Animated.timing(angle, {
          toValue: 1,
          duration,
          easing: Easing.linear,
          useNativeDriver: true,
        }).start(() => {
          tapTarget(targetIndex, () => {
            timers.push(setTimeout(startAnimation, 520));
          });
        });
      };

      timers.push(setTimeout(startAnimation, delay));
    };

    leftHandTranslateX.setValue(0);
    leftHandTranslateY.setValue(0);
    leftHandScale.setValue(1);
    rightHandTranslateX.setValue(0);
    rightHandTranslateY.setValue(0);
    rightHandScale.setValue(1);
    leftBlueAngle.setValue(0.24);
    rightBlueAngle.setValue(0.58);
    animateBlueDot(leftBlueAngle, 1900, 0, 0.24);
    animateBlueDot(rightBlueAngle, 2450, 1, 0.58, 420);

    return () => {
      isMounted = false;
      timers.forEach((timerId) => clearTimeout(timerId));
      leftBlueAngle.stopAnimation();
      rightBlueAngle.stopAnimation();
      leftHandTranslateX.stopAnimation();
      leftHandTranslateY.stopAnimation();
      leftHandScale.stopAnimation();
      rightHandTranslateX.stopAnimation();
      rightHandTranslateY.stopAnimation();
      rightHandScale.stopAnimation();
    };
  }, [
    leftHandScale,
    leftHandTranslateX,
    leftHandTranslateY,
    leftBlueAngle,
    rightBlueAngle,
    rightHandScale,
    rightHandTranslateX,
    rightHandTranslateY,
    visible,
  ]);

  return (
    <Modal animationType="fade" transparent visible={visible}>
      <View className="flex-1 items-center justify-center bg-[rgba(8,15,37,0.5)] px-6">
        <View
          className="w-full max-w-[340px] rounded-[32px] border px-7 py-8"
          style={{
            backgroundColor: TIME_ACCURACY_THEME.panel,
            borderColor: 'rgba(255,255,255,0.6)',
            shadowColor: '#191C1D',
            shadowOpacity: 0.18,
            shadowRadius: 30,
            shadowOffset: { width: 0, height: 22 },
            elevation: 16,
          }}>
          <View className="mb-4 self-center rounded-full px-4 py-2" style={{ backgroundColor: 'rgba(15, 82, 186, 0.1)' }}>
            <Text className="text-[12px] font-bold uppercase tracking-[1.2px]" style={{ color: TIME_ACCURACY_THEME.primary }}>
              Quick Guide
            </Text>
          </View>
          <Text className="text-[34px] font-black leading-[40px]" style={{ color: TIME_ACCURACY_THEME.primary }}>
            How To Play
          </Text>
          <Text className="mt-2 text-[18px] font-semibold" style={{ color: TIME_ACCURACY_THEME.secondary }}>
            Time Accuracy Check
          </Text>

          <Text className="mt-8 text-[18px] leading-[30px]" style={{ color: TIME_ACCURACY_THEME.text }}>
            Each circle has a fixed red dot and a moving blue dot. Tap the whole grey circle when both dots
            overlap.
          </Text>

          <View
            className="mt-7 items-center rounded-[28px] px-5 py-5"
            style={{ backgroundColor: TIME_ACCURACY_THEME.panelAlt }}>
            <Text className="text-center text-[15px] font-bold leading-5" style={{ color: TIME_ACCURACY_THEME.heading }}>
              Tap when dots overlap
            </Text>

            <View className="mt-5" style={{ width: demoWidth }}>
              <View className="flex-row justify-between">
                {[0, 1].map((targetIndex) => {
                  const isActive = activeTargetIndex === targetIndex;
                  const handScale = targetIndex === 0 ? leftHandScale : rightHandScale;
                  const handTranslateX = targetIndex === 0 ? leftHandTranslateX : rightHandTranslateX;
                  const handTranslateY = targetIndex === 0 ? leftHandTranslateY : rightHandTranslateY;

                  return (
                    <View key={targetIndex} style={{ position: 'relative' }}>
                      <View
                        className="items-center justify-center rounded-full"
                        style={{
                          width: targetSize,
                          height: targetSize,
                          backgroundColor: '#ECEDEF',
                          borderColor: isActive ? TIME_ACCURACY_THEME.primary : 'transparent',
                          borderWidth: isActive ? 2 : 0,
                        }}>
                        <View
                          className="absolute rounded-full"
                          style={{
                            width: 48,
                            height: 48,
                            backgroundColor: '#5A5960',
                          }}
                        />
                        <View
                          className="absolute rounded-full border border-dashed"
                          style={{
                            width: 66,
                            height: 66,
                            borderColor: 'rgba(195,198,214,0.7)',
                          }}
                        />
                        <View
                          className="absolute rounded-full"
                          style={{
                            width: 10,
                            height: 10,
                            backgroundColor: TIME_ACCURACY_THEME.red,
                            borderColor: 'rgba(255,255,255,0.7)',
                            borderWidth: 1,
                            transform: [{ translateY: -33 }],
                            zIndex: 2,
                          }}
                        />
                        <Animated.View
                          className="absolute"
                          style={{
                            width: 66,
                            height: 66,
                            transform: [{ rotate: targetIndex === 0 ? leftBlueRotate : rightBlueRotate }],
                          }}>
                          <View
                            className="absolute rounded-full"
                            style={{
                              top: -5,
                              left: 28,
                              width: 10,
                              height: 10,
                              backgroundColor: TIME_ACCURACY_THEME.blue,
                              borderColor: 'rgba(255,255,255,0.7)',
                              borderWidth: 1,
                            }}
                          />
                        </Animated.View>
                      </View>
                      <Animated.View
                        pointerEvents="none"
                        style={{
                          position: 'absolute',
                          right: -7,
                          bottom: -8,
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
                          <FontAwesome color={TIME_ACCURACY_THEME.primary} name="hand-o-up" size={handSize} />
                        </View>
                      </Animated.View>
                    </View>
                  );
                })}
              </View>
            </View>

            <Text className="mt-5 text-center text-[14px] font-medium leading-5" style={{ color: TIME_ACCURACY_THEME.text }}>
              Watch both circles and tap the grey target right as blue meets red.
            </Text>
          </View>

          <Pressable
            accessibilityRole="button"
            className="mt-8 overflow-hidden rounded-[20px]"
            onPress={onPlayNow}>
            <LinearGradient
              className="min-h-[60px] items-center justify-center"
              colors={[TIME_ACCURACY_THEME.primary, TIME_ACCURACY_THEME.primaryAlt]}
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
