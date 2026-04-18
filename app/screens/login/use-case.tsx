import { useState } from "react";

import { StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";

import { AuthChoiceCard } from "../../../components/auth/AuthChoiceCard";
import { AuthLogoHeader } from "../../../components/auth/AuthLogoHeader";
import { AuthBackButton, AuthScaffold } from "../../../components/auth/AuthScaffold";
import { AppButton } from "../../../components/ui/AppButton";
import { colors, spacing, textStyles } from "../../../theme/theme";

type Choice = "myself" | "caregiver" | "organization" | null;

export default function AuthUseCaseScreen() {
  const router = useRouter();
  const [choice, setChoice] = useState<Choice>(null);

  return (
    <AuthScaffold
      topSlot={<AuthBackButton />}
      contentAlignment="top"
      header={
        <AuthLogoHeader
          compact
          title="How will you use Stride?"
          subtitle="Choose the option that best describes you."
        />
      }
      footer={
        <View style={styles.footer}>
          {choice === null ? <Text style={styles.error}>Please choose an option to continue</Text> : null}
          <AppButton
            label="Continue"
            disabled={choice === null}
            onPress={() => router.replace("/")}
          />
          <Text style={styles.caption}>
            Already have an account? <Text style={styles.link}>Sign in</Text>
          </Text>
        </View>
      }>
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
    </AuthScaffold>
  );
}

const styles = StyleSheet.create({
  stack: {
    gap: spacing[12],
    marginTop: spacing[24],
  },
  footer: {
    gap: spacing[12],
  },
  error: {
    ...textStyles.captionLarge,
    color: "#e46a5a",
    textAlign: "center",
  },
  caption: {
    ...textStyles.captionLarge,
    color: colors.text.secondary,
    textAlign: "center",
  },
  link: {
    color: colors.text.action,
    textDecorationLine: "underline",
  },
});
