import { useState } from "react";

import { StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";

import { AppButton } from "../../../components/ui/AppButton";
import { AppScreen } from "../../../components/ui/AppScreen";
import { SignupProgressHeader } from "../../../components/signup/SignupProgressHeader";
import { ScrollMeasurePicker } from "../../../components/signup/ScrollMeasurePicker";
import { UnitToggle } from "../../../components/signup/UnitToggle";
import { colors, spacing, textStyles } from "../../../theme/theme";

const HEIGHT_OPTIONS = [
  "4'",
  "5'",
  "6'",
  "7'",
] as const;

const HEIGHT_DECIMALS = [
  '00"',
  '01"',
  '02"',
  '03"',
  '04"',
  '05"',
  '06"',
  '07"',
  '08"',
  '09"',
  '10"',
  '11"',
] as const;

export default function SignupHeightScreen() {
  const router = useRouter();
  const [unit, setUnit] = useState<"Inches" | "Ft">("Inches");
  const [selectedLeftIndex, setSelectedLeftIndex] = useState(1);
  const [selectedRightIndex, setSelectedRightIndex] = useState(9);

  return (
    <AppScreen>
      <SignupProgressHeader progress={20} />

      <View style={styles.content}>
        <Text style={styles.title}>What&apos;s your height?</Text>
        <UnitToggle options={["Inches", "Ft"] as const} value={unit} onChange={setUnit} />

        <ScrollMeasurePicker
          leftValues={HEIGHT_OPTIONS}
          rightValues={HEIGHT_DECIMALS}
          selectedLeftIndex={selectedLeftIndex}
          selectedRightIndex={selectedRightIndex}
          onChangeLeft={setSelectedLeftIndex}
          onChangeRight={setSelectedRightIndex}
        />
      </View>

      <View style={styles.footer}>
        <View style={styles.buttonWrap}>
          <AppButton label="Previous" variant="secondary" onPress={() => router.back()} />
        </View>
        <View style={styles.buttonWrap}>
          <AppButton label="Continue" onPress={() => router.push("/screens/signup/weight")} />
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
