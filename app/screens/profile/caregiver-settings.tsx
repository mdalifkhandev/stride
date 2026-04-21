import { useRouter } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { PersonalInfoCard } from "../../../components/profile/PersonalInfoCard";
import { PersonalInfoHeader } from "../../../components/profile/PersonalInfoHeader";

const caregiverInfoSeed = [
  { label: "Full Name", value: "Mahmudur Rahman" },
  { label: "Email", value: "mahmud.uiuxdesign@gmail.com" },
  { label: "Mobile", value: "+8801770504877" },
];

export default function CaregiverSettingsScreen() {
  const router = useRouter();
  const [caregiverInfo, setCaregiverInfo] = useState(caregiverInfoSeed);

  function updateItems(label: string, value: string) {
    setCaregiverInfo((current) =>
      current.map((item) => (item.label === label ? { ...item, value } : item))
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
              title="Caregiver Settings"
              onBack={() => router.back()}
            />

            <View className="mt-5">
              <PersonalInfoCard
                items={caregiverInfo}
                onUpdateItem={(label, value) => updateItems(label, value)}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
