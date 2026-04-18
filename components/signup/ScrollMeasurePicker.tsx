import { useEffect, useMemo, useRef } from "react";

import { ScrollView, StyleSheet, Text, View } from "react-native";

import { colors, radius, spacing, textStyles } from "../../theme/theme";

type PickerValue = {
  left: string;
  right: string;
};

type ScrollMeasurePickerProps = {
  values: readonly PickerValue[];
  selectedIndex: number;
  onChange: (index: number) => void;
};

const ITEM_HEIGHT = 56;
const VISIBLE_ROWS = 3;
const CONTAINER_HEIGHT = ITEM_HEIGHT * VISIBLE_ROWS;

export function ScrollMeasurePicker({
  values,
  selectedIndex,
  onChange,
}: ScrollMeasurePickerProps) {
  const scrollRef = useRef<ScrollView>(null);
  const spacerHeight = useMemo(
    () => (CONTAINER_HEIGHT - ITEM_HEIGHT) / 2,
    [],
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      scrollRef.current?.scrollTo({
        y: selectedIndex * ITEM_HEIGHT,
        animated: false,
      });
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [selectedIndex]);

  const handleMomentumEnd = (offsetY: number) => {
    const nextIndex = Math.max(
      0,
      Math.min(values.length - 1, Math.round(offsetY / ITEM_HEIGHT)),
    );

    if (nextIndex !== selectedIndex) {
      onChange(nextIndex);
    } else {
      scrollRef.current?.scrollTo({
        y: nextIndex * ITEM_HEIGHT,
        animated: true,
      });
    }
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.selectionBox} />

      <ScrollView
        ref={scrollRef}
        style={styles.scroll}
        contentContainerStyle={[
          styles.content,
          { paddingTop: spacerHeight, paddingBottom: spacerHeight },
        ]}
        showsVerticalScrollIndicator={false}
        snapToInterval={ITEM_HEIGHT}
        decelerationRate="fast"
        bounces={false}
        onMomentumScrollEnd={(event) =>
          handleMomentumEnd(event.nativeEvent.contentOffset.y)
        }>
        {values.map((item, index) => {
          const selected = index === selectedIndex;

          return (
            <View key={`${item.left}-${item.right}-${index}`} style={styles.item}>
              <Text style={[styles.value, selected && styles.valueSelected]}>
                {item.left}
              </Text>
              <Text style={styles.divider}>|</Text>
              <Text style={[styles.value, selected && styles.valueSelected]}>
                {item.right}
              </Text>
            </View>
          );
        })}
      </ScrollView>
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
  scroll: {
    flex: 1,
  },
  content: {
    alignItems: "center",
  },
  item: {
    height: ITEM_HEIGHT,
    width: 160,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing[4],
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
  },
});
