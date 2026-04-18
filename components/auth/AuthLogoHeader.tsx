import { StyleSheet, Text, View } from "react-native";

import Logo from "../../assets/images/logo.svg";
import { colors, spacing, textStyles } from "../../theme/theme";

const LOGO_WIDTH = 84;
const LOGO_HEIGHT = 38;

type AuthLogoHeaderProps = {
  title?: string;
  subtitle?: string;
  compact?: boolean;
};

export function AuthLogoHeader({
  title,
  subtitle,
  compact = false,
}: AuthLogoHeaderProps) {
  return (
    <View style={[styles.container, compact && styles.compactContainer]}>
      <Logo width={LOGO_WIDTH} height={LOGO_HEIGHT} />
      <Text style={styles.wordmark}>Stride</Text>
      {title ? <Text style={styles.title}>{title}</Text> : null}
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: spacing[8],
  },
  compactContainer: {
    gap: spacing[4],
  },
  wordmark: {
    ...textStyles.h2,
    color: colors.text.action,
    fontWeight: "700",
  },
  title: {
    ...textStyles.titleT2,
    color: colors.text.primary,
    fontWeight: "700",
    marginTop: spacing[24],
  },
  subtitle: {
    ...textStyles.bodySmall,
    color: colors.text.secondary,
    textAlign: "center",
    maxWidth: 245,
  },
});
