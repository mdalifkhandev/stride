import { useState } from "react";

import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";

import GoogleIcon from "../../../assets/images/google.svg";
import { AuthDivider } from "../../../components/auth/AuthDivider";
import { AuthLogoHeader } from "../../../components/auth/AuthLogoHeader";
import { AuthOptionCard } from "../../../components/auth/AuthOptionCard";
import { AuthScaffold } from "../../../components/auth/AuthScaffold";
import { AppButton } from "../../../components/ui/AppButton";
import { colors, spacing, textStyles } from "../../../theme/theme";

export default function LoginIndex() {
  const router = useRouter();
  const [method, setMethod] = useState<"email" | "phone">("email");

  const handleNext = () => {
    router.push(method === "email" ? "/screens/login/email" : "/screens/login/phone");
  };

  return (
    <AuthScaffold contentAlignment="top" header={<AuthLogoHeader compact />}>
      <View style={styles.stack}>
        <Text style={styles.heading}>Welcome Back!</Text>
        <Text style={styles.lead}>
          Keep doing what you love with 1-minute Strides built just for you!
        </Text>

        <View style={styles.options}>
          <AuthOptionCard
            title="Sign In with Email"
            description="We'll send a verification code to your email address."
            onPress={() => setMethod("email")}
            selected={method === "email"}
            rightSlot={
              <Ionicons
                name="chevron-forward"
                size={18}
                color={method === "email" ? colors.text.action : colors.text.primary}
              />
            }
          />
          <AuthOptionCard
            title="Sign In with Phone Number"
            description="We'll send an SMS with a verification code to your phone."
            onPress={() => setMethod("phone")}
            selected={method === "phone"}
            rightSlot={
              <Ionicons
                name="chevron-forward"
                size={18}
                color={method === "phone" ? colors.text.action : colors.text.primary}
              />
            }
          />
        </View>
      </View>

      <View style={styles.footer}>
        <AppButton label="Next" onPress={handleNext} />
        <AuthDivider />
        <AppButton
          label="Continue with Google"
          variant="secondary"
          leftSlot={<GoogleIcon width={20} height={20} />}
        />
        <Text style={styles.caption}>
          Already have an account? <Text style={styles.link}>Sign UP</Text>
        </Text>
      </View>
    </AuthScaffold>
  );
}

const styles = StyleSheet.create({
  stack: {
    gap: spacing[16],
  },
  heading: {
    ...textStyles.titleT2,
    color: colors.text.primary,
    textAlign: "center",
    fontWeight: "700",
  },
  lead: {
    ...textStyles.bodySmall,
    color: colors.text.secondary,
    textAlign: "center",
    maxWidth: 260,
    alignSelf: "center",
  },
  options: {
    gap: spacing[12],
    marginTop: spacing[8],
  },
  footer: {
    gap: spacing[16],
    paddingBottom: spacing[8],
    marginTop: spacing[12],
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
