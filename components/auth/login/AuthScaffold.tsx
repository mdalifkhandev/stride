import {
  useEffect,
  useState,
  type PropsWithChildren,
  type ReactNode,
} from "react";

import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Keyboard, Pressable, ScrollView, View } from "react-native";

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
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setIsKeyboardOpen(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setIsKeyboardOpen(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <AppScreen>
      <ScrollView
        bounces={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flex: 1 }}>
          <View style={{ minHeight: 20, justifyContent: "center" }}>
            {topSlot}
          </View>
          <View
            style={{
              alignItems: "center",
              gap: spacing[8],
              marginTop: spacing[4],
            }}
          >
            {header}
          </View>
          <View
            style={[
              { flex: 1, justifyContent: "center" },
              contentAlignment === "top" && {
                justifyContent: "flex-start",
                paddingTop: spacing[32],
              },
            ]}
          >
            {children}
          </View>
          <View
            style={{
              gap: spacing[16],
              paddingBottom: isKeyboardOpen ? spacing[0] : spacing[8],
              marginTop: spacing[20],
            }}
          >
            {footer}
          </View>
        </View>
      </ScrollView>
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
