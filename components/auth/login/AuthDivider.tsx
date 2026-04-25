import { Text, View } from "react-native";

import { colors, spacing, textStyles } from "../../../theme";

export function AuthDivider({ label = "OR" }: { label?: string }) {
  return (
    <View
      style={{ flexDirection: "row", alignItems: "center", gap: spacing[12] }}
    >
      <View style={{ flex: 1, height: 1, backgroundColor: "#dcdcdc" }} />
      <Text style={[textStyles.captionLarge, { color: colors.text.secondary }]}>
        {label}
      </Text>
      <View style={{ flex: 1, height: 1, backgroundColor: "#dcdcdc" }} />
    </View>
  );
}
