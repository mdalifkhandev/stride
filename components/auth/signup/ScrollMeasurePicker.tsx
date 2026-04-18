import { useEffect, useMemo, useRef } from "react";

import { ScrollView, Text, View } from "react-native";

import { colors, radius, textStyles } from "../../../theme/theme";

type LegacyScrollMeasurePickerProps = {
  leftValues: readonly string[];
  rightValues: readonly string[];
  selectedLeftIndex: number;
  selectedRightIndex: number;
  onChangeLeft: (index: number) => void;
  onChangeRight: (index: number) => void;
  columns?: never;
  selectedIndices?: never;
  onChangeIndex?: never;
  separatorAfterColumn?: never;
};

type MultiColumnScrollMeasurePickerProps = {
  columns: ReadonlyArray<readonly string[]>;
  selectedIndices: readonly number[];
  onChangeIndex: (columnIndex: number, itemIndex: number) => void;
  separatorAfterColumn?: number;
  leftValues?: never;
  rightValues?: never;
  selectedLeftIndex?: never;
  selectedRightIndex?: never;
  onChangeLeft?: never;
  onChangeRight?: never;
};

type ScrollMeasurePickerProps =
  | LegacyScrollMeasurePickerProps
  | MultiColumnScrollMeasurePickerProps;

const ITEM_HEIGHT = 56;
const VISIBLE_ROWS = 3;
const CONTAINER_HEIGHT = ITEM_HEIGHT * VISIBLE_ROWS;

export function ScrollMeasurePicker(props: ScrollMeasurePickerProps) {
  const spacerHeight = useMemo(() => (CONTAINER_HEIGHT - ITEM_HEIGHT) / 2, []);

  const isMultiColumn = "columns" in props;
  const multiProps = props as MultiColumnScrollMeasurePickerProps;
  const legacyProps = props as LegacyScrollMeasurePickerProps;

  const columns: ReadonlyArray<readonly string[]> = isMultiColumn
    ? multiProps.columns
    : [legacyProps.leftValues, legacyProps.rightValues];

  const selectedIndices: readonly number[] = isMultiColumn
    ? multiProps.selectedIndices
    : [legacyProps.selectedLeftIndex, legacyProps.selectedRightIndex];

  const separatorAfterColumn: number =
    isMultiColumn && typeof multiProps.separatorAfterColumn === "number"
      ? multiProps.separatorAfterColumn
      : 0;

  const scrollRefs = useRef<Array<ScrollView | null>>([]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      selectedIndices.forEach((selectedIndex, columnIndex) => {
        scrollRefs.current[columnIndex]?.scrollTo({
          y: selectedIndex * ITEM_HEIGHT,
          animated: false,
        });
      });
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [selectedIndices]);

  const getNextIndex = (offsetY: number, length: number) => {
    return Math.max(0, Math.min(length - 1, Math.round(offsetY / ITEM_HEIGHT)));
  };

  const handleMomentumEnd = (columnIndex: number, offsetY: number) => {
    const nextIndex = getNextIndex(offsetY, columns[columnIndex].length);
    const selectedIndex = selectedIndices[columnIndex];

    if (nextIndex !== selectedIndex) {
      if (isMultiColumn) {
        multiProps.onChangeIndex(columnIndex, nextIndex);
      } else {
        if (columnIndex === 0) {
          legacyProps.onChangeLeft(nextIndex);
        } else {
          legacyProps.onChangeRight(nextIndex);
        }
      }
      return;
    }

    scrollRefs.current[columnIndex]?.scrollTo({
      y: nextIndex * ITEM_HEIGHT,
      animated: true,
    });
  };

  const renderColumn = (values: readonly string[], columnIndex: number) => {
    const selectedIndex = selectedIndices[columnIndex];

    return (
      <ScrollView
        key={`column-${columnIndex}`}
        ref={(ref) => {
          scrollRefs.current[columnIndex] = ref;
        }}
        style={{ flex: 1 }}
        contentContainerStyle={{
          alignItems: "center",
          paddingTop: spacerHeight,
          paddingBottom: spacerHeight,
        }}
        showsVerticalScrollIndicator={false}
        snapToInterval={ITEM_HEIGHT}
        decelerationRate="fast"
        bounces={false}
        onMomentumScrollEnd={(event) =>
          handleMomentumEnd(columnIndex, event.nativeEvent.contentOffset.y)
        }>
        {values.map((value, index) => {
          const selected = index === selectedIndex;

          return (
            <View
              key={`${columnIndex}-${value}-${index}`}
              style={{
                height: ITEM_HEIGHT,
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1,
              }}>
              <Text
                style={[
                  textStyles.titleT2,
                  { color: colors.text.secondary, fontWeight: "700" },
                  selected && {
                    color: colors.text.action,
                    fontSize: 20,
                    lineHeight: 28,
                  },
                ]}>
                {value}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    );
  };

  return (
    <View
      style={{
        width: 160,
        height: CONTAINER_HEIGHT,
        alignSelf: "center",
        position: "relative",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
      }}>
      <View
        style={{
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
        }}
      />

      {columns.map((values, columnIndex) => (
        <View
          key={`column-wrap-${columnIndex}`}
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
          }}>
          {renderColumn(values, columnIndex)}
          {columnIndex === separatorAfterColumn && columnIndex < columns.length - 1 ? (
            <Text
              style={[
                textStyles.bodyLarge,
                { color: "#bcbcbc", width: 12, textAlign: "center" },
              ]}>
              |
            </Text>
          ) : null}
        </View>
      ))}
    </View>
  );
}
