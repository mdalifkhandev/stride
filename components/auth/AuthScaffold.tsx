import type { PropsWithChildren, ReactNode } from "react";

import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";

import { AppScreen } from "../ui/AppScreen";
import { colors, spacing, textStyles } from "../../theme/theme";

type AuthScaffoldProps = PropsWithChildren<{
  topSlot?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  contentAlignment?: "center" | "top";
}>;

export function AuthScaffold({
  topSlot,
  header,
  children,
  footer,
  contentAlignment = "center",
}: AuthScaffoldProps) {
  return (
    <AppScreen>
      <View style={styles.topSlot}>{topSlot}</View>
      <View style={styles.header}>{header}</View>
      <View style={[styles.content, contentAlignment === "top" && styles.contentTop]}>
        {children}
      </View>
      <View style={styles.footer}>{footer}</View>
    </AppScreen>
  );
}

export function AuthBackButton() {
  const router = useRouter();

  return (
    <Pressable hitSlop={10} onPress={() => router.back()} style={styles.backButton}>
      <Ionicons name="chevron-back" size={22} color={colors.text.primary} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  topSlot: {
    minHeight: 28,
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    gap: spacing[8],
    marginTop: spacing[8],
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  contentTop: {
    justifyContent: "flex-start",
    paddingTop: spacing[40],
  },
  footer: {
    gap: spacing[16],
    paddingBottom: spacing[8],
  },
  backButton: {
    alignSelf: "flex-start",
    paddingVertical: spacing[4],
    paddingRight: spacing[8],
  },
});
