import FontAwesome from '@expo/vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Animated, Easing, Modal, Pressable, Text, useWindowDimensions, View } from 'react-native';

import { GardenIcon } from '@/game/components/GardenIcon';
import { ThemeConfig } from '@/game/types';


type HowToPlayModalProps = {
  onPlayNow: () => void;
  theme: ThemeConfig;
  visible: boolean;
};
export function HowToPlayModal({ onPlayNow, theme, visible }: HowToPlayModalProps) {
  const { width: screenWidth } = useWindowDimensions();
  const handTranslateX = useRef(new Animated.Value(0)).current;
  const handTranslateY = useRef(new Animated.Value(0)).current;
  const handScale = useRef(new Animated.Value(1)).current;
  const [activeMatchIndex, setActiveMatchIndex] = useState(0);
  const playableIcons = useMemo(
    () => theme.icons.filter((icon) => icon.stage !== 'hard').slice(0, 8),
    [theme.icons]
  );
  const targetIcons = useMemo(
    () => [playableIcons[1], playableIcons[4]].filter((icon) => Boolean(icon)),
    [playableIcons]
  );
  const demoGrid = useMemo(
    () =>
      [
        playableIcons[0],
        playableIcons[1],
        playableIcons[2],
        playableIcons[4],
        playableIcons[4],
        playableIcons[2],
        playableIcons[5],
        playableIcons[4],
        playableIcons[6],
        playableIcons[1],
        playableIcons[4],
        playableIcons[7],
        playableIcons[3],
        playableIcons[1],
        playableIcons[6],
        playableIcons[5],
      ].filter((icon) => Boolean(icon)),
    [playableIcons]
  );
  const previewGridRows = useMemo(
    () => Array.from({ length: 4 }, (_, index) => demoGrid.slice(index * 4, index * 4 + 4)),
    [demoGrid]
  );
  const modalWidth = Math.min(Math.max(screenWidth - 44, 0), 360);
  const previewCardInnerWidth = modalWidth - 56 - 32;
  const previewGap = 12;
  const previewTileSize = Math.floor((previewCardInnerWidth - previewGap * 3) / 4);
  const handSize = 24;
  const matchingCellIndexes = useMemo(
    () =>
      demoGrid
        .map((icon, index) => (targetIcons.some((targetIcon) => targetIcon?.id === icon.id) ? index : -1))
        .filter((index) => index >= 0),
    [demoGrid, targetIcons]
  );
  const getHandPosition = (cellIndex: number) => {
    const column = cellIndex % 4;
    const row = Math.floor(cellIndex / 4);

    return {
      x: column * (previewTileSize + previewGap) + previewTileSize * 0.62,
      y: row * (previewTileSize + previewGap) + previewTileSize * 0.58,
    };
  };

  useEffect(() => {
    if (!visible || matchingCellIndexes.length === 0) {
      return undefined;
    }

    let isMounted = true;
    let currentIndex = 0;
    const timers: ReturnType<typeof setTimeout>[] = [];

    const animateToNextMatch = () => {
      if (!isMounted) {
        return;
      }

      const cellIndex = matchingCellIndexes[currentIndex % matchingCellIndexes.length];
      const nextPosition = getHandPosition(cellIndex);
      setActiveMatchIndex(cellIndex);

      Animated.sequence([
        Animated.parallel([
          Animated.timing(handTranslateX, {
            toValue: nextPosition.x,
            duration: 900,
            easing: Easing.out(Easing.quad),
            useNativeDriver: true,
          }),
          Animated.timing(handTranslateY, {
            toValue: nextPosition.y,
            duration: 900,
            easing: Easing.out(Easing.quad),
            useNativeDriver: true,
          }),
        ]),
        Animated.timing(handScale, {
          toValue: 0.82,
          duration: 160,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(handScale, {
          toValue: 1,
          duration: 190,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }),
      ]).start(() => {
        currentIndex += 1;
        timers.push(setTimeout(animateToNextMatch, 700));
      });
    };

    const firstPosition = getHandPosition(matchingCellIndexes[0]);
    handTranslateX.setValue(firstPosition.x);
    handTranslateY.setValue(firstPosition.y);
    handScale.setValue(1);
    setActiveMatchIndex(matchingCellIndexes[0]);
    timers.push(setTimeout(animateToNextMatch, 450));

    return () => {
      isMounted = false;
      timers.forEach((timerId) => clearTimeout(timerId));
      handTranslateX.stopAnimation();
      handTranslateY.stopAnimation();
      handScale.stopAnimation();
    };
  }, [handScale, handTranslateX, handTranslateY, matchingCellIndexes, previewGap, previewTileSize, visible]);

  return (
    <Modal animationType="fade" transparent visible={visible}>
      <View className="flex-1 items-center justify-center bg-[rgba(8,15,37,0.52)] px-[22px] py-7">
        <View
          className="w-full max-w-[360px] gap-[18px] rounded-[36px] border px-7 py-[34px]"
          style={{
            backgroundColor: theme.palette.panel,
            borderColor: 'rgba(255,255,255,0.58)',
            shadowColor: '#191C1D',
            shadowOpacity: 0.2,
            shadowRadius: 36,
            shadowOffset: { width: 0, height: 22 },
            elevation: 18,
          }}>
          {/* <View className="self-center rounded-full px-4 py-2" style={{ backgroundColor: 'rgba(15, 82, 186, 0.1)' }}>
            <Text className="text-[12px] font-bold uppercase tracking-[1.2px]" style={{ color: theme.palette.primary }}>
              Quick Guide
            </Text>
          </View> */}

          <View className="gap-[6px]">
            <Text className="text-[36px] font-black leading-[44px] text-[#0040A1]">How To Play</Text>
            {/* <Text className="text-[18px] font-semibold leading-[26px]" style={{ color: theme.palette.secondary }}>
              {theme.gameName}
            </Text> */}
          </View>

          <View className="gap-7">
            <Text className="text-[18px] font-normal leading-[30px]" style={{ color: theme.palette.text }}>
              Several symbols will appear at the top. Tap all matching symbols in the grid as quickly as
              possible.
            </Text>

            <View className="items-center gap-[18px] rounded-[32px] px-4 py-[22px]" style={{ backgroundColor: theme.palette.panelAlt }}>
              <View className="items-center gap-[10px]">
                <Text className="self-start text-[13px] font-bold" style={{ color: theme.palette.text }}>
                  Find these symbols
                </Text>
                <View className="flex-row gap-[14px]">
                  {targetIcons.map((icon) => (
                    <View key={icon!.id} className="h-[52px] w-[52px] items-center justify-center rounded-[18px] bg-[#E1E3E4]">
                      <GardenIcon icon={icon!} size={26} />
                    </View>
                  ))}
                </View>
              </View>

              <View className="w-full gap-y-3" style={{ position: 'relative' }}>
                {previewGridRows.map((row, rowIndex) => (
                  <View key={`preview-row-${rowIndex}`} className="flex-row justify-between">
                    {row.map((icon, iconIndex) => {
                      const index = rowIndex * 4 + iconIndex;
                      const isMatch = targetIcons.some((targetIcon) => targetIcon?.id === icon.id);
                      const isActiveMatch = activeMatchIndex === index;

                      return (
                        <View
                          key={`${icon.id}-${index}`}
                          className="items-center justify-center rounded-[18px]"
                          style={{
                            width: previewTileSize,
                            height: previewTileSize,
                            backgroundColor: isActiveMatch ? '#F3F7FF' : '#FFFFFF',
                            borderWidth: isActiveMatch ? 2 : isMatch ? 1.5 : 0,
                            borderColor: isActiveMatch ? theme.palette.primary : 'rgba(15, 82, 186, 0.28)',
                          }}>
                          <GardenIcon icon={icon} size={22} />
                        </View>
                      );
                    })}
                  </View>
                ))}
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
              </View>
            </View>
          </View>

          <Pressable
            accessibilityRole="button"
            className="overflow-hidden rounded-[24px]"
            onPress={onPlayNow}
            style={({ pressed }) => ({
              opacity: pressed ? 0.92 : 1,
            })}>
            <LinearGradient
              className="min-h-[60px] items-center justify-center"
              colors={['#0040A1', '#0056D2']}
              end={{ x: 1, y: 0.5 }}
              start={{ x: 0, y: 0.5 }}>
              <Text className="text-[20px] font-extrabold text-white">Play Now</Text>
            </LinearGradient>
          </Pressable>

          {/* <Pressable
            accessibilityRole="checkbox"
            className="flex-row items-center justify-center gap-[14px] pt-[6px]"
            onPress={() => setSkipHint((value) => !value)}>
            <View
              className="h-7 w-7 rounded-[9px] border bg-[#E1E3E4]"
              style={
                skipHint
                  ? { backgroundColor: '#DCE8FF', borderColor: '#A8C0F4' }
                  : { borderColor: '#C0C6D6' }
              }
            />
            <Text className="text-[16px] font-semibold leading-6" style={{ color: theme.palette.text }}>
              Don&apos;t show this again
            </Text>
          </Pressable> */}
        </View>
      </View>
    </Modal>
  );
}
