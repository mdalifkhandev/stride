import type { PropsWithChildren, ReactNode } from "react";

import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, View } from "react-native";

import { colors, spacing } from "../../../trast/theme";
import { AppScreen } from "../../ui/AppScreen";

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
      <View style={{ minHeight: 28, justifyContent: "center" }}>{topSlot}</View>
      <View
        style={{ alignItems: "center", gap: spacing[8], marginTop: spacing[8] }}
      >
        {header}
      </View>
      <View
        style={[
          { flex: 1, justifyContent: "center" },
          contentAlignment === "top" && {
            justifyContent: "flex-start",
            paddingTop: spacing[40],
          },
        ]}
      >
        {children}
      </View>
      <View style={{ gap: spacing[16], paddingBottom: spacing[8] }}>
        {footer}
      </View>
    </AppScreen>
  );
}

export function AuthBackButton() {
  const router = useRouter();

  return (
    <Pressable
      hitSlop={10}
      onPress={() => router.back()}
      style={{
        alignSelf: "flex-start",
        paddingVertical: spacing[4],
        paddingRight: spacing[8],
      }}
    >
      <Ionicons name="chevron-back" size={22} color={colors.text.primary} />
    </Pressable>
  );
}
