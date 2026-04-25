import { useState } from "react";

import { Ionicons } from "@expo/vector-icons";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { Href, useRouter } from "expo-router";
import { Platform, Pressable, ScrollView, Text, View } from "react-native";

import { AuthChoiceCard } from "../../../../components/auth/signup/AuthChoiceCard";
import { SignupProgressHeader } from "../../../../components/auth/signup/SignupProgressHeader";
import { AppButton } from "../../../../components/ui/AppButton";
import { AppScreen } from "../../../../components/ui/AppScreen";
import { colors, radius, spacing, textStyles } from "../../../../theme";

export default function SignupSexScreen() {
  const router = useRouter();
  const heightRoute = "/screens/auth/myself/height" as Href;
  const [sex, setSex] = useState<"male" | "female">("male");
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [showPicker, setShowPicker] = useState(false);

  const ageValue = birthDate ? String(getAge(birthDate)) : "";

  const handleDateChange = (
    event: DateTimePickerEvent,
    selectedDate?: Date,
  ) => {
    setShowPicker(false);

    if (event.type === "set" && selectedDate) {
      setBirthDate(selectedDate);
    }
  };

  return (
    <AppScreen>
      <SignupProgressHeader currentStep={2} totalSteps={4} />

      <ScrollView
        style={{ flex: 1, marginTop: 22 }}
        contentContainerStyle={{ gap: spacing[20], paddingBottom: spacing[24] }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ gap: spacing[8] }}>
          <Text
            style={[
              textStyles.titleSmall,
              { color: colors.text.primary, fontWeight: "700" },
            ]}
          >
            Age
          </Text>
          <Pressable
            onPress={() => setShowPicker(true)}
            style={{
              minHeight: 54,
              borderWidth: 1,
              borderColor: "#d7d7d7",
              borderRadius: radius.md,
              paddingHorizontal: spacing[16],
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: colors.surface.primary,
            }}
          >
            <Text
              style={[
                textStyles.bodySmall,
                {
                  color: ageValue ? colors.text.primary : colors.text.secondary,
                },
              ]}
            >
              {ageValue || "Select from calendar"}
            </Text>
            <Ionicons
              name="calendar-clear-outline"
              size={20}
              color={colors.text.action}
            />
          </Pressable>
        </View>

        <View style={{ gap: spacing[12] }}>
          <Text
            style={[
              textStyles.titleSmall,
              { color: colors.text.primary, fontWeight: "700" },
            ]}
          >
            Sex
          </Text>
          <AuthChoiceCard
            title="Male"
            selected={sex === "male"}
            onPress={() => setSex("male")}
          />
          <AuthChoiceCard
            title="Female"
            selected={sex === "female"}
            onPress={() => setSex("female")}
          />
        </View>
      </ScrollView>

      <View style={{ flexDirection: "row", gap: spacing[16] }}>
        <View style={{ flex: 1 }}>
          <AppButton
            label="Previous"
            variant="secondary"
            onPress={() => router.back()}
          />
        </View>
        <View style={{ flex: 1 }}>
          <AppButton
            label="Continue"
            onPress={() => router.push(heightRoute)}
          />
        </View>
      </View>

      {showPicker ? (
        <DateTimePicker
          value={birthDate ?? new Date(2000, 0, 1)}
          mode="date"
          display={Platform.OS === "android" ? "calendar" : "default"}
          maximumDate={new Date()}
          onChange={handleDateChange}
        />
      ) : null}
    </AppScreen>
  );
}

function getAge(date: Date) {
  const today = new Date();
  let age = today.getFullYear() - date.getFullYear();
  const monthDiff = today.getMonth() - date.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < date.getDate())) {
    age -= 1;
  }

  return age;
}
