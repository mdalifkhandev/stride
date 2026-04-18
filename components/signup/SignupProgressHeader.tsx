import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { colors, radius, spacing, textStyles } from "../../theme/theme";

type SignupProgressHeaderProps = {
  progress: number;
};

export function SignupProgressHeader({ progress }: SignupProgressHeaderProps) {
  const router = useRouter();

  return (
    <View style={styles.row}>
      <Pressable hitSlop={10} onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="chevron-back" size={22} color={colors.text.primary} />
      </Pressable>

      <View style={styles.track}>
        <View style={[styles.fill, { width: `${progress}%` }]} />
      </View>

      <Text style={styles.label}>{progress}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing[12],
  },
  backButton: {
    paddingVertical: spacing[4],
    paddingRight: spacing[4],
  },
  track: {
    flex: 1,
    height: 14,
    borderRadius: radius.full,
    backgroundColor: "#dcecff",
    overflow: "hidden",
  },
  fill: {
    height: "100%",
    borderRadius: radius.full,
    backgroundColor: colors.surface.action,
  },
  label: {
    ...textStyles.titleT2,
    color: colors.text.action,
    fontWeight: "700",
  },
});
