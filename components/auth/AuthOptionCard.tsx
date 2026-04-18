import type { ReactNode } from "react";

import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { colors, radius, spacing, textStyles } from "../../theme/theme";

type AuthOptionCardProps = {
  title: string;
  description: string;
  onPress?: () => void;
  rightSlot?: ReactNode;
  selected?: boolean;
};

export function AuthOptionCard({
  title,
  description,
  onPress,
  rightSlot,
  selected = false,
}: AuthOptionCardProps) {
  return (
    <Pressable onPress={onPress} style={[styles.card, selected && styles.cardSelected]}>
      <View style={styles.copy}>
        <Text style={[styles.title, selected && styles.titleSelected]}>{title}</Text>
        <Text style={[styles.description, selected && styles.descriptionSelected]}>{description}</Text>
      </View>
      <View style={styles.right}>
        {rightSlot ?? (
          <Ionicons
            name="chevron-forward"
            size={18}
            color={selected ? colors.text.action : colors.text.primary}
          />
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface.primary,
    borderRadius: radius.md,
    paddingHorizontal: spacing[16],
    paddingVertical: spacing[12],
    borderWidth: 1,
    borderColor: "#efefef",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 1,
  },
  cardSelected: {
    backgroundColor: colors.surface.actionLight,
    borderColor: colors.border.action,
  },
  copy: {
    flex: 1,
    gap: spacing[8],
  },
  title: {
    ...textStyles.titleSmall,
    color: colors.text.primary,
    fontWeight: "700",
  },
  titleSelected: {
    color: colors.text.action,
  },
  description: {
    ...textStyles.bodySmall,
    color: colors.text.secondary,
    lineHeight: 20,
  },
  descriptionSelected: {
    color: colors.text.primary,
  },
  right: {
    paddingLeft: spacing[12],
  },
});
