import { useState } from "react";

import { Href, useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

import { AuthLogoHeader } from "../../../../components/auth/login/AuthLogoHeader";
import { AuthChoiceCard } from "../../../../components/auth/signup/AuthChoiceCard";
import { AppButton } from "../../../../components/ui/AppButton";
import { AppScreen } from "../../../../components/ui/AppScreen";
import { colors, spacing, textStyles } from "../../../../trast/theme";

type Choice = "myself" | "caregiver" | "organization" | null;

export default function SignupIndex() {
  const router = useRouter();
  const [choice, setChoice] = useState<Choice>(null);
  const loginRoute = "/screens/auth/login" as Href;
  const myself = "/screens/auth/myself/profile" as Href;
  const isChoiceMissing = choice === null;

  const handleContinue = () => {
    if (choice === "myself") {
      router.push(myself);
    }
  };

  return (
    <AppScreen>
      <View style={{ paddingTop: 28 }}>
        <AuthLogoHeader
          title="How will you use Stride?"
          subtitle="Choose the option that best describes you."
        />
      </View>

      <View style={{ flex: 1, justifyContent: "flex-start", paddingTop: 36 }}>
        <View style={{ gap: spacing[12] }}>
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

      <View
        style={{
          gap: spacing[12],
          paddingBottom: spacing[8],
          marginTop: spacing[20],
        }}
      >
        {isChoiceMissing ? (
          <Text
            style={[
              textStyles.captionLarge,
              { color: colors.text.warning, textAlign: "center" },
            ]}
          >
            Please choose an option to continue
          </Text>
        ) : null}
        <AppButton
          label="Continue"
          disabled={isChoiceMissing}
          onPress={handleContinue}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={[textStyles.captionLarge, { color: colors.text.secondary }]}
          >
            Already have an account?{" "}
          </Text>
          <Pressable onPress={() => router.push(loginRoute)}>
            <Text
              style={[
                textStyles.captionLarge,
                { color: colors.text.action, textDecorationLine: "underline" },
              ]}
            >
              Sign In
            </Text>
          </Pressable>
        </View>
      </View>
    </AppScreen>
  );
}
