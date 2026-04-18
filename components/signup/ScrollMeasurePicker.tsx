import { useEffect, useMemo, useRef } from "react";

import { ScrollView, StyleSheet, Text, View } from "react-native";

import { colors, radius, spacing, textStyles } from "../../theme/theme";

type ScrollMeasurePickerProps = {
  leftValues: readonly string[];
  rightValues: readonly string[];
  selectedLeftIndex: number;
  selectedRightIndex: number;
  onChangeLeft: (index: number) => void;
  onChangeRight: (index: number) => void;
};

const ITEM_HEIGHT = 56;
const VISIBLE_ROWS = 3;
const CONTAINER_HEIGHT = ITEM_HEIGHT * VISIBLE_ROWS;

export function ScrollMeasurePicker({
  leftValues,
  rightValues,
  selectedLeftIndex,
  selectedRightIndex,
  onChangeLeft,
  onChangeRight,
}: ScrollMeasurePickerProps) {
  const leftScrollRef = useRef<ScrollView>(null);
  const rightScrollRef = useRef<ScrollView>(null);
  const spacerHeight = useMemo(() => (CONTAINER_HEIGHT - ITEM_HEIGHT) / 2, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      leftScrollRef.current?.scrollTo({
        y: selectedLeftIndex * ITEM_HEIGHT,
        animated: false,
      });
      rightScrollRef.current?.scrollTo({
        y: selectedRightIndex * ITEM_HEIGHT,
        animated: false,
      });
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [selectedLeftIndex, selectedRightIndex]);

  const getNextIndex = (offsetY: number, length: number) => {
    return Math.max(0, Math.min(length - 1, Math.round(offsetY / ITEM_HEIGHT)));
  };

  const handleLeftMomentumEnd = (offsetY: number) => {
    const nextIndex = getNextIndex(offsetY, leftValues.length);

    if (nextIndex !== selectedLeftIndex) {
      onChangeLeft(nextIndex);
      return;
    }

    leftScrollRef.current?.scrollTo({
      y: nextIndex * ITEM_HEIGHT,
      animated: true,
    });
  };

  const handleRightMomentumEnd = (offsetY: number) => {
    const nextIndex = getNextIndex(offsetY, rightValues.length);

    if (nextIndex !== selectedRightIndex) {
      onChangeRight(nextIndex);
      return;
    }

    rightScrollRef.current?.scrollTo({
      y: nextIndex * ITEM_HEIGHT,
      animated: true,
    });
  };

  const renderColumn = (
    values: readonly string[],
    selectedIndex: number,
    scrollRef: React.RefObject<ScrollView | null>,
    onMomentumEnd: (offsetY: number) => void,
  ) => (
    <ScrollView
      ref={scrollRef}
      style={styles.column}
      contentContainerStyle={[
        styles.content,
        { paddingTop: spacerHeight, paddingBottom: spacerHeight },
      ]}
      showsVerticalScrollIndicator={false}
      snapToInterval={ITEM_HEIGHT}
      decelerationRate="fast"
      bounces={false}
      onMomentumScrollEnd={(event) =>
        onMomentumEnd(event.nativeEvent.contentOffset.y)
      }>
      {values.map((value, index) => {
        const selected = index === selectedIndex;

        return (
          <View key={`${value}-${index}`} style={styles.item}>
            <Text style={[styles.value, selected && styles.valueSelected]}>
              {value}
            </Text>
          </View>
        );
      })}
    </ScrollView>
  );

  return (
    <View style={styles.wrapper}>
      <View style={styles.selectionBox} />

      {renderColumn(
        leftValues,
        selectedLeftIndex,
        leftScrollRef,
        handleLeftMomentumEnd,
      )}

      <Text style={styles.divider}>|</Text>

      {renderColumn(
        rightValues,
        selectedRightIndex,
        rightScrollRef,
        handleRightMomentumEnd,
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: 160,
    height: CONTAINER_HEIGHT,
    alignSelf: "center",
    position: "relative",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  selectionBox: {
    position: "absolute",
    left: 0,
    right: 0,
    top: (CONTAINER_HEIGHT - ITEM_HEIGHT) / 2,
    height: ITEM_HEIGHT,
    borderWidth: 1,
    borderColor: colors.border.action,
    borderRadius: radius.md,
    backgroundColor: "transparent",
    zIndex: 2,
    pointerEvents: "none",
  },
  column: {
    flex: 1,
  },
  content: {
    alignItems: "center",
  },
  item: {
    height: ITEM_HEIGHT,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  value: {
    ...textStyles.titleT2,
    color: colors.text.secondary,
    fontWeight: "700",
  },
  valueSelected: {
    color: colors.text.action,
    fontSize: 20,
    lineHeight: 28,
  },
  divider: {
    ...textStyles.bodyLarge,
    color: "#bcbcbc",
    width: 12,
    textAlign: "center",
  },
});
