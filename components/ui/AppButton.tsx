import type { ReactNode } from "react";

import { Pressable, StyleSheet, Text } from "react-native";

import { colors, radius, spacing, textStyles } from "../../theme/theme";

type AppButtonProps = {
  label: string;
  variant?: "primary" | "secondary";
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
  onPress?: () => void;
  fullRadius?: boolean;
  disabled?: boolean;
};

export function AppButton({
  label,
  variant = "primary",
  leftSlot,
  rightSlot,
  onPress,
  fullRadius = false,
  disabled = false,
}: AppButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.base,
        isPrimary ? styles.primary : styles.secondary,
        fullRadius && styles.fullRadius,
        disabled && (isPrimary ? styles.primaryDisabled : styles.secondaryDisabled),
      ]}>
      {leftSlot}
      <Text
        style={[
          styles.label,
          isPrimary ? styles.primaryLabel : styles.secondaryLabel,
          disabled && styles.disabledLabel,
        ]}>
        {label}
      </Text>
      {rightSlot}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    minHeight: 58,
    borderRadius: radius.lg,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: spacing[16],
    paddingHorizontal: spacing[24],
    flexDirection: "row",
    gap: spacing[8],
  },
  primary: {
    backgroundColor: colors.surface.action,
  },
  primaryDisabled: {
    backgroundColor: "#d9d9d9",
  },
  fullRadius: {
    borderRadius: 999,
  },
  secondary: {
    backgroundColor: colors.surface.primary,
    borderWidth: 1,
    borderColor: colors.border.action,
  },
  secondaryDisabled: {
    borderColor: "#d9d9d9",
    backgroundColor: "#f4f4f4",
  },
  label: {
    ...textStyles.titleT2,
  },
  primaryLabel: {
    color: colors.text.onAction,
  },
  secondaryLabel: {
    color: colors.text.action,
  },
  disabledLabel: {
    color: "#9d9d9d",
  },
});
