import { Href, useRouter } from "expo-router";
import { ScrollView, Text } from "react-native";

import { SignupField } from "../../../../components/auth/signup/SignupField";
import { SignupProgressHeader } from "../../../../components/auth/signup/SignupProgressHeader";
import { AppButton } from "../../../../components/ui/AppButton";
import { AppScreen } from "../../../../components/ui/AppScreen";
import { colors, spacing } from "../../../../trast/theme";

export default function SignupProfileScreen() {
  const router = useRouter();
  const sexRoute = "/screens/auth/myself/sex" as Href;

  return (
    <AppScreen>
      <SignupProgressHeader currentStep={1} totalSteps={4} />

      <ScrollView
        style={{ flex: 1, marginTop: 28 }}
        contentContainerStyle={{ gap: 18, paddingBottom: spacing[24] }}
        showsVerticalScrollIndicator={false}
      >
        <Text
          style={[
            {
              color: colors.text.primary,
              fontFamily: "Inter",
              fontSize: 32,
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: 41,
              letterSpacing: 0.2,
              marginBottom: spacing[8],
            },
          ]}
        >
          Let&apos;s Get To Know You
        </Text>

        <SignupField label="Full Name" placeholder="Type your full name" />
        <SignupField label="Nickname" placeholder="Type your nickname" />
        <SignupField
          label="Email"
          placeholder="example@gamil.com"
          keyboardType="email-address"
        />
      </ScrollView>

      <AppButton label="Next" onPress={() => router.push(sexRoute)} />
    </AppScreen>
  );
}
