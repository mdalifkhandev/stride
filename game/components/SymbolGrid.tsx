import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useEffect, useRef } from 'react';
import { Animated, Pressable, useWindowDimensions, View } from 'react-native';

import { GardenIcon } from '@/game/components/GardenIcon';
import { GridCell, ThemeConfig } from '@/game/types';

type SymbolGridProps = {
  cells: GridCell[];
  columns: number;
  onCellPress: (cellId: string) => void;
  theme: ThemeConfig;
};

type SymbolTileProps = {
  cell: GridCell;
  iconSize: number;
  onCellPress: (cellId: string) => void;
  theme: ThemeConfig;
  tileSize: number;
};

function SymbolTile({ cell, iconSize, onCellPress, theme, tileSize }: SymbolTileProps) {
  const icon = theme.icons.find((item) => item.id === cell.iconId);
  const isHit = cell.status === 'hit';
  const isMiss = cell.status === 'miss';
  const iconColor = isHit ? theme.palette.primary : isMiss ? '#BA1A1A' : '#B8C0D4';
  const scale = useRef(new Animated.Value(1)).current;
  const shake = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (cell.status === 'hit') {
      Animated.sequence([
        Animated.spring(scale, { toValue: 1.08, useNativeDriver: true, speed: 18, bounciness: 10 }),
        Animated.spring(scale, { toValue: 1, useNativeDriver: true, speed: 16, bounciness: 8 }),
      ]).start();
    }

    if (cell.status === 'miss') {
      Animated.sequence([
        Animated.timing(shake, { toValue: 8, duration: 45, useNativeDriver: true }),
        Animated.timing(shake, { toValue: -8, duration: 45, useNativeDriver: true }),
        Animated.timing(shake, { toValue: 6, duration: 40, useNativeDriver: true }),
        Animated.timing(shake, { toValue: -4, duration: 35, useNativeDriver: true }),
        Animated.timing(shake, { toValue: 0, duration: 35, useNativeDriver: true }),
      ]).start();
    }
  }, [cell.status, scale, shake]);

  return (
    <Animated.View style={{ transform: [{ scale }, { translateX: shake }] }}>
      <Pressable
        accessibilityLabel={`Symbol ${icon?.label ?? cell.iconId}`}
        accessibilityRole="button"
        key={cell.id}
        onPress={() => onCellPress(cell.id)}
        style={({ pressed }) => ({
          opacity: pressed ? 0.88 : 1,
          transform: [{ scale: pressed ? 0.98 : 1 }],
        })}>
        <View
          className="items-center justify-center rounded-xl bg-white p-4"
          style={{
            width: tileSize,
            height: tileSize,
            backgroundColor: isMiss ? theme.palette.danger : '#FFFFFF',
            borderColor: isHit
              ? theme.palette.primary
              : isMiss
                ? '#BA1A1A'
                : 'rgba(195, 198, 214, 0.2)',
            borderWidth: isHit || isMiss ? 2 : 1.5,
            shadowColor: '#000000',
            shadowOpacity: 0.05,
            shadowRadius: 3,
            shadowOffset: { width: 0, height: 1 },
            elevation: 2,
          }}>
          {icon ? <GardenIcon color={iconColor} icon={icon} size={iconSize} /> : null}
          {isHit ? (
            <View
              className="absolute items-center justify-center rounded-full"
              style={{
                top: -10,
                right: -10,
                width: 24,
                height: 24,
                backgroundColor: theme.palette.primary,
              }}>
              <MaterialCommunityIcons color="#FFFFFF" name="check" size={15} />
            </View>
          ) : null}
        </View>
      </Pressable>
    </Animated.View>
  );
}

export function SymbolGrid({ cells, columns, onCellPress, theme }: SymbolGridProps) {
  const { width: screenWidth } = useWindowDimensions();
  const horizontalPadding = 48;
  const gap = 16;
  const gridWidth = Math.max(screenWidth - horizontalPadding, 0);
  const tileSize = Math.max(Math.floor((gridWidth - gap * (columns - 1)) / columns), 56);
  const iconSize = Math.floor(tileSize * (columns === 5 ? 0.42 : 0.48));
  const rows = Array.from({ length: Math.ceil(cells.length / columns) }, (_, index) =>
    cells.slice(index * columns, index * columns + columns)
  );

  return (
    <View className="gap-y-4">
      {rows.map((row, rowIndex) => (
        <View key={`row-${rowIndex}`} className="flex-row justify-between">
          {row.map((cell) => {
            return (
              <SymbolTile
                cell={cell}
                iconSize={iconSize}
                key={cell.id}
                onCellPress={onCellPress}
                theme={theme}
                tileSize={tileSize}
              />
            );
          })}
        </View>
      ))}
    </View>
  );
}
