import { BrandMark } from "@/components/auth/BrandMark";
import { AppButton } from "@/components/ui/AppButton";
import { AppScreen } from "@/components/ui/AppScreen";
import { colors, spacing, textStyles } from "@/theme/theme";
import { Href, router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const loginRoute = "/screens/login" as Href;
const signupRoute = "/screens/signup" as Href;

export default function AuthIndex() {
  return (
    <AppScreen>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to Stride</Text>
        <Text style={styles.subtitle}>Stay ahead of decline with Stride!</Text>
      </View>

      <BrandMark />

      <View style={styles.footer}>
        <AppButton label="Sign in" onPress={() => router.push(loginRoute)} />
        <AppButton
          label="Create account"
          variant="secondary"
          onPress={() => router.push(signupRoute)}
        />
      </View>
    </AppScreen>
  );
}
const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    gap: spacing[4],
    paddingTop: spacing[16],
  },
  title: {
    ...textStyles.h2,
    color: colors.text.action,
    fontWeight: "700",
    textAlign: "center",
  },
  subtitle: {
    ...textStyles.bodySmall,
    color: colors.text.secondary,
    textAlign: "center",
  },
  footer: {
    gap: spacing[16],
    paddingBottom: spacing[8],
  },
});
