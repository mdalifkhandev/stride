import { useState } from "react";

import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { useRouter } from "expo-router";

import GoogleIcon from "../../../../assets/images/google.svg";
import { AuthDivider } from "../../../../components/auth/login/AuthDivider";
import { AuthLogoHeader } from "../../../../components/auth/login/AuthLogoHeader";
import { AuthOptionCard } from "../../../../components/auth/login/AuthOptionCard";
import { AuthScaffold } from "../../../../components/auth/login/AuthScaffold";
import { AppButton } from "../../../../components/ui/AppButton";
import { colors, spacing, textStyles } from "../../../../theme/theme";

export default function LoginIndex() {
  const router = useRouter();
  const [method, setMethod] = useState<"email" | "phone">("email");

  const handleNext = () => {
    router.push(method === "email" ? "/screens/auth/login/email" : "/screens/auth/login/phone");
  };

  return (
    <AuthScaffold contentAlignment="top" header={<AuthLogoHeader compact />}>
      <View style={{ gap: spacing[16] }}>
        <Text style={textStyles.titleT2}>
          Welcome Back!
        </Text>
        <Text style={textStyles.bodySmall}>
          Keep doing what you love with 1-minute Strides built just for you!
        </Text>

        <View style={{ gap: spacing[12], marginTop: spacing[8] }}>
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

      <View style={{ gap: spacing[16], paddingBottom: spacing[8], marginTop: spacing[12] }}>
        <AppButton label="Next" onPress={handleNext} />
        <AuthDivider />
        <AppButton
          label="Continue with Google"
          variant="secondary"
          leftSlot={<GoogleIcon width={20} height={20} />}
        />
        <Text style={textStyles.captionLarge}>
          Already have an account?{" "}
          <Text style={{ color: colors.text.action, textDecorationLine: "underline" }}>Sign UP</Text>
        </Text>
      </View>
    </AuthScaffold>
  );
}
