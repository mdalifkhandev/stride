import type { ReactNode } from "react";

import { Pressable, Text } from "react-native";


import { colors, radius, spacing, typography } from "../../theme";

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
          minHeight: 52,
          borderRadius: fullRadius ? radius.lg : radius.button,
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: spacing[12],
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
        disabled &&
          (isPrimary
            ? { backgroundColor: colors.surface.disabled }
            : {
                borderColor: colors.border.onDisabled,
                backgroundColor: colors.surface.disabledLight,
              }),
      ]}
    >
      {leftSlot}
      <Text
        style={[
          typography.button.large,
          isPrimary
            ? { color: colors.text.onAction }
            : { color: colors.text.action },
          disabled && { color: colors.text.onDisabled },
        ]}
      >
        {label}
      </Text>
      {rightSlot}
    </Pressable>
  );
}
