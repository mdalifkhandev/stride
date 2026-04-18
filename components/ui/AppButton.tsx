import type { ReactNode } from "react";

import { Pressable, Text } from "react-native";

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
        {
          minHeight: 58,
          borderRadius: radius.lg,
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: spacing[16],
          paddingHorizontal: spacing[24],
          flexDirection: "row",
          gap: spacing[8],
        },
        isPrimary
          ? { backgroundColor: colors.surface.action }
          : {
              backgroundColor: colors.surface.primary,
              borderWidth: 1,
              borderColor: colors.border.action,
            },
        fullRadius && { borderRadius: 999 },
        disabled &&
          (isPrimary
            ? { backgroundColor: "#d9d9d9" }
            : { borderColor: "#d9d9d9", backgroundColor: "#f4f4f4" }),
      ]}>
      {leftSlot}
      <Text
        style={[
          textStyles.titleT2,
          isPrimary ? { color: colors.text.onAction } : { color: colors.text.action },
          disabled && { color: "#9d9d9d" },
        ]}>
        {label}
      </Text>
      {rightSlot}
    </Pressable>
  );
}
