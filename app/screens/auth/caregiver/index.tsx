import { Image } from "expo-image";
import { useState } from "react";

import { Href, useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

import { AuthChoiceCard } from "../../../../components/auth/signup/AuthChoiceCard";
import { AppScreen } from "../../../../components/ui/AppScreen";
import { colors, radius, spacing, textStyles } from "../../../../trast/theme";

type CaregiverChoice = "yes" | "no" | null;

export default function CaregiverIntroScreen() {
  const router = useRouter();
  const detailsRoute = "/screens/auth/caregiver/details" as Href;
  const questionsRoute = "/screens/auth/caregiver/questions/1" as Href;
  const [choice, setChoice] = useState<CaregiverChoice>("yes");

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
      <View style={{ minHeight: 20 }} />

      <View style={{ flex: 1, justifyContent: "center", gap: spacing[28] }}>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            paddingTop: spacing[8],
          }}
        >
          <Image
            source={require("@/assets/images/caregiver-first-screen.png")}
            style={{ width: "100%", height: 300 }}
            contentFit="contain"
          />
        </View>

        <View style={{ gap: spacing[16] }}>
          <Text
            style={[
              textStyles.h2,
              { color: colors.text.primary, fontWeight: "700" },
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

      <View style={{ alignItems: "center", paddingBottom: spacing[4] }}>
        <Pressable
          accessibilityRole="none"
          style={{
            width: 108,
            height: 5,
            borderRadius: radius.full,
            backgroundColor: colors.border.secondary,
            opacity: 0.55,
          }}
        />
      </View>
    </AppScreen>
  );
}
