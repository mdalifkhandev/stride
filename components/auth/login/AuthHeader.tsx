import { Text, View } from "react-native";

import { colors, spacing, textStyles } from "../../../theme";

type AuthHeaderProps = {
  title: string;
  subtitle: string;
};

export function AuthHeader({ title, subtitle }: AuthHeaderProps) {
  return (
    <View style={{ alignItems: "center", gap: spacing[4] }}>
      <Text
        style={[
          textStyles.h2,
          { color: colors.text.action, fontWeight: "700", textAlign: "center" },
        ]}
      >
        {title}
      </Text>
      <Text
        style={[
          textStyles.bodyLarge,
          { color: colors.text.secondary, textAlign: "center" },
        ]}
      >
        {subtitle}
      </Text>
    </View>
  );
}
