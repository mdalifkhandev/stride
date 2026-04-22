import { Image } from "expo-image";
import { useState } from "react";

import { Href, useRouter } from "expo-router";
import { ScrollView, Text, View } from "react-native";

import {
  scaleLineHeight,
  scaleTextSize,
  useTextScale,
} from "../../../../components/accessibility/TextScaleContext";
import { AuthChoiceCard } from "../../../../components/auth/signup/AuthChoiceCard";
import { AppScreen } from "../../../../components/ui/AppScreen";
import Logo from "../../../../assets/images/logo.svg";
import { colors, radius, spacing, textStyles } from "../../../../trast/theme";

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
              paddingTop: spacing[4],
            }}
          >
            <View
              style={{
                width: "100%",
                alignItems: "center",
                marginBottom: spacing[12],
              }}
            >
              <View
                style={{
                  width: 160,
                  height: 160,
                  borderTopLeftRadius: 80,
                  borderTopRightRadius: 80,
                  borderBottomLeftRadius: 80,
                  borderBottomRightRadius: 0,
                  backgroundColor: "#DCEBFF",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingHorizontal: spacing[12],
                }}
              >
                <Text
                  style={[
                    textStyles.titleT2,
                    {
                      color: colors.text.action,
                      fontWeight: "700",
                      fontSize: scaleTextSize(20),
                      lineHeight: scaleLineHeight(30),
                      textAlign: "center",
                    },
                  ]}
                >
                  A few more{"\n"}questions until{"\n"}we can start{"\n"}your
                  journey
                </Text>
              </View>
            </View>

            <Image
              source={require("@/assets/images/caregiver-first-screen.png")}
              style={{ width: "100%", height: 180 }}
              contentFit="contain"
            />

            <View
              style={{
                position: "absolute",
                top: spacing[24],
                right: spacing[36],
                width: 150,
                height: 112,
              }}
            >
              <Image
                source={require("@/assets/images/caregiver-message-shedwo.png")}
                style={{ width: "100%", height: "100%" }}
                contentFit="contain"
              />
            </View>

            <View
              style={{
                position: "absolute",
                top: spacing[48],
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Logo width={112} height={52} />
            </View>
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
            paddingBottom: spacing[6],
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
