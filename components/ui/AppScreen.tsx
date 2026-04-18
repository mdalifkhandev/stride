import type { PropsWithChildren } from "react";

import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { colors, spacing } from "../../theme/theme";

type AppScreenProps = PropsWithChildren<{
  padded?: boolean;
}>;

export function AppScreen({ children, padded = true }: AppScreenProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, padded && styles.padded]}>{children}</View>
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
  },
  padded: {
    paddingHorizontal: spacing[24],
    paddingTop: spacing[48],
    paddingBottom: spacing[24],
  },
});
