import { useState } from "react";

import { Href, useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

import {
  scaleLineHeight,
  scaleTextSize,
  useTextScale,
} from "../../../../components/accessibility/TextScaleContext";
import { AuthChoiceCard } from "../../../../components/auth/signup/AuthChoiceCard";
import { SignupChoiceHeader } from "../../../../components/auth/signup/SignupChoiceHeader";
import { AppButton } from "../../../../components/ui/AppButton";
import { AppScreen } from "../../../../components/ui/AppScreen";
import { colors, spacing, textStyles } from "../../../../trast/theme";

type Choice = "myself" | "caregiver" | "organization" | null;

export default function SignupIndex() {
  useTextScale();
  const router = useRouter();
  const [choice, setChoice] = useState<Choice>(null);
  const [showWarning, setShowWarning] = useState(false);
  const loginRoute = "/screens/auth/login" as Href;
  const myself = "/screens/auth/myself/profile" as Href;
  const caregiver = "/screens/auth/caregiver" as Href;
  const organization = "/screens/auth/organization" as Href;
  const isChoiceMissing = choice === null;

  const handleContinue = () => {
    if (choice === null) {
      setShowWarning(true);
      return;
    }

    if (choice === "myself") {
      router.push(myself);
      return;
    }

    if (choice === "caregiver") {
      router.push(caregiver);
      return;
    }

    if (choice === "organization") {
      router.push(organization);
    }
  };

  return (
    <AppScreen>
      <ScrollView
        bounces={false}
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={{ paddingTop: 16 }}>
          <SignupChoiceHeader
            title="How will you use Stride?"
            subtitle="Choose the option that best describes you."
          />
        </View>

        <View
          style={{ flex: 1, justifyContent: "space-between", paddingTop: 24 }}
        >
          <View style={{ gap: spacing[12] }}>
            <AuthChoiceCard
              title="For Myself"
              description="Improve my daily physical and mental activity."
              selected={choice === "myself"}
              onPress={() => {
                setChoice("myself");
                setShowWarning(false);
              }}
            />
            <AuthChoiceCard
              title="As a Caregiver"
              description="Support a client or loved one on their wellness journey."
              selected={choice === "caregiver"}
              onPress={() => {
                setChoice("caregiver");
                setShowWarning(false);
              }}
            />
            <AuthChoiceCard
              title="For My Organization"
              description="Set up Stride for a business or care provider."
              selected={choice === "organization"}
              onPress={() => {
                setChoice("organization");
                setShowWarning(false);
              }}
            />
          </View>

          <View
            style={{
              gap: spacing[24],
              paddingBottom: spacing[8],
              marginTop: spacing[24],
            }}
          >
            {showWarning ? (
              <View
                style={{
                  alignSelf: "center",
                  backgroundColor: "#FDECEA",
                  borderWidth: 0.5,
                  borderColor: colors.border.warning,
                  borderRadius: 4,
                  paddingHorizontal: spacing[8],
                  paddingVertical: spacing[2],
                }}
              >
                <Text
                  style={[
                    textStyles.captionLarge,
                    {
                      color: colors.text.warning,
                      fontSize: scaleTextSize(14),
                      lineHeight: scaleLineHeight(21),
                    },
                  ]}
                >
                  Please choose an option to continue
                </Text>
              </View>
            ) : null}
            <AppButton label="Continue" onPress={handleContinue} />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={[
                  textStyles.captionLarge,
                  {
                    color: colors.text.secondary,
                    fontSize: scaleTextSize(14),
                    lineHeight: scaleLineHeight(21),
                  },
                ]}
              >
                Already have an account?{" "}
              </Text>
              <Pressable onPress={() => router.push(loginRoute)}>
                <Text
                  style={[
                    textStyles.captionLarge,
                    {
                      color: colors.text.action,
                      textDecorationLine: "underline",
                      fontSize: scaleTextSize(14),
                      lineHeight: scaleLineHeight(21),
                    },
                  ]}
                >
                  Sign In
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </AppScreen>
  );
}
