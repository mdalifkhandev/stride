import { Pressable, Text, View } from "react-native";

import { textSize } from "@/theme/tokens/premetive/text";
import { Typography } from "@/theme/tokens/semantic/thypography";
import { colors, radius, spacing } from "../../../trast/theme";

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
      style={[
        {
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
        !hasDescription && { alignItems: "center", minHeight: 74 },
        selected && {
          borderColor: colors.border.action,
          backgroundColor: "#dcebff",
        },
      ]}
    >
      <View
        style={[
          {
            width: 18,
            height: 18,
            borderRadius: 9,
            borderWidth: 1.5,
            borderColor: "#9d9d9d",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 2,
          },
          selected && { borderColor: colors.border.action },
        ]}
      >
        {selected ? (
          <View
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: colors.text.action,
            }}
          />
        ) : null}
      </View>
      <View style={{ flex: 1, gap: spacing[4] }}>
        <Text style={[Typography.labelLarge]}>{title}</Text>
        {hasDescription ? (
          <Text
            style={[
              {
                color: colors.text.secondary,
                fontSize: textSize[18],
              },
            ]}
          >
            {description}
          </Text>
        ) : null}
      </View>
    </Pressable>
  );
}
