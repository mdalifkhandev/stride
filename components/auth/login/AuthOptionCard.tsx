import type { ReactNode } from "react";

import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

import { colors, radius, spacing, textStyles } from "../../../theme/theme";

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
    <Pressable
      onPress={onPress}
      style={[
        {
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
        selected && { backgroundColor: colors.surface.actionLight, borderColor: colors.border.action },
      ]}>
      <View style={{ flex: 1, gap: spacing[8] }}>
        <Text
          style={[
            textStyles.titleSmall,
            { color: colors.text.primary, fontWeight: "700" },
            selected && { color: colors.text.action },
          ]}>
          {title}
        </Text>
        <Text
          style={[
            textStyles.bodySmall,
            { color: colors.text.secondary, lineHeight: 20 },
            selected && { color: colors.text.primary },
          ]}>
          {description}
        </Text>
      </View>
      <View style={{ paddingLeft: spacing[12] }}>
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
