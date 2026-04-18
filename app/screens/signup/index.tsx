import { useState } from "react";

import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { AuthChoiceCard } from "../../../components/auth/AuthChoiceCard";
import { AuthLogoHeader } from "../../../components/auth/AuthLogoHeader";
import { AppButton } from "../../../components/ui/AppButton";
import { AppScreen } from "../../../components/ui/AppScreen";
import { colors, spacing, textStyles } from "../../../theme/theme";

type Choice = "myself" | "caregiver" | "organization" | null;

export default function SignupIndex() {
  const router = useRouter();
  const [choice, setChoice] = useState<Choice>("myself");

  return (
    <AppScreen>
      <View style={styles.headerWrap}>
        <AuthLogoHeader
          title="How will you use Stride?"
          subtitle="Choose the option that best describes you."
        />
      </View>

      <View style={styles.content}>
        <View style={styles.stack}>
          <AuthChoiceCard
            title="For Myself"
            description="Improve my daily physical and mental activity."
            selected={choice === "myself"}
            onPress={() => setChoice("myself")}
          />
          <AuthChoiceCard
            title="As a Caregiver"
            description="Support a client or loved one on their wellness journey."
            selected={choice === "caregiver"}
            onPress={() => setChoice("caregiver")}
          />
          <AuthChoiceCard
            title="For My Organization"
            description="Set up Stride for a business or care provider."
            selected={choice === "organization"}
            onPress={() => setChoice("organization")}
          />
        </View>
      </View>

      <View style={styles.footer}>
        <AppButton
          label="Continue"
          onPress={() => router.push("/screens/signup/profile")}
        />
        <View style={styles.captionRow}>
          <Text style={styles.caption}>Already have an account? </Text>
          <Pressable onPress={() => router.push("/screens/login")}>
            <Text style={styles.link}>Sign In</Text>
          </Pressable>
        </View>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  headerWrap: {
    paddingTop: 28,
  },
  content: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 36,
  },
  stack: {
    gap: spacing[12],
  },
  footer: {
    gap: spacing[16],
    paddingBottom: spacing[8],
    marginTop: spacing[20],
  },
  caption: {
    ...textStyles.captionLarge,
    color: colors.text.secondary,
  },
  captionRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    ...textStyles.captionLarge,
    color: colors.text.action,
    textDecorationLine: "underline",
  },
});
