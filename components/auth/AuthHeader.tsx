import { StyleSheet, Text, View } from "react-native";

import { colors, spacing, textStyles } from "../../theme/theme";

type AuthHeaderProps = {
  title: string;
  subtitle: string;
};

export function AuthHeader({ title, subtitle }: AuthHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: spacing[4],
  },
  title: {
    ...textStyles.h2,
    color: colors.text.action,
    fontWeight: "700",
    textAlign: "center",
  },
  subtitle: {
    ...textStyles.bodyLarge,
    color: colors.text.secondary,
    textAlign: "center",
  },
});
