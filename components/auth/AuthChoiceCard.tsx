import { Pressable, StyleSheet, Text, View } from "react-native";

import { colors, radius, spacing, textStyles } from "../../theme/theme";

type AuthChoiceCardProps = {
  title: string;
  description?: string;
  selected?: boolean;
  onPress?: () => void;
};

export function AuthChoiceCard({
  title,
  description,
  selected = false,
  onPress,
}: AuthChoiceCardProps) {
  const hasDescription = Boolean(description && description.trim().length > 0);

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.card,
        !hasDescription && styles.cardCompact,
        selected && styles.cardSelected,
      ]}
    >
      <View style={[styles.radio, selected && styles.radioSelected]}>
        {selected ? <View style={styles.radioDot} /> : null}
      </View>
      <View style={styles.copy}>
        <Text style={styles.title}>{title}</Text>
        {hasDescription ? (
          <Text style={styles.description}>{description}</Text>
        ) : null}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    gap: spacing[12],
    alignItems: "flex-start",
    borderWidth: 1,
    borderColor: "#dddddd",
    borderRadius: radius.md,
    backgroundColor: colors.surface.primary,
    paddingHorizontal: spacing[12],
    paddingVertical: spacing[12],
  },
  cardCompact: {
    alignItems: "center",
    minHeight: 74,
  },
  cardSelected: {
    borderColor: colors.border.action,
    backgroundColor: "#dcebff",
  },
  radio: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1.5,
    borderColor: "#9d9d9d",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
  },
  radioSelected: {
    borderColor: colors.border.action,
  },
  radioDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.text.action,
  },
  copy: {
    flex: 1,
    gap: spacing[4],
  },
  title: {
    ...textStyles.titleT2,
    color: colors.text.primary,
    fontWeight: "700",
    fontSize: 18,
    lineHeight: 28,
  },
  description: {
    ...textStyles.bodyLarge,
    color: colors.text.secondary,
    fontSize: 16,
    lineHeight: 26,
  },
});
