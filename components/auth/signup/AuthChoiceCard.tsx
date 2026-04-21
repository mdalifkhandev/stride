import { Pressable, Text, View } from "react-native";

import { colors, spacing, textStyles } from "../../../trast/theme";

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
      style={{
        flexDirection: "row",
        gap: spacing[8],
        alignItems: "flex-start",
        backgroundColor: selected ? colors.surface.actionLight : colors.surface.primary,
        borderWidth: 1,
        borderColor: selected ? colors.border.action : colors.border.tertiary,
        borderRadius: 16,
        padding: 16,
        minHeight: hasDescription ? 108 : 74,
      }}
    >
      <View style={{ paddingTop: 3 }}>
        <View
          style={{
            width: 24,
            height: 24,
            borderRadius: 999,
            borderWidth: 1.5,
            borderColor: selected ? colors.border.action : colors.border.secondary,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: selected ? colors.surface.primary : colors.surface.page,
          }}
        >
          {selected ? (
            <View
              style={{
                width: 15,
                height: 15,
                borderRadius: 999,
                backgroundColor: colors.surface.action,
                borderWidth: 3,
                borderColor: colors.surface.primary,
              }}
            />
          ) : null}
        </View>
      </View>
      <View style={{ flex: 1, gap: spacing[2] }}>
        <Text
          style={[
            textStyles.labelLarge,
            { fontSize: 20, lineHeight: 30, fontWeight: "700" },
          ]}
        >
          {title}
        </Text>
        {hasDescription ? (
          <Text
            style={[
              textStyles.captionXL,
              { fontSize: 18, lineHeight: 24, color: colors.text.secondary },
            ]}
          >
            {description}
          </Text>
        ) : null}
      </View>
    </Pressable>
  );
}
