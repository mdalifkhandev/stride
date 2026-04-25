import { useState } from "react";

import { Href, useRouter } from "expo-router";
import { ScrollView, Text, View } from "react-native";

import Logo from "../../../../assets/images/logo.svg";
import {
  scaleLineHeight,
  scaleTextSize,
  useTextScale,
} from "../../../../components/accessibility/TextScaleContext";
import { AuthChoiceCard } from "../../../../components/auth/signup/AuthChoiceCard";
import { AppScreen } from "../../../../components/ui/AppScreen";
import { colors, radius, spacing, textStyles } from "../../../../theme";

type CaregiverChoice = "yes" | "no" | null;

export default function CaregiverIntroScreen() {
  useTextScale();
  const router = useRouter();
  const detailsRoute = "/screens/auth/caregiver/details" as Href;
  const questionsRoute = "/screens/auth/caregiver/questions/1" as Href;
  const [choice, setChoice] = useState<CaregiverChoice>("no");

  const handleSelect = (nextChoice: CaregiverChoice) => {
    setChoice(nextChoice);

    if (nextChoice === "yes") {
      router.push(detailsRoute);
      return;
    }

    if (nextChoice === "no") {
      router.push(questionsRoute);
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
        <View style={{ minHeight: 12 }} />

        <View style={{ flex: 1, justifyContent: "center", gap: spacing[24] }}>
          <View
            style={{
              width: "100%",
              alignItems: "center",
              paddingTop: spacing[20],
            }}
          >
            <View
              style={{
                width: 182,
                height: 182,
                borderTopLeftRadius: 91,
                borderTopRightRadius: 91,
                borderBottomLeftRadius: 91,
                borderBottomRightRadius: 0,
                backgroundColor: "#DCEBFF",
                alignItems: "center",
                justifyContent: "center",
                paddingHorizontal: spacing[16],
                marginBottom: -spacing[12],
              }}
            >
              <Text
                style={[
                  textStyles.titleT2,
                  {
                    color: colors.text.action,
                    fontWeight: "700",
                    fontSize: 18,
                    lineHeight: scaleLineHeight(30),
                    textAlign: "center",
                  },
                ]}
              >
                A few more{"\n"}questions until{"\n"}we can start{"\n"}your
                journey
              </Text>
            </View>

            <Logo width={280} height={116} />
          </View>

          <View style={{ gap: spacing[16] }}>
            <Text
              style={[
                textStyles.h2,
                {
                  color: colors.text.primary,
                  fontWeight: "700",
                  fontSize: scaleTextSize(24),
                  lineHeight: scaleLineHeight(36),
                },
              ]}
            >
              Do you have a caregiver?
            </Text>

            <AuthChoiceCard
              title="Yes"
              selected={choice === "yes"}
              onPress={() => handleSelect("yes")}
            />
            <AuthChoiceCard
              title="No"
              selected={choice === "no"}
              onPress={() => handleSelect("no")}
            />
          </View>
        </View>

        <View
          style={{
            alignItems: "center",
            paddingBottom: spacing[4],
            marginTop: spacing[20],
          }}
        >
          <View
            style={{
              width: 132,
              height: 5,
              borderRadius: radius.full,
              backgroundColor: "#C7C7CC",
              opacity: 0.9,
            }}
          />
        </View>
      </ScrollView>
    </AppScreen>
  );
}
