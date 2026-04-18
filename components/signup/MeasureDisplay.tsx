import { StyleSheet, Text, View } from "react-native";

import { colors, radius, spacing, textStyles } from "../../theme/theme";

type MeasureDisplayProps = {
  left: string;
  right: string;
  selected?: boolean;
};

export function MeasureDisplay({
  left,
  right,
  selected = false,
}: MeasureDisplayProps) {
  return (
    <View style={[styles.card, selected && styles.cardSelected]}>
      <Text style={[styles.value, selected && styles.valueSelected]}>{left}</Text>
      <Text style={styles.divider}>|</Text>
      <Text style={[styles.value, selected && styles.valueSelected]}>{right}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    minWidth: 136,
    paddingVertical: spacing[8],
    paddingHorizontal: spacing[16],
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: radius.md,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: spacing[4],
    backgroundColor: "transparent",
  },
  cardSelected: {
    borderColor: colors.border.action,
    backgroundColor: colors.surface.primary,
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
