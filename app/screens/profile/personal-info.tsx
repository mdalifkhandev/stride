import { useRouter } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { PersonalInfoAvatar } from "../../../components/profile/PersonalInfoAvatar";
import { PersonalInfoCard } from "../../../components/profile/PersonalInfoCard";
import { PersonalInfoHeader } from "../../../components/profile/PersonalInfoHeader";

const avatarImage = {
  uri: "https://i.pravatar.cc/300?img=68",
};

const primaryInfoSeed = [
  { label: "Full Name", value: "Mahmudur Rahman" },
  { label: "Nick Name", value: "Mahmud" },
  { label: "Email", value: "mahmud.uiuxdesign@gmail.com" },
  { label: "Mobile", value: "+8801770504877" },
];

const secondaryInfoSeed = [
  { label: "Age", value: "15 May, 1952" },
  { label: "Gander", value: "Male" },
];

const bodyInfoSeed = [
  { label: "Height", value: "5’ 30”" },
  { label: "Weight", value: "80 kg" },
];

export default function PersonalInfoScreen() {
  const router = useRouter();
  const [primaryInfo, setPrimaryInfo] = useState(primaryInfoSeed);
  const [secondaryInfo, setSecondaryInfo] = useState(secondaryInfoSeed);
  const [bodyInfo, setBodyInfo] = useState(bodyInfoSeed);

  function updateItems(
    setItems: React.Dispatch<React.SetStateAction<typeof primaryInfo>>,
    label: string,
    value: string,
  ) {
    setItems((current) =>
      current.map((item) => (item.label === label ? { ...item, value } : item)),
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
              title="Personal Info"
              onBack={() => router.back()}
            />

            <PersonalInfoAvatar source={avatarImage} />

            <PersonalInfoCard
              items={primaryInfo}
              onUpdateItem={(label, value) =>
                updateItems(setPrimaryInfo, label, value)
              }
            />
            <PersonalInfoCard
              items={secondaryInfo}
              onUpdateItem={(label, value) =>
                updateItems(setSecondaryInfo, label, value)
              }
            />
            <PersonalInfoCard
              items={bodyInfo}
              onUpdateItem={(label, value) =>
                updateItems(setBodyInfo, label, value)
              }
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
