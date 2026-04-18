import { Pressable, StyleSheet, Text, View } from "react-native";

import { colors, radius, spacing, textStyles } from "../../theme/theme";

type UnitToggleProps<T extends string> = {
  options: readonly T[];
  value: T;
  onChange: (value: T) => void;
};

export function UnitToggle<T extends string>({
  options,
  value,
  onChange,
}: UnitToggleProps<T>) {
  return (
    <View style={styles.container}>
      {options.map((option) => {
        const selected = option === value;
        return (
          <Pressable
            key={option}
            onPress={() => onChange(option)}
            style={[styles.item, selected && styles.itemSelected]}>
            <Text style={[styles.label, selected && styles.labelSelected]}>{option}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "center",
    backgroundColor: colors.surface.primary,
    borderRadius: radius.lg,
    padding: spacing[4],
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  item: {
    minWidth: 62,
    paddingVertical: spacing[8],
    paddingHorizontal: spacing[12],
    borderRadius: radius.md,
    alignItems: "center",
  },
  itemSelected: {
    backgroundColor: colors.surface.action,
  },
  label: {
    ...textStyles.titleSmall,
    color: colors.text.secondary,
  },
  labelSelected: {
    color: colors.text.onAction,
  },
});
