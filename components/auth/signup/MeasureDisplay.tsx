import { Text, View } from "react-native";

import { colors, radius, spacing, textStyles, typography } from "../../../theme";

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
    <View
      style={[
        {
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
        selected && {
          borderColor: colors.border.action,
          backgroundColor: colors.surface.primary,
        },
      ]}
    >
      <Text
        style={[
          textStyles.titleT2,
          { color: colors.text.secondary, fontWeight: "700" },
          selected && {
            color: colors.text.action,
            ...typography.headline.h3,
          },
        ]}
      >
        {left}
      </Text>
      <Text style={[textStyles.bodyLarge, { color: "#bcbcbc" }]}>|</Text>
      <Text
        style={[
          textStyles.titleT2,
          { color: colors.text.secondary, fontWeight: "700" },
          selected && {
            color: colors.text.action,
            ...typography.headline.h3,
          },
        ]}
      >
        {right}
      </Text>
    </View>
  );
}

