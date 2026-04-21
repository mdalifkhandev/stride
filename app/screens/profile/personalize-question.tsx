import { useRouter } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { PersonalInfoHeader } from "../../../components/profile/PersonalInfoHeader";
import { PersonalizeQuestionSection } from "../../../components/profile/PersonalizeQuestionSection";

const healthAndActivitySeed = [
  {
    question: "How active are you right now?",
    answers: ["Rarely or Never"],
  },
  {
    question: "Which Describes You Best?",
    answers: ["I mostly sit during the day"],
  },
  {
    question: "What about Health conditions?",
    answers: ["Stroke", "Dementia", "High Blood Pressure"],
  },
];

const preferencesAndGoalsSeed = [
  {
    question: "How active are you right now?",
    answers: ["Rarely or Never"],
  },
  {
    question: "Which Describes You Best?",
    answers: ["I mostly sit during the day"],
  },
  {
    question: "What about Health conditions?",
    answers: ["Stroke", "Dementia", "High Blood Pressure"],
  },
];

export default function PersonalizeQuestionScreen() {
  const router = useRouter();
  const [healthAndActivity, setHealthAndActivity] = useState(
    healthAndActivitySeed,
  );
  const [preferencesAndGoals, setPreferencesAndGoals] = useState(
    preferencesAndGoalsSeed,
  );

  function updateItems(
    setItems: React.Dispatch<React.SetStateAction<typeof healthAndActivity>>,
    question: string,
    answers: string[],
  ) {
    setItems((current) =>
      current.map((item) =>
        item.question === question ? { ...item, answers } : item,
      ),
    );
  }

  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-[#F5F7FB]">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 12 : 0}
      >
        <ScrollView
          contentContainerStyle={{ paddingBottom: 32 }}
          showsVerticalScrollIndicator={false}
        >
          <View className="px-4 pt-3">
            <PersonalInfoHeader
              title="Personalize Question"
              onBack={() => router.back()}
            />

            <PersonalizeQuestionSection
              title="Health & Activity"
              items={healthAndActivity}
              onUpdateItem={(question, answers) =>
                updateItems(setHealthAndActivity, question, answers)
              }
            />

            <View className="h-7" />

            <PersonalizeQuestionSection
              title="Preferences & Goals"
              items={preferencesAndGoals}
              onUpdateItem={(question, answers) =>
                updateItems(setPreferencesAndGoals, question, answers)
              }
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
