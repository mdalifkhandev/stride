import { useState } from "react";

import { StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";

import { AppButton } from "../../../components/ui/AppButton";
import { AppScreen } from "../../../components/ui/AppScreen";
import { SignupProgressHeader } from "../../../components/signup/SignupProgressHeader";
import { ScrollMeasurePicker } from "../../../components/signup/ScrollMeasurePicker";
import { UnitToggle } from "../../../components/signup/UnitToggle";
import { colors, spacing, textStyles } from "../../../theme/theme";

const WEIGHT_OPTIONS = [
  { left: "60", right: "10" },
  { left: "100", right: "55" },
  { left: "80", right: "00" },
  { left: "90", right: "25" },
  { left: "300", right: "05" },
] as const;

export default function SignupWeightScreen() {
  const router = useRouter();
  const [unit, setUnit] = useState<"Pounds" | "Kg">("Kg");
  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <AppScreen>
      <SignupProgressHeader progress={20} />

      <View style={styles.content}>
        <Text style={styles.title}>What&apos;s your Weight?</Text>
        <UnitToggle options={["Pounds", "Kg"] as const} value={unit} onChange={setUnit} />

        <ScrollMeasurePicker
          values={WEIGHT_OPTIONS}
          selectedIndex={selectedIndex}
          onChange={setSelectedIndex}
        />
      </View>

      <View style={styles.footer}>
        <View style={styles.buttonWrap}>
          <AppButton label="Previous" variant="secondary" onPress={() => router.back()} />
        </View>
        <View style={styles.buttonWrap}>
          <AppButton label="Done" onPress={() => router.push("/screens/signup/success")} />
        </View>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: spacing[24],
  },
  title: {
    ...textStyles.titleT2,
    color: colors.text.primary,
    fontWeight: "700",
    textAlign: "center",
  },
  footer: {
    flexDirection: "row",
    gap: spacing[16],
  },
  buttonWrap: {
    flex: 1,
  },
});
