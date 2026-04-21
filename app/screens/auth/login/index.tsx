import { useState } from "react";

import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

import GoogleIcon from "../../../../assets/images/google.svg";
import { AuthDivider } from "../../../../components/auth/login/AuthDivider";
import { AuthLogoHeader } from "../../../../components/auth/login/AuthLogoHeader";
import { AuthOptionCard } from "../../../../components/auth/login/AuthOptionCard";
import { AuthScaffold } from "../../../../components/auth/login/AuthScaffold";
import { AppButton } from "../../../../components/ui/AppButton";
import { colors, spacing, textStyles } from "../../../../trast/theme";

export default function LoginIndex() {
  const router = useRouter();
  const [method, setMethod] = useState<"email" | "phone">("email");
  const signupRoute = "/screens/auth/signup" as const;

  const handleNext = () => {
    router.push(
      method === "email"
        ? "/screens/auth/login/email"
        : "/screens/auth/login/phone",
    );
  };

  return (
    <AuthScaffold contentAlignment="top" header={<AuthLogoHeader compact />}>
      <View style={{ gap: spacing[16] }}>
        <Text
          style={[textStyles.h1, { textAlign: "center", fontWeight: "700" }]}
        >
          Welcome Back!
        </Text>
        <Text
          style={[
            textStyles.bodySmall,
            {
              textAlign: "center",
              color: colors.text.secondary,
              lineHeight: 20,
              marginTop: -spacing[8],
            },
          ]}
        >
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
                color={
                  method === "email" ? colors.text.action : colors.text.primary
                }
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
                color={
                  method === "phone" ? colors.text.action : colors.text.primary
                }
              />
            }
          />
        </View>
      </View>

      <View
        style={{
          gap: spacing[16],
          paddingBottom: spacing[8],
          marginTop: spacing[12],
        }}
      >
        <AppButton label="Next" fullRadius onPress={handleNext} />
        <AuthDivider />
        <AppButton
          label="Continue with Google"
          variant="secondary"
          fullRadius
          leftSlot={<GoogleIcon width={20} height={20} />}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Text style={textStyles.captionLarge}>Already have an account?</Text>
          <Pressable onPress={() => router.push(signupRoute)}>
            <Text
              style={[
                textStyles.captionLarge,
                {
                  color: colors.text.action,
                  textDecorationLine: "underline",
                },
              ]}
            >
              Sign UP
            </Text>
          </Pressable>
        </View>
      </View>
    </AuthScaffold>
  );
}
