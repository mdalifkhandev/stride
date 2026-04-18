import { Pressable, StyleSheet, Text, View } from "react-native";

import Logo from "@/assets/images/logo.svg";
import { colors, radius, spacing, textStyles } from "@/theme/theme";
import { SafeAreaView } from "react-native-safe-area-context";

const LOGO_WIDTH = 190;
const LOGO_HEIGHT = 120;

export default function AuthIndex() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome to Stride</Text>
          <Text style={styles.subtitle}>
            Stay ahead of decline with Stride!
          </Text>
        </View>

        <View style={styles.brandBlock}>
          <Logo width={LOGO_WIDTH} height={LOGO_HEIGHT} />
          <Text style={styles.wordmark}>Stride</Text>
        </View>

        <View style={styles.footer}>
          <Pressable style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Sign in</Text>
          </Pressable>

          <Pressable style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Create account</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.surface.primary,
  },
  container: {
    flex: 1,
    backgroundColor: colors.surface.primary,
    paddingHorizontal: spacing[24],
    paddingTop: spacing[48],
    paddingBottom: spacing[24],
  },
  header: {
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
  brandBlock: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: spacing[16],
  },
  logo: {
    width: LOGO_WIDTH,
    height: LOGO_HEIGHT,
  },
  wordmark: {
    fontSize: 64,
    lineHeight: 70,
    fontWeight: "800",
    color: colors.text.action,
    letterSpacing: -1,
  },
  footer: {
    gap: spacing[24],
    paddingBottom: spacing[8],
  },
  primaryButton: {
    backgroundColor: colors.surface.action,
    borderRadius: radius.lg,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: spacing[16],
  },
  primaryButtonText: {
    ...textStyles.titleT2,
    color: colors.text.onAction,
  },
  secondaryButton: {
    backgroundColor: colors.surface.primary,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border.action,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: spacing[16],
  },
  secondaryButtonText: {
    ...textStyles.titleT2,
    color: colors.text.action,
  },
});
