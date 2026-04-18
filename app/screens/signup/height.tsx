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
  { left: "4'", right: '32"' },
  { left: "4'", right: '58"' },
  { left: "5'", right: '10"' },
  { left: "5'", right: '33"' },
  { left: "5'", right: '66"' },
  { left: "6'", right: '02"' },
  { left: "6'", right: '34"' },
] as const;

export default function SignupHeightScreen() {
  const router = useRouter();
  const [unit, setUnit] = useState<"Inches" | "Ft">("Inches");
  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <AppScreen>
      <SignupProgressHeader progress={20} />

      <View style={styles.content}>
        <Text style={styles.title}>What&apos;s your height?</Text>
        <UnitToggle options={["Inches", "Ft"] as const} value={unit} onChange={setUnit} />

        <ScrollMeasurePicker
          values={HEIGHT_OPTIONS}
          selectedIndex={selectedIndex}
          onChange={setSelectedIndex}
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
