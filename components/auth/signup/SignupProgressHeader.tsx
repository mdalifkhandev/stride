import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

import { colors, radius, spacing, textStyles } from "../../../trast/theme";

type SignupProgressHeaderProps = {
  progress: number;
};

export function SignupProgressHeader({ progress }: SignupProgressHeaderProps) {
  const router = useRouter();

  return (
    <View
      style={{ flexDirection: "row", alignItems: "center", gap: spacing[12] }}
    >
      <Pressable
        hitSlop={10}
        onPress={() => router.back()}
        style={{ paddingVertical: spacing[4], paddingRight: spacing[4] }}
      >
        <Ionicons name="chevron-back" size={22} color={colors.text.primary} />
      </Pressable>

      <View
        style={{
          flex: 1,
          height: 14,
          borderRadius: radius.full,
          backgroundColor: "#dcecff",
          overflow: "hidden",
        }}
      >
        <View
          style={{
            height: "100%",
            borderRadius: radius.full,
            backgroundColor: colors.surface.action,
            width: `${progress}%`,
          }}
        />
      </View>

      <Text
        style={[
          textStyles.titleT2,
          { color: colors.text.action, fontWeight: "700" },
        ]}
      >
        {progress}%
      </Text>
    </View>
  );
}
