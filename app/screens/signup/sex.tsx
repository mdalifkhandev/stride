import { useState } from "react";

import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { Ionicons } from "@expo/vector-icons";
import { Platform, ScrollView, Pressable, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";

import { AuthChoiceCard } from "../../../components/auth/AuthChoiceCard";
import { AppButton } from "../../../components/ui/AppButton";
import { AppScreen } from "../../../components/ui/AppScreen";
import { SignupProgressHeader } from "../../../components/signup/SignupProgressHeader";
import { colors, radius, spacing, textStyles } from "../../../theme/theme";

export default function SignupSexScreen() {
  const router = useRouter();
  const [sex, setSex] = useState<"male" | "female">("male");
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [showPicker, setShowPicker] = useState(false);

  const ageValue = birthDate ? String(getAge(birthDate)) : "";

  const handleDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    setShowPicker(false);

    if (event.type === "set" && selectedDate) {
      setBirthDate(selectedDate);
    }
  };

  return (
    <AppScreen>
      <SignupProgressHeader progress={20} />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
        <View style={styles.ageFieldWrap}>
          <Text style={styles.sectionTitle}>Age</Text>
          <Pressable onPress={() => setShowPicker(true)} style={styles.ageField}>
            <Text style={ageValue ? styles.ageValue : styles.agePlaceholder}>
              {ageValue || "Select from calendar"}
            </Text>
            <Ionicons name="calendar-clear-outline" size={20} color={colors.text.action} />
          </Pressable>
        </View>

        <View style={styles.sexSection}>
          <Text style={styles.sectionTitle}>Sex</Text>
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

      <View style={styles.footer}>
        <View style={styles.buttonWrap}>
          <AppButton label="Previous" variant="secondary" onPress={() => router.back()} />
        </View>
        <View style={styles.buttonWrap}>
          <AppButton label="Continue" onPress={() => router.push("/screens/signup/height")} />
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

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    marginTop: 22,
  },
  content: {
    gap: spacing[20],
    paddingBottom: spacing[24],
  },
  ageFieldWrap: {
    gap: spacing[8],
  },
  ageField: {
    minHeight: 54,
    borderWidth: 1,
    borderColor: "#d7d7d7",
    borderRadius: radius.md,
    paddingHorizontal: spacing[16],
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.surface.primary,
  },
  agePlaceholder: {
    ...textStyles.bodySmall,
    color: colors.text.secondary,
  },
  ageValue: {
    ...textStyles.bodySmall,
    color: colors.text.primary,
  },
  sexSection: {
    gap: spacing[12],
  },
  sectionTitle: {
    ...textStyles.titleSmall,
    color: colors.text.primary,
    fontWeight: "700",
  },
  footer: {
    flexDirection: "row",
    gap: spacing[16],
  },
  buttonWrap: {
    flex: 1,
  },
});
